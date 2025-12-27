import { Users, pengendaraProfile, kendaraan, kendaraanMasuk } from "../../models/Index.js";

class menuPengaturanAkunRepo {
    async getProfile(userId) {
        const user = await Users.findByPk(userId, {
            attributes: ['email', 'tanggal_daftar'],
            include: [
                {
                    model: pengendaraProfile,
                    as: 'pengendaraProfile',
                    attributes: [
                        'id_pengendara',
                        'nama_pengendara',
                        'alamat',
                        'no_telp',
                        'foto_profil'
                    ]
                }
            ]
        });

        if (!user || !user.pengendaraProfile) {
            return null;
        }

        const pengendaraId = user.pengendaraProfile.id_pengendara;

        const totalKendaraan = await kendaraan.count({
            where: { pengendara_id: pengendaraId }
        });

        const totalParkir = await kendaraanMasuk.count({
            include: [
                {
                    model: kendaraan,
                    as: 'kendaraan',
                    where: { pengendara_id: pengendaraId },
                    attributes: []
                }
            ]
        });

        return {
            profil: {
                nama_pengendara: user.pengendaraProfile.nama_pengendara,
                email: user.email,
                no_telp: user.pengendaraProfile.no_telp,
                alamat: user.pengendaraProfile.alamat,
                foto_profil: user.pengendaraProfile.foto_profil
            },
            statistik: {
                totalKendaraan,
                totalParkir,
                tanggalDaftar: user.tanggal_daftar
            }
        };
    }

    updateProfile(userId, data, transaction) {
        return pengendaraProfile.update(
            data,
            { where: {user_id: userId}, transaction }
        );
    }

    updatePhoto(userId, foto, transaction) {
        return pengendaraProfile.update(
            { foto_profil: foto },
            { where: { user_id: userId }, transaction }
        );
    }

    getUserPassword(userId) {
        return Users.findByPk(userId,{
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