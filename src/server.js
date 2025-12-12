import dotenv from 'dotenv'
dotenv.config({path: '../src/environments/.env'});
import app from './app.js'
import sequelize from './configs/DBConfig.js';
import redis from './configs/RedisConfig.js';
import http from 'http';
import { Server } from 'socket.io';
import petugasSocketStatus from './utils/SocketPetugasStatus.js';
import authSocket from './middlewares/AuthSocketMiddlewares.js';

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

        io.use(authSocket);
        petugasSocketStatus(io)

        server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

        redis.on('connect', () => {
            console.log('Redis Connected successs!');
        });
    } catch (err) {
        console.error('Failed connect to database!');
        console.error('Redis failed to connected', err);
    }
})();