import { kendaraan } from "../../models/Index.js";

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

};

export default new kendaraanRepo();