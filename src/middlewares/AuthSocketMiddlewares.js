import jwt from 'jsonwebtoken';

const authSocket = async (socket, next) => {
    try {
        const token = socket.handshake.auth?.token;
        
        if (!token) {
            return next(new Error('Token Tidak Ditemukan!'));
        };
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        socket.user = decoded;
        
        next();
    } catch (err) {
        next(new Error('Token Tidak Valid Atau Expire'));
    }
};

export default authSocket;