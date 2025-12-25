import { kendaraan, pengendaraProfile } from '../../models/Index.js';

class kendaraanRepo {
    findByQrCode(qrCode) {
        return kendaraan.findOne({
            where: {qr_code: qrCode, status: 'Aktif'},
            attributes: [
                'id_kendaraan',
                'qr_code',
                'no_plat',
                'jenis',
                'merk',
                'createdAt'
            ],
            include: [{
                model: pengendaraProfile,
                as: 'pemilik',
                attributes: ['nama_pengendara', 'alamat'],
            }]
        });
    }

    findById(id) {
        return kendaraan.findByPk(id,{
            attributes: [
                'id_kendaraan',
                'no_plat'
            ],
            include: [
                {
                    model: pengendaraProfile,
                    as: 'pemilik',
                    attributes: ['nama_pengendara', 'alamat', 'no_telp']
                }
            ]
        });
    }
};

export default new kendaraanRepo();
