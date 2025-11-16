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



export default sendMail;