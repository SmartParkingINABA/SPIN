import bcrypt from 'bcrypt'
import { Users } from '../models/Index.js'
import { sendOtpToEmail, sendNotifPasswordChangedEmail } from '../utils/SendMail.js'
import { generateOtp, verifyOtp } from '../utils/Otp.js'
import redis from '../configs/RedisConfig.js';
import passwordValidator from '../utils/PasswordValidator.js';
import { v4 as uuidv4 } from 'uuid';

const otpCookieName = 'otpSession';
const otpCookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 5 * 60 * 1000 
};

const forgotPasswordController = {
    requestOtp: async (req, res) => {
        try {
            const { email } = req.body;

            if (!email) {
                return res.status(400).json( 
                    {
                        message: 'Masukkan Email Terlebih Dahulu!'
                    }
                );

            }
            const user = await Users.findOne(
                {
                    where: { email }
                }
            );

            if (!user) {
                return res.status(200).json(
                    {
                        message: 'Jika Email Sudah Terdaftar, Kode OTP Telah Dikirim'
                    }
                );
            }

            const otp = await generateOtp(email);
            
            await sendOtpToEmail(email, otp);
            return res.status(200).json(
                {
                    message: 'Kode OTP Berhasil Di Kirim Ke Email Anda'
                }
            )
        } catch (err) {
            console.log(err);
            return res.status(500).json(
                {
                    message: 'Internal Server Error',
                    err: err
                }
            );
            
        }
    },

    verifyOTP: async (req, res) => {
        try {
            const { otp } = req.body;

            if (!otp) {
                return res.status(400).json(
                    {
                        message: 'Kode OTP Wajib Di Isi!'
                    }
                );
            };

            const email = await verifyOtp(otp);
            if (!email) {
                return res.status(400).json(
                    {
                        message: 'OTP Salah Atau Sudah Kadaluarsa!'
                    }
                );
            };

            const otpSessionId = uuidv4();
            await redis.set(`otp_session:${otpSessionId}`, email, 'EX', 60 * 5);
            await redis.del(`otp:${otp}`);
            res.cookie(otpCookieName, otpSessionId, otpCookieOptions);

            return res.status(200).json(
                {
                    message: 'Kode OTP Valid, Silahkan Membuat Ulang Password Baru',
                }
            )
        } catch (err) {
            console.log(err);
            return res.status(500).json(
                {
                    message: 'Internal Server Error!',
                    err: err
                }
            );
            
        };

    },

    resetPassword: async (req, res) => {
        try {
            const { new_password } = req.body;
            if(!new_password) {
                return res.status(400).json(
                    {
                        message: 'Password Wajib Di Isi!'
                    }
                );
            };

            if (!passwordValidator(new_password)) {
                return res.status(400).json(
                    {
                        message: 'Password harus mengandung huruf besar, huruf kecil, angka, simbol'
                    }    
                )
            };

            const otpSessionId = req.cookies?.[otpCookieName];
            if (!otpSessionId) {
                return res.status(400).json({
                    message: 'Akses Di Tolak, OTP Belum Terverifikasi!'
                })
            };
        
            const email = await redis.get(`otp_session:${otpSessionId}`);
            if (!email) {
                return res.status(400).json(
                    {
                        message: 'Akses Di Tolak, OTP Belum Terverifikasi Atau Sudah Expired!'
                    }
                )
            }

            const hashPassword = await bcrypt.hash(new_password, 10);
            await Users.update(
                {
                    password_users: hashPassword
                },
                {
                    where: {email}
                }
            );
            await redis.del(`otp_session:${otpSessionId}`);

            await sendNotifPasswordChangedEmail(email)

            return res.status(200).json(
                {
                    message: 'Password Berhasil Diubah, Silahkan Login Kembali'
                }
            );
        } catch (error) {
            console.log(error);
            res.status(500).json(
                {
                    message: 'Internal Server Error',
                    err: error
                }
            );
            
        };
    },
};

export default forgotPasswordController;
