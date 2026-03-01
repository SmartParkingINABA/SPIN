import authService from "../../services/authentication/AuthService.js";
import getDisplayName from "../../utils/displayName.js";

const cookieName = 'sessionId';
const cookieOptions = (req) => (
    {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge:  1000 * 60 * 60 * 6
    }
);

const authController = {
    register: async (req, res) => {
        try {
            const user = await authService.register(req.body);
                return res.status(201).json( 
                    { 
                        message: 'Registrasi Berhasil',
                        data: {
                            id: user.id_users,
                            email: user.email,
                            roleId: user.role_id
                        }
                    }
                );
        } catch (err) {
            console.error('Register Controller ERROR');
            console.error(err);

            if (err.message === 'Email Exist!') {
                return res.status(400).json(
                    {
                        message: 'Email Sudah Terdaftar'
                    }
                );
            };

            if (err.message === 'Password Invalid!') {
                return res.status(400).json(
                    {
                        message: 'Password harus mengandung huruf besar, kecil, angka, simbol'
                    }
                );
            };

            res.status(500).json(
                {
                    message: 'Internal Server Error!'
                }
            );

            
        }
    },

    login: async (req, res) => {
        try {
            const { email, password_users } = req.body;
            const { user, sessionId } = await authService.login(email, password_users);

            res.cookie(
                cookieName,
                `${user.id_users}:${sessionId}`,
                cookieOptions(req)
            );

            const displayName = getDisplayName(user)

            return res.status(200).json({
                message: `Selamat Datang ${user.role.nama_role}, ${displayName}`,
                    user: {
                        id: user.id_users,
                        email: user.email,
                        role: user.role.nama_role
                    }
            });

            
        } catch (error) {
            console.error('LOGIN CONTROLLER ERROR');
            console.error(error);

            if (error.message === 'Password Wrong!') {
                return res.status(400).json({
                    message: 'Password salah!'
                })
            };
            
            if (error.message === 'User Not Found!') {
                return res.status(404).json({
                    message: 'Username tidak ditemukan!'
                })
            }

            console.error('Login Error!', error);
            res.status(500).json(
                {
                    message: 'Internal Server Error!'
                }
            );
            
        }
    }
};


export default authController;