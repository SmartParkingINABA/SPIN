import sequelize from "../../configs/DBConfig.js";

const laporanPetugasRepo = {
    async getPetugasAktifitas(tanggalMulai, tanggalAkhir) {
        return sequelize.query(
            `SELECT 
                pt.id_petugas,
                pt.nama_petugas,
                COUNT(DISTINCT CASE WHEN km.waktu_masuk IS NOT NULL THEN km.id_kendaraan_masuk END) AS total_masuk,
                COUNT(DISTINCT CASE WHEN kk.waktu_keluar IS NOT NULL THEN kk.id_kendaraan_keluar END) AS total_keluar,
                (COUNT(DISTINCT CASE WHEN km.waktu_masuk IS NOT NULL THEN km.id_kendaraan_masuk END) +
                COUNT(DISTINCT CASE WHEN kk.waktu_keluar IS NOT NULL THEN kk.id_kendaraan_keluar END)) AS total_transaksi
            FROM petugas_profile pt
            LEFT JOIN kendaraan_masuk km ON pt.id_petugas = km.petugas_id 
                AND DATE(km.waktu_masuk) BETWEEN DATE(?) AND DATE(?)
            LEFT JOIN kendaraan_keluar kk ON pt.id_petugas = kk.petugas_id 
                AND DATE(kk.waktu_keluar) BETWEEN DATE(?) AND DATE(?)
            GROUP BY pt.id_petugas, pt.nama_petugas
            ORDER BY total_transaksi DESC`,
            {
                replacements: [tanggalMulai, tanggalAkhir, tanggalMulai, tanggalAkhir],
                type: sequelize.QueryTypes.SELECT
            }
        );
    },

    async getDetailAktivitasPetugas(tanggalMulai, tanggalAkhir) {
        return sequelize.query(
            `SELECT 
                pt.id_petugas,
                pt.nama_petugas,
                DATE(km.waktu_masuk) AS tanggal_masuk,
                DATE(kk.waktu_keluar) AS tanggal_keluar,
                COUNT(DISTINCT km.id_kendaraan_masuk) AS jumlah_masuk,
                COUNT(DISTINCT kk.id_kendaraan_keluar) AS jumlah_keluar
            FROM petugas_profile pt
            LEFT JOIN kendaraan_masuk km ON pt.id_petugas = km.petugas_id
            LEFT JOIN kendaraan_keluar kk ON pt.id_petugas = kk.petugas_id
            WHERE DATE(km.waktu_masuk) BETWEEN DATE(?) AND DATE(?)
            OR DATE(kk.waktu_keluar) BETWEEN DATE(?) AND DATE(?)
            GROUP BY pt.id_petugas, pt.nama_petugas, DATE(km.waktu_masuk), DATE(kk.waktu_keluar)
            ORDER BY pt.nama_petugas, COALESCE(DATE(km.waktu_masuk), DATE(kk.waktu_keluar)) DESC`,
            {
                replacements: [tanggalMulai, tanggalAkhir, tanggalMulai, tanggalAkhir],
                type: sequelize.QueryTypes.SELECT
            }
        );
    },

    async getPetugasPalingAktif(tanggalMulai, tanggalAkhir) {
        return sequelize.query(
            `SELECT 
                pt.id_petugas,
                pt.nama_petugas,
                pt.shift,
                COUNT(DISTINCT CASE WHEN km.waktu_masuk IS NOT NULL THEN km.id_kendaraan_masuk END) AS total_masuk,
                COUNT(DISTINCT CASE WHEN kk.waktu_keluar IS NOT NULL THEN kk.id_kendaraan_keluar END) AS total_keluar
            FROM petugas_profile pt
            LEFT JOIN kendaraan_masuk km ON pt.id_petugas = km.petugas_id 
                AND DATE(km.waktu_masuk) BETWEEN DATE(?) AND DATE(?)
            LEFT JOIN kendaraan_keluar kk ON pt.id_petugas = kk.petugas_id 
                AND DATE(kk.waktu_keluar) BETWEEN DATE(?) AND DATE(?)
            GROUP BY pt.id_petugas, pt.nama_petugas, pt.shift
            HAVING (COUNT(DISTINCT CASE WHEN km.waktu_masuk IS NOT NULL THEN km.id_kendaraan_masuk END) +
                    COUNT(DISTINCT CASE WHEN kk.waktu_keluar IS NOT NULL THEN kk.id_kendaraan_keluar END)) > 0
            ORDER BY (total_masuk + total_keluar) DESC
            LIMIT 10`,
            {
                replacements: [tanggalMulai, tanggalAkhir, tanggalMulai, tanggalAkhir],
                type: sequelize.QueryTypes.SELECT
            }
        );
    }
};

export default laporanPetugasRepo;
