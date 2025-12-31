import { Op } from "sequelize";
import { notification, kendaraan } from "../../models/Index.js";

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

    async markAsRead(notifikasiId) {
        return notification.update(
            { status_baca: 'Sudah' },
            { where: { id_notifikasi: notifikasiId } }
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
};

export default new notifikasiRepo();