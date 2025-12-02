import bcrypt from 'bcrypt'
import { Users } from '../models/Index.js'
import { sendOtpToEmail, sendNotifPasswordChangedEmail } from '../utils/SendMail.js'
import { generateOtp, verifyOtp } from '../utils/OtpService.js'
import redis from '../configs/RedisConfig.js';


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
            await redis.set(`otp_verified:${email}`, 'Verified', 'EX', 300);

            return res.status(200).json(
                {
                    message: 'Kode OTP Valid, Silahkan Membuat Ulang Password Baru',
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
            const keys= await redis.keys('otp_verified:*');

            if (keys.length === 0) {
                return res.status(400).json(
                    {
                        message: 'Akses Di Tolak, OTP Belum Terverifikasi!'
                    }
                );
            };
        
            const email = keys[0].replace('otp_verified:', '');

            const hashPassword = await bcrypt.hash(new_password, 10);
            await Users.update(
                {
                    password_users: hashPassword
                },
                {
                    where: {email}
                }
            );
            await redis.del(`otp_verified:${email}`);

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
