import express from 'express'
import authenticationRoleBasedUser from '../../middlewares/authentication/AuthMiddlewares.js'
import verifySession from '../../middlewares/cache/SessionMiddlewares.js'
import dashboardAdminControllers from '../../controllers/admin/dashboardMainOverview.js'
import menuPetugasParkirController from '../../controllers/admin/MenuPetugasParkirControllers.js'
import menuPengendaraController from '../../controllers/admin/menuPengendara.js'
import menuNotifikasi from '../../controllers/admin/menuNotifikasi.js'


const adminRoutes = express.Router();

// Menu main overview
adminRoutes.get(
    '/dashboard/overview',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    dashboardAdminControllers.getOverview
);

// Menu petugas parkir

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
    '/dashboard/petugas-parkir/:id/edit',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuPetugasParkirController.editPetugasParkir
);

adminRoutes.patch(
    '/dashboard/petugas-parkir/:id/status',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuPetugasParkirController.updateStatusPetugasParkir
);

adminRoutes.delete(
    '/dashboard/petugas-parkir/:id/delete',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuPetugasParkirController.deletePetugasParkir
);

// Menu pengendara

adminRoutes.get(
    '/dashboard/pengendara',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuPengendaraController.getList
);

adminRoutes.get(
    '/dashboard/pengendara/:id/detail',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuPengendaraController.getDetail
);

adminRoutes.patch(
    '/dashboard/pengendara/:id/status',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuPengendaraController.updateStatus
);


// Menu notifikasi

adminRoutes.get(
    '/dashboard/notifikasi/stats',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuNotifikasi.getDashboardStats
)

adminRoutes.post(
    '/dashboard/notifikasi',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuNotifikasi.createNotifikasi
)

export default adminRoutes;