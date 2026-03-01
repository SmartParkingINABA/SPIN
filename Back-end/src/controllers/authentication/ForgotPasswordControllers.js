import bcrypt from 'bcrypt'
import { Users } from '../../models/Index.js'
import { sendOtpToEmail, sendNotifPasswordChangedEmail } from '../../utils/SendMail.js'
import { generateOtp, verifyOtp } from '../../utils/Otp.js'
import redis from '../../configs/RedisConfig.js';
import passwordValidator from '../../utils/PasswordValidator.js';
import { v4 as uuidv4 } from 'uuid';

const OTP_COOKIE_NAME = 'otpSession';
const OTP_COOKIE_OPTIONS = {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: 5 * 60 * 1000
};

const forgotPasswordController = {
    requestOtp: async (req, res) => {
        try {
            const { email } = req.body;

            if (!email) {
                return res.status(400).json( 
                    {
                        message: 'Masukkan email terlebih dahulu!'
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
                        message: 'Jika email sudah terdaftar, kode OTP telah dikirim'
                    }
                );
            }

            const otp = await generateOtp(email);
            
            await sendOtpToEmail(email, otp);
            return res.status(200).json(
                {
                    message: 'Kode OTP berhasil di kirim ke email anda'
                }
            )
        } catch (error) {
            console.error('REQUEST OTP ERROR', error);
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
                        message: 'Kode OTP wajib di isi!'
                    }
                );
            };

            const email = await verifyOtp(otp);
            if (!email) {
                return res.status(400).json(
                    {
                        message: 'OTP salah atau sudah expire!'
                    }
                );
            };

            const otpSessionId = uuidv4();
            await redis.set(`otp_session:${otpSessionId}`, email, 'EX', 60 * 5);
            res.cookie(OTP_COOKIE_NAME, otpSessionId, OTP_COOKIE_OPTIONS);

            return res.status(200).json(
                {
                    message: 'Kode OTP Valid, Silahkan Membuat Ulang Password Baru',
                }
            )
        } catch (error) {
            console.log(error);
            console.error('VERIFY OTP ERROR');
            console.error(error);
            return res.status(500).json(
                {
                    message: 'Internal Server Error!',
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
                        message: 'Password wajib di isi!'
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

            const otpSessionId = req.cookies?.[OTP_COOKIE_NAME];
            if (!otpSessionId) {
                return res.status(400).json({
                    message: 'Akses Di Tolak, OTP Belum Terverifikasi!'
                })
            };
        
            const email = await redis.get(`otp_session:${otpSessionId}`);
            if (!email) {
                return res.status(400).json(
                    {
                        message: 'Session OTP expire!'
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
            res.clearCookie(OTP_COOKIE_NAME);

            await sendNotifPasswordChangedEmail(email)

            return res.status(200).json(
                {
                    message: 'Password berhasil diubah, silahkan login kembali'
                }
            );
        } catch (error) {
            console.error('RESET PASSWORD ERROR', error);
            res.status(500).json(
                {
                    message: 'Internal Server Error',
                }
            );
            
        };
    },
};

export default forgotPasswordController;
