import express from 'express'
import authRoutes from './authentication/AuthRoutes.js'
import forgotPasswordRoutes from './authentication/ForgotPasswordRoutes.js';
import adminRoutes from './admin/AdminRoutes.js';
import dashboardPengendara from './pengendara/pengendaraRoutes.js';

const indexRoutes = express.Router();


indexRoutes.use('/auth', authRoutes);
indexRoutes.use('/auth/forgot', forgotPasswordRoutes);
indexRoutes.use('/admin', adminRoutes);
indexRoutes.use('/pengendara', dashboardPengendara);





indexRoutes.use((req, res) => {
    res.status(404).json(
        {
            message: 'Halaman tidak ditemukan, periksa kembali URL yang anda akses!'
        }
    );
})


export default indexRoutes;