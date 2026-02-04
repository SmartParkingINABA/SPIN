import { kendaraanMasuk } from "../../models/Index.js";

class kendaraanMasukRepo {
    findActive(kendaraanId, transaction) {
        return kendaraanMasuk.findOne({
            where: {
                kendaraan_id: kendaraanId,
                status_parkir: 'Sedang Parkir'
            },
            transaction
        });
    }

    create(data, transaction) {
        return kendaraanMasuk.create(data, transaction);
    }

    finish(id_kendaraan_masuk, transaction) {
        return kendaraanMasuk.update(
            { status_parkir: 'Selesai' },
            { 
                where: { id_kendaraan_masuk },
                transaction
            }
        );
    }
};

export default new kendaraanMasukRepo();