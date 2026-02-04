import menuRiwayatParkir from "../../services/pengendara/menuRiwayatParkir.js";
import exportDataHistoryParkirToCsv from "../../utils/csvExport.js";

class menuRiwayatParkirController {
    async getRiwayat(req, res, next) {
        try {

            if (!req.user?.pengendaraProfile?.id_pengendara) {
                return res.status(403).json({
                    message: 'Pengendara Id Tidak Valid'
                })
            }
            
            const pengendaraId = req.user.pengendaraProfile.id_pengendara;

            const {
                status = 'all',
                kendaraan_id = 'all',
                page = 1,
                limit = 10
            } = req.query;

            const kendaraanId = kendaraan_id === 'all' ? 'all' : Number(kendaraan_id);

            if (kendaraanId !== 'all' && Number.isNaN(kendaraanId)) {
                return res.status(400).json({
                    message: 'kendaraan_id harus berupa Id kendaraan'
                })
            }

            const result = await menuRiwayatParkir.getRiwayatParkirExport(
                pengendaraId,
                status,
                kendaraan_id,
                Number(page),
                Number(limit)
            );

            return res.status(200).json({
                message: 'Berhasil Mengambil Riwayat Parkir',
                data: result
            });

            
        } catch (error) {
            next(error);
        }
    }

    async exportCsv(req, res, next) {
        try {
            if (!req.user?.pengendaraProfile?.id_pengendara) {
                return res.status(400).json({
                    message: 'Pengendara Id Tidak Valid'
                });
            }

            const pengendaraId = req.user.pengendaraProfile.id_pengendara;
            const {
                status = 'all',
                kendaraan_id = 'all'
            } = req.query;

            const result = await menuRiwayatParkir.getRiwayatParkirExport(
                pengendaraId,
                status,
                kendaraan_id,
                1,
                100000
            );

            if (!result.riwayat.data.length) {
                return res.status(404).json({
                    message: 'Data Riwayat Parkir Kosong'
                });
            }

            const csv = await exportDataHistoryParkirToCsv(result.riwayat.data);
            res.setHeader('Content-Type', 'text/csv; charset=utf-8');
            res.setHeader('Content-Disposition', 'attachment; filename="Riwayat-Parkir.csv"');
            res.status(200).send(csv);
        } catch (error) {
            next(error);
        }
    }
};

export default new menuRiwayatParkirController();