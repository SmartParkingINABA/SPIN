import sequelize from "../../configs/DBConfig.js";

const laporanParkirRepo = {
    async getLaporanParkir(tanggalMulai, tanggalAkhir) {
        return sequelize.query(
            `SELECT 
                km.id_kendaraan_masuk,
                km.waktu_masuk,
                kk.waktu_keluar,
                k.no_plat,
                pp.nama_pengendara,
                pp.id_pengendara,
                pt_masuk.nama_petugas AS petugas_masuk,
                pt_keluar.nama_petugas AS petugas_keluar,
                CASE 
                    WHEN kk.waktu_keluar IS NOT NULL THEN 
                        TIMESTAMPDIFF(MINUTE, km.waktu_masuk, kk.waktu_keluar)
                    ELSE NULL 
                END AS durasi_menit,
                km.status_parkir
            FROM kendaraan_masuk km
            LEFT JOIN kendaraan_keluar kk ON km.id_kendaraan_masuk = kk.kendaraan_masuk_id
            JOIN kendaraan k ON km.kendaraan_id = k.id_kendaraan
            JOIN pengendara_profile pp ON k.pengendara_id = pp.id_pengendara
            JOIN petugas_profile pt_masuk ON km.petugas_id = pt_masuk.id_petugas
            LEFT JOIN petugas_profile pt_keluar ON kk.petugas_id = pt_keluar.id_petugas
            WHERE DATE(km.waktu_masuk) BETWEEN DATE(?) AND DATE(?)
            ORDER BY km.waktu_masuk DESC`,
            {
                replacements: [tanggalMulai, tanggalAkhir],
                type: sequelize.QueryTypes.SELECT
            }
        );
    },

    
    async getStatistikParkir(tanggalMulai, tanggalAkhir) {
        const result = await sequelize.query(
            `SELECT 
                COUNT(DISTINCT km.id_kendaraan_masuk) AS total_masuk,
                COUNT(DISTINCT kk.id_kendaraan_keluar) AS total_keluar,
                ROUND(AVG(TIMESTAMPDIFF(MINUTE, km.waktu_masuk, kk.waktu_keluar)), 2) AS durasi_rata_rata
            FROM kendaraan_masuk km
            LEFT JOIN kendaraan_keluar kk ON km.id_kendaraan_masuk = kk.kendaraan_masuk_id
            WHERE DATE(km.waktu_masuk) BETWEEN DATE(?) AND DATE(?)`,
            {
                replacements: [tanggalMulai, tanggalAkhir],
                type: sequelize.QueryTypes.SELECT
            }
        );
        
        return result[0];
    },

    
    async getKendaraanMasuk(tanggalMulai, tanggalAkhir) {
        return sequelize.query(
            `SELECT 
                DATE(km.waktu_masuk) AS tanggal,
                k.no_plat,
                pp.nama_pengendara,
                TIME_FORMAT(km.waktu_masuk, '%H:%i:%s') AS waktu_masuk,
                pt.nama_petugas
            FROM kendaraan_masuk km
            JOIN kendaraan k ON km.kendaraan_id = k.id_kendaraan
            JOIN pengendara_profile pp ON k.pengendara_id = pp.id_pengendara
            JOIN petugas_profile pt ON km.petugas_id = pt.id_petugas
            WHERE DATE(km.waktu_masuk) BETWEEN DATE(?) AND DATE(?)
            ORDER BY km.waktu_masuk DESC`,
            {
                replacements: [tanggalMulai, tanggalAkhir],
                type: sequelize.QueryTypes.SELECT
            }
        );
    },

    
    async getKendaraanKeluar(tanggalMulai, tanggalAkhir) {
        return sequelize.query(
            `SELECT 
                DATE(kk.waktu_keluar) AS tanggal,
                k.no_plat,
                pp.nama_pengendara,
                TIME_FORMAT(km.waktu_masuk, '%H:%i:%s') AS waktu_masuk,
                TIME_FORMAT(kk.waktu_keluar, '%H:%i:%s') AS waktu_keluar,
                CONCAT(FLOOR(TIMESTAMPDIFF(MINUTE, km.waktu_masuk, kk.waktu_keluar) / 60), 'j ',
                MOD(TIMESTAMPDIFF(MINUTE, km.waktu_masuk, kk.waktu_keluar), 60), 'm') AS durasi_parkir
            FROM kendaraan_keluar kk
            JOIN kendaraan_masuk km ON kk.kendaraan_masuk_id = km.id_kendaraan_masuk
            JOIN kendaraan k ON kk.kendaraan_id = k.id_kendaraan
            JOIN pengendara_profile pp ON k.pengendara_id = pp.id_pengendara
            WHERE DATE(kk.waktu_keluar) BETWEEN DATE(?) AND DATE(?)
            ORDER BY kk.waktu_keluar DESC`,
            {
                replacements: [tanggalMulai, tanggalAkhir],
                type: sequelize.QueryTypes.SELECT
            }
        );
    }
};

export default laporanParkirRepo;
