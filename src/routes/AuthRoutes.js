import express from 'express'
import AuthController from '../controllers/AuthController.js';
import authenticationRoleBasedUser from '../middlewares/AuthMiddlewares.js';
import verifySession from '../middlewares/SessionMiddlewares.js';
import dashboardAdminControllers from '../controllers/AdminDashBoardControllers.js';
import logoutController from '../controllers/LogOutControllers.js';
import profileController from '../controllers/ProfileController.js';



const authRoutes = express.Router();
//Auth Login & Register
authRoutes.post('/register', AuthController.register);
authRoutes.post('/login', AuthController.login);

//Profile 
authRoutes.get(
    '/profile',
    authenticationRoleBasedUser(['admin', 'petugas', 'pengendara']),
    verifySession,
    profileController.getProfile
);

//Logout
authRoutes.get(
    '/logout',
    authenticationRoleBasedUser(['admin', 'petugas', 'pengendara']),
    verifySession,
    logoutController.handleLogout
)

//membatasi hak akses halaman berdasarkan role-user (admin, petugas, pengendara)
authRoutes.get(
    '/admin/dashboard',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    dashboardAdminControllers.getOverview
);

authRoutes.get(
    '/petugas/dashboard',
    authenticationRoleBasedUser(['petugas']),
    verifySession,
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