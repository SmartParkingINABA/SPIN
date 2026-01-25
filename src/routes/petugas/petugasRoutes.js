import express from 'express';
import authenticationRoleBasedUser from '../../middlewares/authentication/AuthMiddlewares.js';
import verifySession from '../../middlewares/cache/SessionMiddlewares.js';
import menuScanQRCode from '../../controllers/petugas/menuScanQRCode.js';
import menuKendaraanParkir from '../../controllers/petugas/menuKendaraanParkir.js';
import menuRiwayatParkir from '../../controllers/petugas/menuRiwayatParkir.js';
import menuNotifikasi from '../../controllers/petugas/menuNotifikasi.js';
import menuProfilPetugas from '../../controllers/petugas/menuProfilPetugas.js';



const dashboardPetugas = express.Router();

//Menu Scan QR Code

dashboardPetugas.get(
    '/dashboard/scan-qr',
    authenticationRoleBasedUser(['petugas']),
    verifySession,
    menuScanQRCode.scan
)

dashboardPetugas.post(
    '/dashboard/scan-qr/masuk',
    authenticationRoleBasedUser(['petugas']),
    verifySession,
    menuScanQRCode.masuk
)

dashboardPetugas.post(
    '/dashboard/scan-qr/keluar',
    authenticationRoleBasedUser(['petugas']),
    verifySession,
    menuScanQRCode.keluar
)


// Menu kendaraan parkir

dashboardPetugas.get(
    '/dashboard/kendaraan-parkir',
    authenticationRoleBasedUser(['petugas']),
    verifySession,
    menuKendaraanParkir.list
)


// Menu Riwayat Parkir

dashboardPetugas.get(
    '/dashboard/riwayat-parkir',
    authenticationRoleBasedUser(['petugas']),
    verifySession,
    menuRiwayatParkir.getRiwayatParkir
)

// Menu Notifikasi 

dashboardPetugas.get(
    '/dashboard/notifikasi',
    authenticationRoleBasedUser(['petugas']),
    verifySession,
    menuNotifikasi.getAll
)

dashboardPetugas.put(
    '/dashboard/:id/read',
    authenticationRoleBasedUser(['petugas']),
    verifySession,
    menuNotifikasi.markAsRead
)

dashboardPetugas.put(
    '/dashboard/notifikasi/read-all',
    authenticationRoleBasedUser(['petugas']),
    verifySession,
    menuNotifikasi.markAllAsRead   
)

// Menu Profil petugas

dashboardPetugas.get(
    '/dashboard/profil',
    authenticationRoleBasedUser(['petugas']),
    verifySession,
    menuProfilPetugas.getProfilPetugas
)

dashboardPetugas.put(
    '/dashboard/profil',
    authenticationRoleBasedUser(['petugas']),
    verifySession,
    menuProfilPetugas.updateProfilPetugas
)

export default dashboardPetugas;