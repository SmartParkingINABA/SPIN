import { getSessionUser } from "../../cache/Session.js";
import cookie from 'cookie'

const authSocketMiddlewares = async (socket, next) => {
    try {
        const rawCookie = socket.request.headers.cookie;
        console.log('Raw Cookie: ', socket.request.headers.cookie);
        
        if (!rawCookie) {
            return next(new Error('Cookie Tidak Ditemukan!'));
        };
        
        
        const cookies = cookie.parse(rawCookie);

        if (!cookies.sessionId) {
            return next(new Error('Session Cookie Tidak Ada!'));
        };

        const decodeSession = decodeURIComponent(cookies.sessionId)
        const [userIdStr, sessionId] = decodeSession.split(':');

        if (!userIdStr || !sessionId) {
            return next(new Error('Format Session Cookie Salah!'))
        }

        const userId = Number(userIdStr);

        const session = await getSessionUser(userId, sessionId);
        if(!session) {
            return next(new Error('Session Invalid Atau Expire!'));
        };

        socket.user = { id: userId };
        next();
    } catch (err) {
        console.log('Auth Socket Middleware Error', err);
        next(new Error('Internal Server Error!'));
        next(err)
    }
};

export default authSocketMiddlewares;