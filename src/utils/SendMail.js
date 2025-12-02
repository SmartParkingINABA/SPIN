import nodemailer from 'nodemailer'

const sendMail = async (to, subject, html) => {
    const transporter = nodemailer.createTransport(
        {
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            },
        }
    );

    await transporter.sendMail(
        {
            from: `"SPIN Parking" ${process.env.EMAIL_USER}`,
            to,
            subject,
            html
        }
    );

};

const sendOtpToEmail = (email, otp) => {
    const html = `
    <p>Kode OTP Anda:</p>
    <h2>${otp}</h2>
    <p>Jangan Berikan Kode Ini Kepada Siapapun</p>`;
    return sendMail(email, 'Kode OTP Verifikasi', html);
};

const sendNotifPasswordChangedEmail = (email) => {
    const html = `
    <p>Halo, </p>
    <p>Password Akun Anda Telah Berhasil Diubah</p>
    <p>Jika Ini Bukan Anda, Segera Lakukan Reset Password</p>
    <br>
    <p>Salam hormat, </p>
    <p><b>SPIN Parking Team</b></p>`;
    return sendMail(email, 'Password Anda Berhasil Diubah', html);
}
export { sendMail, sendOtpToEmail, sendNotifPasswordChangedEmail };