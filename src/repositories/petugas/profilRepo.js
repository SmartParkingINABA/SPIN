import { Users, petugasProfile, kendaraanMasuk, kendaraanKeluar } from "../../models/Index.js";
import { Op } from "sequelize";

class profilRepo {
    async findPetugasProfile(userId) {
        return Users.findOne({
            where: {
                id_users: userId
            },
            attributes: ['email', 'status', 'tanggal_daftar'],
            include: [{
                model: petugasProfile,
                as: 'petugasProfile',
                attributes: ['id_petugas', 'nama_petugas', 'no_telp', 'shift', 'lokasi_kerja']
            }]
        });
    }

    async countKendaraanMasuk(petugasId) {
        return kendaraanMasuk.count({
            where: {
                petugas_id: petugasId,
            }
        });
    }

    async countKendaraanKeluar(petugasId) {
        return kendaraanKeluar.count({
            petugas_id: petugasId,
        })
    }

    async updateProfile(userId, payload) {
        return petugasProfile.update(payload, {
            where: { user_id: userId}
        })
    }
}

export default new profilRepo();