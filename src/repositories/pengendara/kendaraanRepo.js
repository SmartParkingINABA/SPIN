import { kendaraan, kendaraanMasuk } from "../../models/Index.js";

class kendaraanRepo {
    async findByPengendara(pengendaraId) {
        return kendaraan.findAll(
            {
                where:{
                    pengendara_id: pengendaraId,
                    status: 'Aktif'
                },
                attributes: [
                    'id_kendaraan', 'no_plat'
                ]
            }
        );
    }

    async findOwnVehicles({kendaraanId, pengendaraId}) {
        return kendaraan.findOne({
            where: {
                id_kendaraan: kendaraanId,
                pengendara_id: pengendaraId,
                status: 'Aktif'
            }
        });
    }

    async countTotalKendaraan(pengendaraId) {
        return kendaraan.count({
            where: {
                pengendara_id: pengendaraId,
                status: 'Aktif'
            }
        })
    }

    async findKendaraanAktifWithStatusParkir(pengendaraId) {
        return kendaraan.findAll({
            where: {
                pengendara_id: pengendaraId,
                status: 'Aktif'
            },
            attributes: ['id_kendaraan', 'no_plat', 'jenis', 'merk', 'status'],
            include: [
                {
                    model: kendaraanMasuk,
                    as: 'riwayatMasuk',
                    where: {status_parkir: 'Sedang Parkir'},
                    required: false,
                    attributes: ['status_parkir', 'waktu_masuk']
                }
            ],
            order: [['createdAt', 'DESC']]
        })
    }
};

export default new kendaraanRepo();