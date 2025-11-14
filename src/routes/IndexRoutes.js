import express from 'express'
import authRoutes from './AuthRoutes.js'

const indexRoutes = express.Router();


indexRoutes.use('/auth', authRoutes);





indexRoutes.use((req, res) => {
    res.status(404).json(
        {
            message: 'Halaman tidak ditemukan, periksa kembali URL yang anda akses!'
        }
    );
})


export default indexRoutes;