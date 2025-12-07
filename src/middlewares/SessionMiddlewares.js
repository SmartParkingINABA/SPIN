import { sessionValid } from "../utils/Session.js";

const verifySession = async (req, res, next) => {
    try {
        const cookie = req.cookies?.sessionId;

        if (!cookie) {
            return res.status(401).json(
                {
                    message: 'Session Cookie Tidak Ditemukan!'
                }
            );
        };

        const [userIdStr, sessionId] = cookie.split(':');
        const userId = parseInt(userIdStr, 10);

        if (!userId || !sessionId) {
            return res.status(401).json(
                {
                    message: 'Session Cookie Tidak Valid!'
                }
            )
        };
        const valid = await sessionValid(user.id_users, sessionId);
        if (!valid) {
            return res.status(401).json(
                {
                    message: 'Session Invalid Atau Expires!'
                }
            );
        };

        req.session = { userId, sessionId };
        next();
    } catch(err) {
        console.error('Session middleware error: ', err);
        return res.status(500).json(
            {
                message: 'Internal Server Error!'
            }
        );
    };
};

export default verifySession;