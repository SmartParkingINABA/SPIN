import express from 'express'
import authenticationRoleBasedUser from '../../middlewares/authentication/AuthMiddlewares.js'
import verifySession from '../../middlewares/cache/SessionMiddlewares.js'
import dashboardAdminControllers from '../../controllers/admin/dashboardMainOverview.js'
import menuPetugasParkirController from '../../controllers/admin/MenuPetugasParkirControllers.js'
import menuPengendaraController from '../../controllers/admin/menuPengendara.js'


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
);

adminRoutes.get(
    '/dashboard/pengendara',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuPengendaraController.getList
);

adminRoutes.get(
    '/dashboard/pengendara/:id',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuPengendaraController.getDetail
);

adminRoutes.patch(
    '/dashboard/pengendara/status/:id',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuPengendaraController.updateStatus
)

export default adminRoutes;