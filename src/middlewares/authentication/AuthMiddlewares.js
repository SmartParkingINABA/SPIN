import jwt from 'jsonwebtoken';
import { getSessionToken } from '../../cache/Session.js';
import authRepo from '../../repositories/authentication/authenticationRepo.js';


const authenticationRoleBasedUser = (roles = []) => {
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return async (req, res, next) => {
        try {

            let token = null;
            const authHeader = req.headers.authorization;

            if (authHeader?.startsWith('Bearer ')) {
                token = authHeader.split(' ')[1];
            };

            if (!token) {
                const cookie = req.cookies?.sessionId;
                if (!cookie) {
                    return res.status(401).json(
                        {
                            message: 'Unauthorized!'
                        }
                    );
                }

                const [userIdStr, sessionId] = cookie.split(':');
                const userId = Number(userIdStr);

                token = await getSessionToken(userId, sessionId);
                if (!token) {
                    return res.status(401).json(
                        {
                            message: 'Session Invalid!'
                        }
                    );
                }
            }

            const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);

            const user = await authRepo.findUserWithByRoleId(payload.id);
            if (!user) {
                return res.status(404).json(
                    {
                        message: 'User Tidak Ditemukan!'
                    }
                );
            };

            const roleName = user.role?.nama_role?.toLowerCase();
            if (roles.length && !roles.includes(roleName)) {
                return res.status(403).json(
                    {
                        message: 'Akses Ditolak, Role Tidak Sesuai!'
                    }
                );
            }
            
            req.user = user;
            next();
        } catch (err) {
            console.error('Auth Error:', err);
            return res.status(500).json(
                {
                    message: 'Internal Server Error!',
                    err: err.message
                }
            );
            
    }
    }
};

export default authenticationRoleBasedUser;