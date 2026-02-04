import { Op, Sequelize } from "sequelize";
import { notification, kendaraan, notificationAdmin, notificationUser } from "../../models/Index.js";

class notifikasiRepo {
    async findByPengendara({pengendaraId, limit, offset}) {
        const row = await notification.findAll({
            include: [
                {
                    model: kendaraan,
                    as: 'kendaraan',
                    where: {pengendara_id: pengendaraId},
                    attributes: []
                }
            ],
            order:[['waktu_dibuat', 'DESC']],
            limit,
            offset
        });

        const count = await notification.count({
            include: [
                {
                    model: kendaraan,
                    as: 'kendaraan',
                    where: {pengendara_id: pengendaraId}
                }
            ]
        });

        const unread = await notification.count({
            where: {status_baca: 'Belum'},
            include: [
                {
                    model: kendaraan,
                    as: 'kendaraan',
                    where: {pengendara_id: pengendaraId}
                }
            ]
        });
        return { row, count, unread};
    }

    async findOneOwned(notifikasiId, pengendaraId) {
        return notification.findOne({
            where: { id_notifikasi: notifikasiId },
            include: [{
                model: kendaraan,
                as: 'kendaraan',
                where: { pengendara_id: pengendaraId }
            }]
        });
    }
    
    async findAdminOwned({notifikasiUserId, userId}) {
        return notificationUser.findOne({
            where: { 
                id_notifikasi_user: notifikasiUserId,
                user_id: userId
            }
        })
    }


    async markAsRead(notifikasiId) {
        return notification.update(
            { status_baca: 'Sudah' },
            { where: { id_notifikasi: notifikasiId } }
        );
    }


    async markNotifAdminAsRead(notifikasiUserId) {
        return notificationUser.update(
            {
                status_baca: 'Sudah',
                waktu_dibaca: new Date()
            },
            {
                where: {
                    id_notifikasi_user: notifikasiUserId
                }
            }
        );
    }


    async markAllAsRead(pengendaraId) {
        return notification.update(
            { status_baca: 'Sudah' },
            {
                where: { 
                    status_baca: 'Belum',
                    kendaraan_id: {
                        [Op.in]: Sequelize.literal(`(
                            SELECT id_kendaraan
                            FROM kendaraan
                            WHERE pengendara_id = ${pengendaraId})`)
                    }
                }
            }
        );
    }


    async markAllNotifAdminAsRead(userId) {
        return notificationUser.update(
            {
                status_baca: 'Sudah',
                waktu_dibaca: new Date()
            },
            {
                where: {
                    user_id: userId,
                    status_baca: 'Belum'
                }
            }
        )
    }



    async countUnreadNotifikasi(pengendaraId) {
        return notification.count({
            where: {status_baca: 'Belum'},
            include: [
                {
                    model: kendaraan,
                    as: 'kendaraan',
                    where: {pengendara_id: pengendaraId}
                }
            ]
        })
    }

    async findNotifikasiTerbaru(pengendaraId, limit = 5) {
        return notification.findAll({
            include: [
                {
                    model: kendaraan,
                    as: 'kendaraan',
                    where: {pengendara_id: pengendaraId},
                    attributes: ['no_plat']
                }
            ],
            order: [['waktu_dibuat', 'DESC']],
            limit
        });
    }

    async findAdminByUser({userId, limit, offset}) {
        const rows = await notificationUser.findAll({
            where: {
                user_id: userId
            },
            include: [{
                model: notificationAdmin,
                as: 'notifikasi'
            }],
            order: [[
                { model: notificationAdmin, as: 'notifikasi'},
                'waktu_dibuat', 
                'DESC'
            ]],
            limit,
            offset
        });

        const count = await notificationUser.count({
            where: {
                user_id: userId
            }
        });

        const unread = await notificationUser.count({
            where: {
                user_id: userId,
                status_baca: 'Belum'
            }
        });

        return { rows, count, unread };
    }

};

export default new notifikasiRepo();