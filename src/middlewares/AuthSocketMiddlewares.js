import { getSessionUser } from "../utils/Session.js";
import cookie from 'cookie'

const authSocketMiddlewares = async (socket, next) => {
    try {
        const rawCookie = socket.request.headers.cookie;
        
        if (!rawCookie) {
            return next(new Error('Cookie Tidak Ditemukan!'));
        };
        
        const cookies = cookie.parse(rawCookie);
        const sessionCookies = cookies.sessionId;

        if (!sessionCookies) {
            return next(new Error('Session Cookie Tidak Ada!'));
        };

        const [userIdStr, sessionId] = sessionCookies.split(':');
        const userId = parseInt(userIdStr, 10);

        const session = await getSessionUser(userId, sessionId);
        if(!session) {
            return next(new Error('Session Invalid Atau Expire!'));
        };

        socket.user = { id: userId };
        next();
    } catch (err) {
        next(new Error('Token Tidak Valid Atau Expire'));
    }
};

export default authSocketMiddlewares;