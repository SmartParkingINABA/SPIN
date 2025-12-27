import bcrypt from 'bcrypt';

export const hashPassword = (password) => bcrypt.hash(password, 10);
export const comparePassword = (raw, hash) => bcrypt.compare(raw, hash);