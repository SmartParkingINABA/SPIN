import { notificationUser } from "../../models/Index.js";

const notifikasiUserRepo = {
    async bulkCreatePenerima(data, transaction = null) {
        return notificationUser.bulkCreate(
            data, 
            transaction ? { transaction } : undefined
        );
    },

    async findUser(userId, limit = 10) {
        return notificationUser.findAll({
            where: {user_id: userId},
            limit,
            order: [['waktu_dibaca', 'DESC']],
            include: ['notifikasi']
        });
    },

    async markAsRead(id, userId) {
        return notificationUser.update(
            {status_baca: 'Sudah'},
            {where: {id_notifikasi_user: id, user_id: userId}}
        );
    }
}


export default notifikasiUserRepo;