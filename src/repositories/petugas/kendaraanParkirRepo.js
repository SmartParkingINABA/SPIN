import { Op, Sequelize } from "sequelize";
import { kendaraanMasuk, kendaraan, pengendaraProfile } from "../../models/Index.js";

class kendaraanParkirRepo {
    async findKendaraanParkirAktif({search, limit, offset}) {
        const whereMasuk = {
            status_parkir: 'Sedang Parkir'
        };

        const wherePengendara = {};

        if (search) {
            wherePengendara[Op.or] = [
                { nama_pengendara: { [Op.like]: `%${search}%` } },
                { '$kendaraan.no_plat$': { [Op.like]: `%${search}%` } },
            ];
        }
        return kendaraanMasuk.findAndCountAll({
            where: whereMasuk,
            include: [
                {
                    model: kendaraan,
                    as: 'kendaraan',
                    required: true,
                    attributes: ['no_plat', 'jenis'],
                    include: [
                        {
                            model: pengendaraProfile,
                            as: 'pemilik',
                            required: true,
                            attributes: ['nama_pengendara'],
                            where: wherePengendara
                        }
                    ]
                }
            ],
            attributes: [
                'id_kendaraan_masuk',
                'waktu_masuk',
                [
                    Sequelize.literal(`TIMESTAMPDIFF(MINUTE, kendaraanMasuk.waktu_masuk, NOW())`),
                    'durasi_menit'
                ]
            ],
            order: [['waktu_masuk', 'ASC']],
            limit,
            offset,
            distinct: true,
            raw: true,
            nest: true
        });
    }
}

export default new kendaraanParkirRepo();