import { kendaraan } from "../../models/Index.js";

class qrCodeRepo {
    findActiveByPengendara(pengendaraId) {
        return kendaraan.findAll({
            where: {
                pengendara_id: pengendaraId,
                status: 'Aktif'
            },
            attributes: [
                'id_kendaraan',
                'no_plat',
                'merk',
                'jenis',
                'qr_code'
            ],
            order: [['created_at', 'DESC']]
        });
    }

    findByIdPengendara(kendaraanId, pengendaraId) {
        return kendaraan.findOne({
            where: {
                id_kendaraan: kendaraanId,
                pengendara_id: pengendaraId,
                status: 'Aktif'
            }
        })
    }
};


export default new qrCodeRepo;