import { kendaraanKeluar } from "../../models/Index.js";

class kendaraanKeluarRepo {
    create(data, transaction) {
        return kendaraanKeluar.create(data, {transaction});
    }
};

export default new kendaraanKeluarRepo();