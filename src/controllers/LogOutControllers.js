import redis from "../configs/RedisConfig.js";

const logoutController = {
    async handleLogout(req, res) {
        try {
            const userId = req.user.id;
            const sessionId = req.headers['x-session-id'];

            if (!sessionId) {
                return res.status(400).json(
                    {
                        message: 'Session Id Tidak Ditemukan!'
                    }
                );
            };
            const sessionKey = `session:${userId}:${sessionId}`;
            await redis.del(sessionKey);
            return res.status(200).json(
                {
                    message: 'Logout Berhasil'
                }
            );

        } catch(err) {
            console.error(err);
            return res.status(500).json(
                {
                    message: 'Internal Server Error'
                }
            );
        }
    }
};

export default logoutController;