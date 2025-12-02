import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Role, Users, adminProfile, petugasProfile, pengendaraProfile } from '../models/Index.js'
import { createUserSession } from '../utils/SessionService.js';


const AuthController = {
    register: async (req, res) => {
        try {
            const { email, password_users, role_id, nama, alamat, shift, no_telp, lokasi_kerja } = req.body;

            if ( !email || !password_users || !role_id ) {
                    return res.status(401).json( 
                    {
                        message: 'Email, Password, Dan Role Harus Di Isi Secara Lengkap!'
                    }
                );
            };

            const alreadyExistUser = await Users.findOne( { where: {email} } );
            if (alreadyExistUser) {
                return res.status(400).json (
                    {
                        message: 'Email Sudah Terdaftar!'
                    }
                )
            };

            const hashPassword = await bcrypt.hash(password_users, 10);
            const newUsers = await Users.create( 
                {
                    email,
                    password_users: hashPassword,
                    role_id
                    
                } 
            );

            const idRole = parseInt(role_id);

            if (idRole === 1) {
                await adminProfile.create (
                    {
                        user_id: newUsers.id_users,
                        nama_admin: nama || null,
                        no_telp: no_telp || null
                    }
                );
            } else if (idRole === 2) {
                await petugasProfile.create(
                    {
                        user_id: newUsers.id_users,
                        nama_petugas: nama || null,
                        shift: shift || null,
                        no_telp: no_telp || null,
                        lokasi_kerja: lokasi_kerja || null,
                    }
                )
            } else if (idRole === 3) {
                await pengendaraProfile.create(
                    {
                        user_id: newUsers.id_users,
                        nama_pengendara: nama || null,
                        alamat: alamat || null,
                    }
                );
            }
                return res.status(201).json( 
                    { 
                        message: 'Registrasi Berhasil!, Silahkan Login Untuk Melanjutkan',
                        data: {
                            id: newUsers.id_users,
                            email: newUsers.email,
                            roleId: newUsers.role_id
                        }
                    }
                );
        } catch (error) {
            console.error('Register Error!', error);
            return res.status(500).json( 
                { 
                    message: 'Terjadi Kesalahan Pada Server!'
                } 
            );
            
        }
    },

    login: async (req, res) => {
        const { email, password_users } = req.body;

        try {
            const user = await Users.findOne(
                {
                    where: { email },
                    include: [ 
                        { model: Role, as: 'role', attributes: ['nama_role'] },
                        { model: adminProfile, as: 'adminProfile', attributes: ['nama_admin', 'no_telp'], required: false},
                        { model: petugasProfile, as: 'petugasProfile', attributes: ['nama_petugas', 'no_telp', 'shift', 'lokasi_kerja'], required: false},
                        { model: pengendaraProfile, as: 'pengendaraProfile', attributes: ['nama_pengendara', 'alamat', 'no_telp'], required: false}
                    ]
                }
            );
            if (!user) {
                return res.status(404).json(
                    {
                        message: 'User Tidak Ditemukan!'
                    }
                )
            };

            const validPassword = await bcrypt.compare(password_users, user.password_users);
            
            if (!validPassword) {
                return res.status(400).json(
                    {
                        message: 'Password Salah!'
                    }
                )
            };
            if (!user.role) {
                return res.status(400).json(
                    {
                        message: 'Role tidak ditemukan!'
                    }
                )
            };

            const token = jwt.sign( 
                { 
                    id: user.id_users,
                    role: user.role.nama_role.toLowerCase()
                },
                process.env.JWT_SECRET_KEY,

                {
                    expiresIn: process.env.JWT_EXPIRES,
                }
            );

            const sessionId = await createUserSession(user.id_users, token);
            
            
            const role = user.role.nama_role.toLowerCase();
            let displayName = 'User';
            let redirectTo = '/';

            if (role === 'admin') {
                displayName = user.adminProfile?.nama_admin || 'Admin';
                redirectTo = '/admin/dashboard';
            } else if (role === 'petugas') {
                displayName = user.petugasProfile?.nama_petugas || 'Petugas';
                redirectTo = '/petugas/dashboard';
            } else if (role === 'pengendara') {
                displayName = user.pengendaraProfile?.nama || 'Pengendara';
                redirectTo = '/pengendara/dashboard';
            }
            res.status(200).json(
                {
                    status: 'OK!',
                    message: `Selamat datang ${user.role.nama_role}, ${displayName}`,
                    redirect: redirectTo,
                    token,
                    sessionId,
                    user: {
                        id: user.id_users,
                        email: user.email,
                        role: user.role.nama_role,
                        nama: displayName
                    }
                }
            );
        } catch (error) {
            console.error('Login Error!', error);
            res.status(500).json(
                {
                    message: 'Terjadi Kesalahan Pada Server!'
                }
            );
            
        }
    }
};


export default AuthController;