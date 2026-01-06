import express from 'express';
import authenticationRoleBasedUser from '../../middlewares/authentication/AuthMiddlewares.js';
import verifySession from '../../middlewares/cache/SessionMiddlewares.js';
import menuScanQRCode from '../../controllers/petugas/menuScanQRCode.js';
import menuKendaraanParkir from '../../controllers/petugas/menuKendaraanParkir.js';
import menuRiwayatParkir from '../../controllers/petugas/menuRiwayatParkir.js';




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

export default dashboardPetugas;