import express from 'express'
import authRoutes from './authentication/AuthRoutes.js'
import forgotPasswordRoutes from './authentication/ForgotPasswordRoutes.js';
import adminRoutes from './admin/AdminRoutes.js';

const indexRoutes = express.Router();


indexRoutes.use('/auth', authRoutes);
indexRoutes.use('/auth/forgot', forgotPasswordRoutes);
indexRoutes.use('/admin', adminRoutes);





indexRoutes.use((req, res) => {
    res.status(404).json(
        {
            message: 'Halaman tidak ditemukan, periksa kembali URL yang anda akses!'
        }
    );
})


export default indexRoutes;