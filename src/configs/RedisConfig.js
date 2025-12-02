import Redis from 'ioredis'
import dotenv from 'dotenv'
dotenv.configDotenv({ path: "./src/environments/.env" });

const redis = new Redis ({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    username: process.env.REDIS_USNM,
    password: process.env.REDIS_PW,
});

redis.on('connect', () => {
    console.log('Redis Connected successs!');
    
});

redis.on('error', (err) => {
    console.log('Redis failed to connected', err);
    
});


export default redis;