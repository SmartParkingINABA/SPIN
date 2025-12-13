import redis from "../configs/RedisConfig.js";

class statusService {
    static statusPrefix = 'petugas:status:';
    static ttlSeconds = 120;

    static async setOnlineStatus(userId, socketId) {
        const key = `${this.statusPrefix}${userId}`;

        await redis.set(
            key,
            JSON.stringify(
                {
                    status: 'Online',
                    socketId,
                    lastSeen: new Date().toISOString()
                }
            ),
            'EX',
            this.ttlSeconds
        );
    };

    static async setOfflineStatus(userId, socketId) {
        const key = `${this.statusPrefix}${userId}`;

        await redis.set(
            key,
            JSON.stringify(
                {
                    status: 'Offline',
                    socketId,
                    lastSeen: new Date().toISOString()
                }
            ),
            'EX',
            this.ttlSeconds
        );
    };

    static async heartbeat(userId, socketId) {
        const key = `${this.statusPrefix}${userId}`;

        await redis.set(
            key,
            JSON.stringify(
                {
                    status: 'Online',
                    socketId,
                    lastSeen: new Date().toISOString()
                }
            ),
            'EX',
            this.ttlSeconds
        );
    };

    static async getStatus(userId) {
        const key = `${this.statusPrefix}${userId}`;
        const statusData = await redis.get(key);
        return statusData ? JSON.parse(statusData) : null;
    }
};

export default statusService;