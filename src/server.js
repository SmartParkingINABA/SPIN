import dotenv from 'dotenv'
dotenv.config({path: '../src/environments/.env'});
import app from './app.js'
import sequelize from './configs/DBConfig.js';
import redis from './configs/RedisConfig.js';
import http from 'http';
import { Server } from 'socket.io';
import petugasSocketStatus from './socket/petugas/SocketPetugasStatus.js';
import authSocketMiddlewares from './middlewares/authentication/AuthSocketMiddlewares.js';
import startCleanupJobs from './jobs/cleanupPetugasOnline.js';

const PORT = process.env.PORT || 3500;

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection successss!');

        const server = http.createServer(app);
        const io = new Server(server, {
            cors: {
                origin: process.env.CLIENT_SIDE_URL,
                credentials: true
            }
        });

        io.use(authSocketMiddlewares);
        petugasSocketStatus(io);
        startCleanupJobs();

        server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

        redis.on('connect', () => {
            console.log('Redis Connected successs!');
        });
    } catch (err) {
        console.error('Server Failed To Start');
        console.error(err);
        process.exit(1);
    }
})();