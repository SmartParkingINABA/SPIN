import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Role, Users, adminProfile, petugasProfile, pengendaraProfile } from '../../models/Index.js'
import { createUserSession } from '../../cache/Session.js'
import passwordValidator from '../../utils/PasswordValidator.js'

class authService {
    static async register(data) {
        const { email, password_users, role_id, nama, alamat, shift, no_telp, lokasi_kerja } = data;
        if (!passwordValidator(password_users)) {
            throw new Error('Password Invalid!');
        };

        const userAlreadyExist = await Users.findOne({ where: { email }});
        if (userAlreadyExist) {
            throw new Error('Email Exist!');
        };

        const hashPassword = await bcrypt.hash(password_users, 10);
        const newUser = await Users.create(
            {
                email,
                password_users: hashPassword,
                role_id: Number(role_id)
            }
        );

        const idRole = Number(role_id);

        if (idRole === 1) {
            await adminProfile.create(
                {
                    user_id: newUser.id_users,
                    nama_admin: nama || null,
                    no_telp: no_telp,

                }
            );
        } else if (idRole === 2) {
            await petugasProfile.create(
                {
                    user_id: newUser.id_users,
                    nama_petugas: nama || null,
                    shift: shift || null,
                    no_telp: no_telp || null,
                    lokasi_kerja: lokasi_kerja || null
                }
            );
        } else if (idRole === 3) {
            await pengendaraProfile.create(
                {
                    user_id: newUser.id_users,
                    nama_pengendara: nama || null,
                    alamat: alamat || null,
                }
            );
        }
        return newUser;
    };

    static async login(email, password_users) {
        const user = await Users.findOne(
            {
                where: { email },
                include: [
                    { model: Role, as: 'role', attributes: ['nama_role'] },
                    { model: adminProfile, as: 'adminProfile', attributes: ['nama_admin', 'no_telp'], required: false },
                    { model: petugasProfile, as: 'petugasProfile', attributes: ['nama_petugas', 'no_telp', 'shift', 'lokasi_kerja'], required: false  },
                    { model: pengendaraProfile, as: 'pengendaraProfile', attributes: ['id_pengendara', 'nama_pengendara', 'alamat', 'no_telp'], required: false }
                ]
            }
        );

        if (!user) {
            throw new Error('User Not Found!');
        };

        const validPassword = await bcrypt.compare(password_users, user.password_users);
        if(!validPassword) {
            throw new Error('Password Wrong!');
        };

        const token = jwt.sign(
            {
                id: user.id_users,
                role: user.role.nama_role.toLowerCase()
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: process.env.JWT_EXPIRES
            }
        );

        const sessionId = await createUserSession(user.id_users, token);
        return { user, token, sessionId };
    };
};

export default authService;
