import redis from '../configs/RedisConfig.js';
import { v4 as uuid } from 'uuid'

const createUserSession = async (userId, jwtToken, seconds= 60 * 60 * 6) => {
    const sessionId = uuid();
    await redis.set(`session:${userId}:${sessionId}`, jwtToken, 'EX', seconds);
    return sessionId;
};

const sessionValid = async (userId, sessionId) => {
    const token = await redis.get(`session:${userId}:${sessionId}`);
    return token ? true : false;
};

const deleteSession = async (userId, sessionId) => {
    await redis.del(`session:${userId}:${sessionId}`);
};

const revokeAllSession = async (userId) => {
    const keys = await redis.keys(`session:${userId}:*`);
    if (!keys) await redis.del(keys);
};


export { createUserSession, sessionValid, deleteSession, revokeAllSession };