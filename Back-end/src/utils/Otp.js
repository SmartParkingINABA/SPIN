import redis from "../configs/RedisConfig.js";

const generateOtp = async (email) => {
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    await redis.set(`otp:${otp}`, email, 'EX', 300);
    return otp;

};

const verifyOtp = async (otpInput) => {
    const email = await redis.get(`otp:${otpInput}`);
    if (!email)return null;

    await redis.del(`otp:${otpInput}`);
    return email;

};


export { generateOtp, verifyOtp };