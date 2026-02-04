import menuNotifikasi from "../../services/petugas/menuNotifikasi.js";

class menuNotifikasiController {
    async getAll(req, res, next) {
        try {
            const userId = req.user?.id_users;
            
            if (!userId) {
                return res.status(401).json({
                    message: 'User tidak valid'
                });
            }

            const { page = 1, limit = 10 } = req.query;

            const data = await menuNotifikasi.getAll({
                userId,
                page: Number(page),
                limit: Number(limit)
            });

            res.status(200).json({
                message: 'Berhasil mengambil data notifikasi petugas',
                data
            })
        } catch (error) {
            next(error)
        }
    }

    async markAsRead(req, res, next) {
        try {
            const userId = req.user?.id_users;
            const { id } = req.params;

            await menuNotifikasi.markAsRead({id, userId});

            res.status(200).json({
                message: 'Notifikasi sudah dibaca'
            })
        } catch (error) {
            next(error)
        }
    }

    async markAllAsRead(req, res, next) {
        try {
            const userId = req.user?.id_users;

            await menuNotifikasi.markAllAsRead(userId);

            res.status(200).json({
                message: 'Semua notifikasi sudah dibaca'
            })
        } catch (error) {
            
        }
    }
}

export default new menuNotifikasiController();