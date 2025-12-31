import menuNotifikasi from "../../services/pengendara/menuNotifikasi.js";

class notifikasiController {
    async getAll(req, res, next) {
        try {
            const pengendaraId = req.user?.pengendaraProfile?.id_pengendara;

            if (!pengendaraId) {
                return res.status(400).json({
                    message: 'Pengendara tidak valid'
                });
            };

            const {page = 1, limit = 10} = req.query;

            const data = await menuNotifikasi.getAll({
                pengendaraId,
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
            const {id} = req.params

            if (!pengendaraId) {
                return res.status(403).json({
                    message: 'Pengendara tidak valid'
                });
            }

            await menuNotifikasi.markAsRead({
                notifikasiId: id,
                pengendaraId
            });

            return res.status(200).json({
                message: 'Notifikasi ditandai sudah dibaca'
            });

        } catch (error) {
            next(error)
        }
    }

    async markAllAsRead(req, res, next) {
        try {
            const pengendaraId = req.user?.pengendaraProfile?.id_pengendara;

            if (!pengendaraId) {
                return res.status(403).json({
                    message: 'Pengendara tidak valid'
                });
            }

            await menuNotifikasi.markAllAsRead(pengendaraId);

            return res.status(200).json({
                message: 'Semua notifikasi ditandai sudah dibaca'
            })

        } catch (error) {
            next(error)
        }
    }
}

export default new notifikasiController();