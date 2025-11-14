import express from 'express'
import AuthController from '../controllers/AuthController.js';
import authenticationRoleBasedUser from '../middlewares/AuthMiddlewares.js';
const authRoutes = express.Router();

authRoutes.post('/register', AuthController.register);

authRoutes.post('/login', AuthController.login);

//membatasi hak akses halaman berdasarkan role-user (admin, petugas, pengendara)
authRoutes.get(
    '/admin/dashboard',
    authenticationRoleBasedUser(['admin']),
    (req, res) => {
        res.status(200).json({
            message: `Selamat Datang Di Dashboard Admin, ${req.user.adminProfile?.nama_admin || req.user.email}`,
        });
    }
);

authRoutes.get(
    '/petugas/dashboard',
    authenticationRoleBasedUser(['petugas']),
    (req, res) => {
        res.status(200).json({
            message: `Selamat Datang Di Dashboard Petugas, ${req.user.petugasProfile?.nama_petugas || req.user.email}`,
        });
    }
);

authRoutes.get(
    '/pengendara/dashboard',
    authenticationRoleBasedUser(['pengendara']),
    (req, res) => {
        res.status(200).json({
            message: `Selamat Datang Di Dashboard Pengendara, ${req.user.pengendaraProfile?.nama_pengendara || req.user.email}`,
        })
    }
)

export default authRoutes;