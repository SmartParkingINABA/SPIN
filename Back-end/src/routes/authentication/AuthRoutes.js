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


export default authRoutes;