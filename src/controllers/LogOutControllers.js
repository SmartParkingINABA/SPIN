import { deleteSession } from "../utils/SessionService.js";

const cookieName = 'sessionId';

const logoutController = {
    async handleLogout(req, res) {
        try {
            const cookie = req.cookies?.sessionId;
            if (!cookie) {
                return res.status(400).json(
                    {
                        message: 'Session Cookie Tidak Ditemukan!'
                    }
                );
            };
            const [userIdStr, sessionId]= cookie.split(':');
            const userId = parseInt(userIdStr, 10);

            if (!userId || !sessionId) {
                res.clearCookie(cookieName, {
                    httpOnly: true,
                    samesite: 'strict',
                    secure: process.env.NODE_ENV === 'production'
                });
                return res.status(400).json(
                    {
                        message: 'Cookie Invalid, sudah dihapus'
                    }
                );
            };

            await deleteSession(userId, sessionId);
            res.clearCookie(cookieName, {
                httpOnly: true,
                samesite: 'strict',
                secure: process.env.NODE_ENV === 'production'
            });

            return res.status(200).json(
                {
                    message: 'Logout Berhasil'
                }
            );

        } catch(err) {
            console.error(err);
            return res.status(500).json(
                {
                    message: 'Internal Server Error!'
                }
            );
        }
    }
};

export default logoutController;