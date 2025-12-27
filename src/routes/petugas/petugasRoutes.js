import express from 'express';
import authenticationRoleBasedUser from '../../middlewares/authentication/AuthMiddlewares.js';
import verifySession from '../../middlewares/cache/SessionMiddlewares.js';
import menuScanQRCode from '../../controllers/petugas/menuScanQRCode.js';




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

export default dashboardPetugas;