import crypto from 'crypto'
import bcrypt from 'bcrypt'
import { Users, resetPassword } from '../models/Index.js'
import sendMail from '../utils/SendMail.js'

const hashValue = (v) => {
        return crypto.createHash("sha256").update(String(v)).digest('hex');
    }   
const generateOTP = () => crypto.randomInt(1000, 9999).toString();
const generateResetToken = () => crypto.randomBytes(32).toString("hex");

const otpExpireMinutes = 10;
const resetTokenExpiresMinutes = 15;

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

            const otp = generateOTP();
            const resetToken = generateResetToken();
            const otpHash = hashValue(otp);
            const resetTokenHash = hashValue(resetToken);
            const expiresAt = new Date(Date.now() + otpExpireMinutes * 60 * 1000);

            await resetPassword.destroy({ where: {email} });

            await resetPassword.create(
                {
                    email,
                    otp_hash: otpHash,
                    reset_token_hash: resetTokenHash,
                    expires_at: expiresAt

                }
            );

            const html = `<h3>SPIN Parking - Kode OTP Reset Password</h3>
            <p>Kode OTP Anda: </p>
            <h2>${otp}</h2>
            <p>Kode Berlaku Selama ${otpExpireMinutes} menit.</p>`

            await sendMail(email, 'OTP Reset Password', html);

            return res.status(200).json(
                {
                    message: 'Kode OTP Berhasil Dikirim Ke Email Anda'
                }
            )
        } catch (error) {
            console.log(error);
            return res.status(500).json(
                {
                    message: 'Terjadi Kesalahan Saat Mengirim OTP!',
                    err: error
                }
            );
            
        }
    },

    verifyOTP: async (req, res) => {
        try {
            const { email, otp } = req.body;
            if (!email || !otp) {
                return res.status(
                    {
                        message: 'Email & OTP Wajib Diisi!'
                    }
                );
            };

            const record = await resetPassword.findOne( { where: {email} });

            if (!record) {
                return res.status(400).json(
                    {
                        message: 'Token Reset Tidak Valid'
                    }
                );
            };

            if (new Date() > record.exprires_at) {
                await resetPassword.destroy({ where: {email} });
                return res.status(400).json(
                    {
                        message: 'Kode OTP Telah Kadaluarsa, Silakan Minta OTP Baru!'
                    }
                );
            }

            const otpHash = hashValue(otp);

            if(otpHash !== record.otp_hash) {
                return res.status(400).json(
                    {
                        message: 'Kode OTP Salah, Silakan Periksa Kembali!'
                    }
                );
            };

            const newResetToken = generateResetToken();
            const newResetTokenHash = hashValue(newResetToken);
            const newExpiresTokenReset = new Date(Date.now() + resetTokenExpiresMinutes * 60 * 1000);

            record.reset_token_hash = newResetTokenHash;
            record.expires_at = newExpiresTokenReset;
            await record.save();

            return res.status(200).json(
                {
                    message: 'Kode OTP Valid, Silahkan Membuat Ulang Password Baru',
                    reset_token: newResetToken
                }
            );

        } catch (error) {
            console.log(error);
            return res.status(500).json(
                {
                    message: 'Terjadi Kesalahan Saat Verifikasi OTP',
                    err: error
                }
            );
            
        };

    },

    resetPassword: async (req, res) => {
        try {
            const { email, reset_token, new_password } = req.body;
            if(!email || !reset_token || !new_password) {
                return res.status(400).json(
                    {
                        message: 'Data Yang Di Isi Tidak Lengkap!'
                    }
                );
            };

            const resetRecord = await resetPassword.findOne( { where: {email} });
            if (!resetRecord) {
                return res.status(400).json(
                    {
                        message: 'Token Reset Tidak Valid!'
                    }
                );
            };

            const tokenHashed = hashValue(reset_token);

            if (tokenHashed !== resetRecord.reset_token_hash) {
                return res.status(400).json(
                    {
                        message: 'Reset Token Tidak Valid'
                    }
                );
            };

            const hashPassword = await bcrypt.hash(new_password, 10);

            await Users.update(
                {
                    password_user: hashPassword
                },
                {
                    where: {email}
                }
            );

            await resetPassword.destroy({ where: {email} });
            
            res.status(200).json(
                {
                    message: 'Password Berhasil Diubah, Silahkan Login Kembali'
                }
            )

        } catch (error) {
            console.log(error);
            res.status(500).json(
                {
                    message: 'Terjadi Kesalahan Saat Merubah Password',
                    err: error
                }
            );
            
        };
    },
};

export default forgotPasswordController;
