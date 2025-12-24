import { kendaraan } from "../../models/Index.js";

class kendaraanRepo {
    findByPlatNomor(no_plat) {
        return kendaraan.findOne({where: {no_plat}});
    }

    findByIdAndPengendara(id_kendaraan, pengendara_id) {
        return kendaraan.findOne({
            where: {id_kendaraan, pengendara_id}
        });
    }

    findAllByPengendara(pengendara_id) {
        return kendaraan.findAll({
            where: {pengendara_id},
            order: [['created_at', 'DESC']]
        });
    }

    createData(data) {
        return kendaraan.create(data);
    }

    updateDataKendaraan(id_kendaraan, data) {
        return kendaraan.update(data, {
            where: {id_kendaraan}
        })
    }

    deleteById(id_kendaraan) {
        return kendaraan.destroy({
            where: {id_kendaraan}
        })
    }
};

export default new kendaraanRepo();

