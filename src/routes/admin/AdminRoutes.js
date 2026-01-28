import express from 'express'
import authenticationRoleBasedUser from '../../middlewares/authentication/AuthMiddlewares.js'
import verifySession from '../../middlewares/cache/SessionMiddlewares.js'
import dashboardAdminControllers from '../../controllers/admin/dashboardMainOverview.js'
import menuPetugasParkirController from '../../controllers/admin/MenuPetugasParkirControllers.js'
import menuPengendaraController from '../../controllers/admin/menuPengendara.js'
import menuNotifikasi from '../../controllers/admin/menuNotifikasi.js'
import menuLaporan from '../../controllers/admin/menuLaporan.js'
import menuPengaturanAkun from '../../controllers/admin/menuPengaturanAkun.js'


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

// Menu Laporan

//Laporan parkir

adminRoutes.get(
    '/dashboard/laporan-parkir',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuLaporan.getLaporanParkir
)

adminRoutes.get(
    '/dashboard/laporan-parkir/export/pdf',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuLaporan.exportLaporanParkirPDF
)

adminRoutes.get(
    '/dashboard/laporan-parkir/export/excel',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuLaporan.exportLaporanParkirExcel
)

// Laporan pengendara

adminRoutes.get(
    '/dashboard/laporan-pengendara',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuLaporan.getLaporanPengendara
)

adminRoutes.get(
    '/dashboard/laporan-pengendara/export/pdf',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuLaporan.exportLaporanPengendaraPDF
)

adminRoutes.get(
    '/dashboard/laporan-pengendara/export/excel',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuLaporan.exportLaporanPengendaraExcel
)

// Laporan petugas

adminRoutes.get(
    '/dashboard/laporan-petugas',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuLaporan.getLaporanPetugas
)

adminRoutes.get(
    '/dashboard/laporan-petugas/export/pdf',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuLaporan.exportLaporanPetugasPDF
)

adminRoutes.get(
    '/dashboard/laporan-petugas/export/excel',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuLaporan.exportLaporanPetugasExcel
)


// Menu pengaturan akun 


adminRoutes.get(
    '/dashboard/pengaturan-akun',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuPengaturanAkun.getProfile
)

adminRoutes.put(
    '/dashboard/pengaturan-akun/profil',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuPengaturanAkun.updateProfile
)

adminRoutes.put(
    '/dashboard/pengaturan-akun/change-password',
    authenticationRoleBasedUser(['admin']),
    verifySession,
    menuPengaturanAkun.changePassword
)


export default adminRoutes;