import dotenv from 'dotenv'
import app from './app.js'
import sequelize from './configs/DBConfig.js';
import redis from './configs/RedisConfig.js';
import http from 'http';
import { Server } from 'socket.io';
import petugasSocketStatus from './socket/petugas/SocketPetugasStatus.js';
import authSocketMiddlewares from './middlewares/authentication/AuthSocketMiddlewares.js';
import startCleanupJobs from './jobs/cleanupPetugasOnline.js';
import pengendaraSocket from './socket/pengendara/pengendaraSocket.js';
import adminSocket from './socket/admin/adminSocket.js';
import { setSocketIo } from './socket/emitter/notifikasiEmitter.js';

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection successss!');

        const server = http.createServer(app);
        const io = new Server(server, {
            cors: {
                origin: true,
                credentials: true
            }
        });

        io.use(authSocketMiddlewares);
        adminSocket(io)
        petugasSocketStatus(io);
        pengendaraSocket(io);
        setSocketIo(io);
        startCleanupJobs();

        server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

        redis.on('connect', () => {
            console.log('Redis Connected successs!');
        });

        redis.on('error', () => {
            console.log('Redis connection failed');
            
        })

    } catch (err) {
        console.error('Server Failed To Start');
        console.error(err);
        process.exit(1);
    }
})();