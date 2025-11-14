import jwt from 'jsonwebtoken';
import { Users,  Role, adminProfile, petugasProfile, pengendaraProfile } from '../models/Index.js';


const authenticationRoleBasedUser = (roles = []) => {
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return async (req, res, next) => {
        try {

            const authHeader = req.headers.authorization;

            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                return res.status(401).json(
                    {
                        message: 'Token tidak ditemukan atau format token salah'
                    }
                );
            }
            const token = authHeader.split(' ')[1];
            const verifiedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
            
            const user = await Users.findByPk(verifiedToken.id, 
                {
                    include: [ 
                        { model: Role, as: 'role', attributes: ['nama_role'] },
                        { model: adminProfile, as: 'adminProfile', attributes: ['nama_admin', 'no_telp'], required: false },
                        { model: petugasProfile, as: 'petugasProfile', attributes: ['nama_petugas', 'shift'], required: false },
                        { model: pengendaraProfile, as: 'pengendaraProfile', attributes: ['nama_pengendara', 'alamat'], required: false }
                    ],
                }
            );
            
            if (!user) {
                return res.status(404).json(
                    {
                        message: 'User Tidak Ditemukan, Harap Login Ulang!'
                    }
                );
            }
            const roleName = user.role?.nama_role?.toLowerCase()
            
            if (roles.length && (!roleName || !roles.includes(roleName))) {
                return res.status(403).json(
                    {
                        message: 'Akses ditolak, Role Tidak Sesuai!'
                    }
                );
            }
            req.user = user;
            next();
        } catch (err) {
            console.error('Error Saat Token Diambil:', err);
            return res.status(500).json(
                {
                    message: 'Token tidak valid, silahkan login kembali',
                    err: err.message
                }
            );
            
    }
    }
};

export default authenticationRoleBasedUser;