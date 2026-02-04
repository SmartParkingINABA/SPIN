import { getSessionUser } from "../../cache/Session.js";
import cookie from 'cookie'
import { Users } from "../../models/Index.js";

const authSocketMiddlewares = async (socket, next) => {
    try {
        const rawCookie = socket.request.headers.cookie;
        console.log('Raw Cookie: ', rawCookie);
        
        if (!rawCookie) {
            return next(new Error('Cookie Tidak Ditemukan!'));
        };
        
        
        const cookies = cookie.parse(rawCookie);

        if (!cookies.sessionId) {
            return next(new Error('Session Cookie Tidak Ada!'));
        };

        const decodeSession = decodeURIComponent(cookies.sessionId)
        const [userIdStr, sessionId] = decodeSession.split(':');

        const userId = Number(userIdStr);
        if (!userId || !sessionId) {
            return next(new Error('Format Session Cookie Salah!'))
        }


        const session = await getSessionUser(userId, sessionId);
        if(!session) {
            return next(new Error('Session Invalid Atau Expire!'));
        };

        const user = await Users.findByPk(userId, {
            include: ['pengendaraProfile', 'petugasProfile', 'role']
        });

        if (!user) {
            return next(new Error('User Tidak Ditemukan'))
        }

        socket.user = { 
            id: user.id_users,
            role: user.role?.nama_role,
            pengendaraProfile: user.pengendaraProfile || null,
            petugasProfile: user.petugasProfile || null
        };

        console.log('Socket User: ', {role: socket.user.role});
        
        next();
    } catch (err) {
        console.error('Auth Socket Middleware Error', err);
        next(new Error('Internal Server Error!'));
        next(err)
    }
};

export default authSocketMiddlewares;