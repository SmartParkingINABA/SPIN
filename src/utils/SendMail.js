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
    <!DOCTYPE html>
  <html>
  <body style="margin:0;padding:0;background-color:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:4px;overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="background-color:#130F40;padding:12px;">
                <h1 style="color:#FEF8FD;margin:0;font-size:20px;">SPIN</h1>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:16px;color:#111827;font-size:14px;line-height:1.6;">
                <p>Hi 👋</p>

                <p>
                  Kami menerima permintaan untuk mengganti password akun Anda.
                </p>

                <p>
                  Kode OTP Anda:
                  <span style="color:#2563eb;font-weight:bold;font-size:18px;">
                    ${otp}
                  </span>
                </p>

                <p>
                  Kode ini berlaku selama <strong>5 menit</strong>.<br/>
                  Demi keamanan, jangan bagikan kode ini kepada siapa pun.
                </p>

                <p>
                  Jika Anda tidak merasa melakukan permintaan ganti password,
                  abaikan email ini dan hubungi tim dukungan kami.
                </p>

                <p>
                  Terima kasih,<br/>
                  <strong></strong>Tim SPIN
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `

    return sendMail(email, 'Kode OTP Verifikasi', html);
};

const sendNotifPasswordChangedEmail = (email) => {
    const html = `
   <!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:24px;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:6px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background-color:#130F40;padding:16px;">
              <h1 style="color:#FEF8FD;margin:0;font-size:20px;">
                SPIN
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:20px;color:#111827;font-size:14px;line-height:1.7;">
              <p>Hi 👋</p>

              <p>
                Password akun Anda telah <strong>berhasil diubah</strong>.
              </p>

              <p style="background-color:#ecfeff;border-left:4px solid #06b6d4;padding:12px;">
                Jika Anda yang melakukan perubahan ini, tidak ada tindakan lanjutan
                yang perlu dilakukan.
              </p>

              <p style="background-color:#fef2f2;border-left:4px solid #ef4444;padding:12px;">
                Jika bukan Anda yang melakukan perubahan password,
                segera lakukan reset password dan hubungi tim dukungan kami.
              </p>

              <p style="margin-top:24px;">
                Terima kasih,<br/>
                <strong>Tim SPIN</strong>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
    return sendMail(email, 'Password Anda Berhasil Diubah', html);
}
export { sendMail, sendOtpToEmail, sendNotifPasswordChangedEmail };