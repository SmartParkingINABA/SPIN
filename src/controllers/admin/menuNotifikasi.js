import menuNotifikasi from "../../services/admin/menuNotifikasi.js";

class menuNotifikasiController {
    async createNotifikasi(req, res, next) {
        try {
            if (req.user.role_id !== 1) {
                return res.status(403).json({
                    message: 'Akses ditolak, role tidak sesuai'
                })
            }

            const {
                judul,
                pesan,
                tipe,
                target
            } = req.body;
            
            if (!judul || !pesan || !tipe || !target) {
                return res.status(400).json({
                    message: 'field input tidak boleh kosong'
                })
            };

            await menuNotifikasi.createNotifikasi({
                userId: req.user.id_users,
                judul,
                pesan,
                tipe,
                target
            });
            return res.status(201).json({
                message: 'Notifikasi berhasil terkirim'
            })
        } catch (error) {
            next(error)
        }
    }

    async getDashboardStats(req, res, next) {
        try {
            const stats = await menuNotifikasi.getDashboardStats();
            return res.status(200).json({
                data: stats
            })
        } catch (error) {
            next(error)
        }
    }
};

export default new menuNotifikasiController();