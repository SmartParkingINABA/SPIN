import redis from "../configs/RedisConfig.js";

class statusCache {
    static statusPrefix = 'petugas:status:';
    static socketPrefix = 'petugas:sockets:';
    static onlineSetKeys = 'petugas:online';
    static ttlSeconds = 120;

    static statusKey(userId) {
        return `${this.statusPrefix}${userId}`
    };

    static socketsKey(userId) {
        return `${this.socketPrefix}${userId}`
    };

    static async setOnline(userId, socketId) {

        await Promise.all(
            [
                redis.sadd(this.onlineSetKeys, userId),
                redis.sadd(this.socketsKey(userId), socketId),
                redis.set(
                    this.statusKey(userId),
                    JSON.stringify(
                        {
                            status: 'Online',
                            lastSeen: new Date().toISOString()
                        }
                    ),
                    'EX',
                    this.ttlSeconds
                )
            ]
        );
    };
    
    static async heartbeat(userId) {
        await redis.expire(this.statusKey(userId), this.ttlSeconds)
    };
    
    static async removeSocket(userId, socketId) {
        const socketKey = this.socketsKey(userId);

        await redis.srem(socketKey, socketId);
        const remaining = await redis.scard(socketKey)

        if (remaining === 0) {
            await Promise.all(
                [
                    redis.srem(this.onlineSetKeys, userId),
                    redis.del(this.statusKey(userId)),
                    redis.del(socketKey)
                ]
            )
        };
    };

    static async getStatus(userId) {
        const data = await redis.get(this.statusKey(userId));

        if(!data) return null;

        try {
            return JSON.parse(data)
        } catch (err) {
            return null;
        }
    }

    static async totalPetugasOnline() {
        return await redis.scard(this.onlineSetKeys);
    };

    static async cleanUp() {
        const userIds = await redis.smembers(this.onlineSetKeys);

        for (const userId of userIds ) {
            const exist = await redis.exists(this.statusKey(userId));

            if (!exist) {
                await Promise.all(
                    [
                        redis.srem(this.onlineSetKeys, userId),
                        redis.del(this.socketsKey(userId))
                    ]
                );
            }
        }
    }
};

export default statusCache;