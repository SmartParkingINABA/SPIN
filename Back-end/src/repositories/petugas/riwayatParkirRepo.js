import { Op, Sequelize } from "sequelize";
import { kendaraan, kendaraanKeluar, kendaraanMasuk, pengendaraProfile } from "../../models/Index.js";

class riwayatParkirRepo {
    async findRiwayatParkir({search, limit, offset}) {
        const whereMasuk = {
            status_parkir: 'Selesai'
        }

        const wherePengendara = {};

        if (search) {
            wherePengendara[Op.or] = [
                { nama_pengendara: { [Op.like]: `%${search}%` } },
                { '$kendaraan.no_plat$': { [Op.like]: `%${search}%` } }
            ];
        }

        return kendaraanMasuk.findAndCountAll({
            where: whereMasuk,
            include: [
                {
                    model: kendaraan,
                    as: 'kendaraan',
                    required: true,
                    attributes: ['no_plat'],
                    include: [
                        {
                            model: pengendaraProfile,
                            as: 'pemilik',
                            required: true,
                            attributes: ['nama_pengendara'],
                            where: wherePengendara
                        }
                    ]
                },
                {
                    model: kendaraanKeluar,
                    as: 'kendaraanKeluar',
                    required: true,
                    attribute: ['waktu_keluar']
                }
            ],
            attributes: [
                'waktu_masuk',  
                [
                    Sequelize.literal(`TIMESTAMPDIFF(MINUTE, kendaraanMasuk.waktu_masuk, kendaraanKeluar.waktu_keluar)`),
                    'durasi_menit'
                ],
                'status_parkir',
            ],
            order: [[{model: kendaraanKeluar, as: 'kendaraanKeluar'}, 'waktu_keluar', 'DESC']],
            limit,
            offset,
            distinct: true,
            raw: true,
            nest: true
        })
    }
};

export default new riwayatParkirRepo();