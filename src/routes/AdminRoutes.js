import express from 'express'
import authenticationRoleBasedUser from '../middlewares/AuthMiddlewares.js'
import verifySession from '../middlewares/SessionMiddlewares.js'
import dashboardAdminControllers from '../controllers/AdminDashBoardControllers.js'
import menuPetugasParkirController from '../controllers/MenuPetugasParkirControllers.js'


const adminRoutes = express.Router();

adminRoutes.get(
    '/dashboard/overview',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    dashboardAdminControllers.getOverview
);

adminRoutes.get(
    '/dashboard/petugas-parkir',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuPetugasParkirController.getMenuPetugasParkir
);

adminRoutes.post(
    '/dashboard/petugas-parkir/tambah',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuPetugasParkirController.tambahPetugasParkir
);

adminRoutes.put(
    '/dashboard/petugas-parkir/edit/:id',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuPetugasParkirController.editPetugasParkir
);

adminRoutes.patch(
    '/dashboard/petugas-parkir/status/:id',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuPetugasParkirController.updateStatusPetugasParkir
);

adminRoutes.delete(
    '/dashboard/petugas-parkir/delete/:id',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuPetugasParkirController.deletePetugasParkir
)

export default adminRoutes;