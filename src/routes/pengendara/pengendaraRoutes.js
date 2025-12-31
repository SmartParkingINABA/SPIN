import express from 'express';
import authenticationRoleBasedUser from '../../middlewares/authentication/AuthMiddlewares.js';
import verifySession from '../../middlewares/cache/SessionMiddlewares.js';
import menuDataKendaraanController from '../../controllers/pengendara/menuDataKendaraan.js';
import menuQrCodeSaya from '../../controllers/pengendara/menuQrCodeSaya.js';
import menuPengaturanAkun from '../../controllers/pengendara/menuPengaturanAkun.js';
import uploadPhotoProfile from '../../middlewares/upload/uploadPhotoProfile.js';
import menuRiwayatParkir from '../../controllers/pengendara/menuRiwayatParkir.js';
import menuNotifikasi from '../../controllers/pengendara/menuNotifikasi.js';



const dashboardPengendara = express.Router();

//Menu Data Kendaraan

dashboardPengendara.get(
    '/dashboard/data-kendaraan',
    authenticationRoleBasedUser(['pengendara']),
    verifySession,
    menuDataKendaraanController.list
)

dashboardPengendara.post(
    '/dashboard/data-kendaraan/tambah',
    authenticationRoleBasedUser(['pengendara']),
    verifySession,
    menuDataKendaraanController.create
)

dashboardPengendara.put(
    '/dashboard/data-kendaraan/edit/:id',
    authenticationRoleBasedUser(['pengendara']),
    verifySession,
    menuDataKendaraanController.update
)

dashboardPengendara.delete(
    '/dashboard/data-kendaraan/delete/:id',
    authenticationRoleBasedUser(['pengendara']),
    verifySession,
    menuDataKendaraanController.remove
)

//Menu QR Code Saya

dashboardPengendara.get(
    '/dashboard/qr-code-saya/preview',
    authenticationRoleBasedUser(['pengendara']),
    verifySession,
    menuQrCodeSaya.preview
)

dashboardPengendara.get(
    '/dashboard/qr-code-saya/download',
    authenticationRoleBasedUser(['pengendara']),
    verifySession,
    menuQrCodeSaya.download
)

dashboardPengendara.get(
    '/dashboard/qr-code-saya/print',
    authenticationRoleBasedUser(['pengendara']),
    verifySession,
    menuQrCodeSaya.printPDF
)


// Menu Riwayat Parkir

dashboardPengendara.get(
    '/dashboard/riwayat-parkir',
    authenticationRoleBasedUser(['pengendara']),
    verifySession,
    menuRiwayatParkir.getRiwayat
)

dashboardPengendara.get(
    '/dashboard/riwayat-parkir/export',
    authenticationRoleBasedUser(['pengendara']),
    verifySession,
    menuRiwayatParkir.exportCsv
)


// Menu Notifikasi

dashboardPengendara.get(
    '/dashboard/notifikasi',
    authenticationRoleBasedUser(['pengendara']),
    verifySession,
    menuNotifikasi.getAll
)

dashboardPengendara.patch(
    '/dashboard/:id/baca',
    authenticationRoleBasedUser(['pengendara']),
    verifySession,
    menuNotifikasi.markAsRead
)

dashboardPengendara.patch(
    '/dashboard/notifikasi/baca-semua',
    authenticationRoleBasedUser(['pengendara']),
    menuNotifikasi.markAllAsRead
)



// Menu Pengaturan akun

dashboardPengendara.get(
    '/dashboard/pengaturan-profil',
    authenticationRoleBasedUser(['pengendara']),
    verifySession,
    menuPengaturanAkun.getProfile
)

dashboardPengendara.put(
    '/dashboard/pengaturan-profil/update',
    authenticationRoleBasedUser(['pengendara']),
    verifySession,
    menuPengaturanAkun.updateProfile
)


dashboardPengendara.put(
    '/dashboard/pengaturan-profil/upload/photo',
    authenticationRoleBasedUser(['pengendara']),
    verifySession,
    uploadPhotoProfile.single('foto_profil'),
    menuPengaturanAkun.uploadPhoto
)


dashboardPengendara.put(
    '/dashboard/pengaturan-profil/change-password',
    authenticationRoleBasedUser(['pengendara']),
    verifySession,
    menuPengaturanAkun.changePassword
)



export default dashboardPengendara;

