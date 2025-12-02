import { sessionValid } from "../utils/SessionService.js";

const verifySession = async (req, res, next) => {
    try {
        const user = req.user;
        const sessionId = req.headers['x-session-id'] || req.headers['X-Session-Id'];

        if (!sessionId) {
            return res.status(401).json(
                {
                    message: 'Session Id Tidak Ditemukan!'
                }
            );
        };

        const valid = await sessionValid(user.id_users, sessionId);
        if (!valid) {
            return res.status(401).json(
                {
                    message: 'Session Invalid Atau Expires!'
                }
            );
        };
        next();
    } catch(err) {
        console.error('Session middleware error: ', err);
        return res.status(500).json(
            {
                message: 'Internal Server Error'
            }
        );
    };
};

export default verifySession;