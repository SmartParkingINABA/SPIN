import { kendaraanMasuk, kendaraanKeluar, kendaraan } from "../../models/Index.js";

class parkirRepo {
    async findRiwayat({pengendaraId, kendaraanId, status, limit, offset}) {
        const where = {};

        if ( status !== 'all' ) {
            where.status_parkir = status;
        }

        if ( kendaraanId !== 'all') {
            where.kendaraan_id = kendaraanId;
        }

        return kendaraanMasuk.findAndCountAll({
            where,
            include: [
                {
                    model: kendaraan,
                    as: 'kendaraan',
                    required: true,
                    where: { pengendara_id: pengendaraId },
                    attributes: ['no_plat'],
                },
                {
                    model: kendaraanKeluar,
                    as: 'kendaraanKeluar',
                    required: false,
                    attributes: ['waktu_keluar']
                }
            ],
            order: [
                ['waktu_masuk', 'DESC']
            ],
            limit,
            offset
        });
    }

    async countTotalParkir({pengendaraId, kendaraanId}) {
        const where = {};

        if (kendaraanId && kendaraanId !== 'all') {
            where.kendaraan_id = kendaraanId;   
        }

        return kendaraanMasuk.count({
            where,
            include: [{
                model: kendaraan,
                as: 'kendaraan',
                where: { pengendara_id: pengendaraId }
            }]
        });
    }

    async countSedangParkir({pengendaraId, kendaraanId}) {
        const where = { status_parkir: 'Sedang Parkir'};

        if (kendaraanId && kendaraanId !== 'all') {
            where.kendaraan_id = kendaraanId;
        }

        return kendaraanMasuk.count({
            where,
            include: [{
                model: kendaraan,
                as: 'kendaraan',
                where: { pengendara_id: pengendaraId }
            }]
        });
    }
};


export default new parkirRepo();