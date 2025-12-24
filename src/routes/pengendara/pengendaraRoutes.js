import express from 'express';
import authenticationRoleBasedUser from '../../middlewares/authentication/AuthMiddlewares.js';
import verifySession from '../../middlewares/cache/SessionMiddlewares.js';
import menuDataKendaraanController from '../../controllers/pengendara/menuDataKendaraan.js';
import menuQrCodeSaya from '../../controllers/pengendara/menuQrCodeSaya.js';

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
    '/dashboard/qr-code-saya/vehicles',
    authenticationRoleBasedUser(['pengendara']),
    verifySession,
    menuQrCodeSaya.listDropDown
)

dashboardPengendara.get(
    '/dashboard/qr-code-saya/preview/:id',
    authenticationRoleBasedUser(['pengendara']),
    verifySession,
    menuQrCodeSaya.preview
)

dashboardPengendara.get(
    '/dashboard/qr-code-saya/download/:id',
    authenticationRoleBasedUser(['pengendara']),
    verifySession,
    menuQrCodeSaya.download
)

dashboardPengendara.get(
    '/dashboard/qr-code-saya/print/:id',
    authenticationRoleBasedUser(['pengendara']),
    verifySession,
    menuQrCodeSaya.printPDF
)



export default dashboardPengendara;

