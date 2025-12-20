import express from 'express'
import authController from '../../controllers/authentication/AuthController.js';
import authenticationRoleBasedUser from '../../middlewares/authentication/AuthMiddlewares.js';
import verifySession from '../../middlewares/cache/SessionMiddlewares.js';
import dashboardAdminControllers from '../../controllers/admin/dashboardMainOverview.js';
import logoutController from '../../controllers/authentication/LogOutControllers.js';
import profileController from '../../controllers/users/ProfileController.js';



const authRoutes = express.Router();
//Auth Login & Register
authRoutes.post('/register', authController.register);
authRoutes.post('/login', authController.login);

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