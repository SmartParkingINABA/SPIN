import { Users, adminProfile } from "../../models/Index.js";

class menuPengaturanAkunRepo {
    async getProfile(userId) {
        const user = await Users.findByPk(userId, {
            attributes: ['email'],
            include: [{
                model: adminProfile,
                as: 'adminProfile',
                attributes: [
                    'id_admin',
                    'nama_admin',
                    'no_telp'
                ],
                required: false
            }]
        });

        if (!user) {
            return null;
        }

        const admin = user.adminProfile || {};

        return {
            profil: {
                nama_admin: admin.nama_admin || '-',
                email: user.email || '-',
                no_telp: admin.no_telp || '-'
            }
        };
    }

    updateProfile(userId, data, transaction) {
        return adminProfile.update(
            data,
            { where: { user_id: userId }, transaction }
        );
    }

    getUserPassword(userId) {
        return Users.findByPk(userId, {
            attributes: ['password_users']
        });
    }

    updatePassword(userId, password, transaction) {
        return Users.update(
            { password_users: password },
            { where: { id_users: userId }, transaction }
        );
    }
}


export default new menuPengaturanAkunRepo();