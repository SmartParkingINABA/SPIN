import redis from '../configs/RedisConfig.js';
import { v4 as uuid } from 'uuid'

const createUserSession = async (userId, jwtToken, seconds= 60 * 60 * 6) => {
    const sessionId = uuid();
    const key = `session:${userId}:${sessionId}`;
    await redis.set(key, jwtToken, 'EX', seconds);
    return sessionId;
};

const sessionValid = async (userId, sessionId) => {
    const key = `session:${userId}:${sessionId}`;
    const token = await redis.get(key);
    return !!token;
};

const getSessionUser = async (userId, sessionId) => {
    const key = `session:${userId}:${sessionId}`;
    const token = await redis.get(key);
    return token;
};

const getSessionToken = async (userId, sessionId) => {
    const key = `session:${userId}:${sessionId}`;
    return await redis.get(key);
};

const deleteSession = async (userId, sessionId) => {
    const key = (`session:${userId}:${sessionId}`);
    await redis.del(key);
};

const revokeAllSession = async (userId) => {
    const key = await redis.keys(`session:${userId}:*`);
    if (key && key.length) {
        await redis.del(key);
    }
};


export { createUserSession, sessionValid, deleteSession, revokeAllSession, getSessionToken, getSessionUser };