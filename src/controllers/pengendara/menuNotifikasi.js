import menuNotifikasi from "../../services/pengendara/menuNotifikasi.js";

class notifikasiController {
    async getAll(req, res, next) {
        try {
            const pengendaraId = req.user?.pengendaraProfile?.id_pengendara;
            const userId = req.user?.id_users;

            if (!pengendaraId || !userId) {
                return res.status(400).json({
                    message: 'Pengendara tidak valid'
                });
            };

            const {page = 1, limit = 10} = req.query;

            const data = await menuNotifikasi.getAllCombined({
                pengendaraId,
                userId,
                page: Number(page),
                limit: Number(limit)
            });

            return res.status(200).json({
                message: 'Berhasil mengambil data notifikasi',
                data
            });
        } catch (error) {
            next(error)
        }
    }

    async markAsRead(req, res, next) {
        try {
            const pengendaraId = req.user?.pengendaraProfile?.id_pengendara;
            const userId = req.user?.id_users;
            const {id} = req.params;
            const {type} = req.query;

            if (!pengendaraId) {
                return res.status(403).json({
                    message: 'Pengendara tidak valid'
                });
            }

            await menuNotifikasi.markAsRead({
                type,
                notifikasiId: id,
                pengendaraId,
                userId
            });

            return res.status(200).json({
                message: 'Notifikasi sudah dibaca'
            });

        } catch (error) {
            next(error)
        }
    }

    async markAllAsRead(req, res, next) {
        try {
            const pengendaraId = req.user?.pengendaraProfile?.id_pengendara;
            const userId = req.user?.id_users;
            const {type} = req.query;

            if (!pengendaraId) {
                return res.status(403).json({
                    message: 'Pengendara tidak valid'
                });
            }

            await menuNotifikasi.markAllAsRead(
                {
                    type,
                    pengendaraId,
                    userId
                }
            );

            return res.status(200).json({
                message: 'Semua notifikasi sudah dibaca'
            })

        } catch (error) {
            next(error)
        }
    }
}

export default new notifikasiController();