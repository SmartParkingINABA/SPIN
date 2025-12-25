import { notification } from "../../models/Index.js";

class notifikasiRepo {
    create(data, transaction) {
        return notification.create(data, {transaction});
    }
};

export default new notifikasiRepo();