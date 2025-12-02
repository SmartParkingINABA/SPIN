import express from 'express'
import authenticationRoleBasedUser from '../middlewares/AuthMiddlewares.js'
import verifySession from '../middlewares/SessionMiddlewares.js'
import dashboardAdminControllers from '../controllers/AdminDashBoardControllers.js'

const adminRoutes = express.Router();

adminRoutes.get(
    '/dashboard/overview',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    dashboardAdminControllers.getOverview
);

export default adminRoutes;