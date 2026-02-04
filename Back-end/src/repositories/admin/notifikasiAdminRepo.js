import { Op } from "sequelize";
import { notificationAdmin } from "../../models/Index.js";

const notifikasiAdminRepo = {
    async createNotifikasiAdmin(payload, transaction = null) {
            return notificationAdmin.create(payload, {
            transaction
        });
    },

    async countAll() {
        return notificationAdmin.count()
    },

    async countToday() {
        const today = new Date();
        today.setHours(0, 0, 0, 0,);

        return notificationAdmin.count({
            where: {
                waktu_dibuat: {
                    [Op.gte]: today
                }
            }
        })
    }
}

export default notifikasiAdminRepo;