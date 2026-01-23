import { notification, notificationAdmin, notificationUser } from "../../models/Index.js";

class notifikasiRepo {
    create(data, transaction) {
        return notification.create(data, {transaction});
    }

    async findByPetugas({userId, limit, offset}) {
        const rows = await notificationUser.findAll({
            where: {
                user_id: userId
            },
            include: [{
                model: notificationAdmin,
                as: 'notifikasi'
            }],
            limit,
            offset
        });

        const count = await notificationUser.count({
            where: {
                user_id: userId
            }
        })

        const unread = await notificationUser.count({
            where: {
                user_id: userId,
                status_baca: 'Belum'
            }
        });
        return { rows, count, unread };
    }

    async findOneOwned({id, userId}) {
        return notificationUser.findOne({
            where: {
                id_notifikasi_user: id,
                user_id: userId
            }
        });
    }

    async markAsRead(id) {
        return notificationUser.update(
            {
            status_baca: 'Sudah',
            waktu_dibaca: new Date()
            },
            {
                where: {
                    id_notifikasi_user: id
                }
            }
        );
    }

    async markAllAsRead(id) {
        return notificationUser.update(
            {
                status_baca: 'Sudah',
                waktu_dibaca: new Date()
            },
            {
                where: {
                    user_id: id,
                    status_baca: 'Belum'
                }
            }
        )
    }
};

export default new notifikasiRepo();