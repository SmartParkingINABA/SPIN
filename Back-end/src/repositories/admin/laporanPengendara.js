import sequelize from "../../configs/DBConfig.js";

const laporanPengendaraRepo = {
    async getPengendaraSeringParkir(tanggalMulai, tanggalAkhir) {
        return sequelize.query(
            `SELECT 
                pp.nama_pengendara,
                COUNT(km.id_kendaraan_masuk) AS total_parkir
            FROM pengendara_profile pp
            JOIN kendaraan k ON pp.id_pengendara = k.pengendara_id
            JOIN kendaraan_masuk km ON k.id_kendaraan = km.kendaraan_id
            WHERE DATE(km.waktu_masuk) BETWEEN DATE(?) AND DATE(?)
            GROUP BY pp.id_pengendara, pp.nama_pengendara
            ORDER BY total_parkir DESC`,
            {
                replacements: [tanggalMulai, tanggalAkhir],
                type: sequelize.QueryTypes.SELECT
            }
        );
    },

    async getPengendaraBaruTerdaftar(limit = 5) {
        return sequelize.query(
            `SELECT 
                pp.id_pengendara,
                pp.nama_pengendara,
                u.email,
                u.tanggal_daftar
            FROM pengendara_profile pp
            JOIN users u ON pp.user_id = u.id_users
            ORDER BY u.tanggal_daftar DESC
            LIMIT ?`,
            {
                replacements: [limit],
                type: sequelize.QueryTypes.SELECT
            }
        );
    },

    async getDistribusiParkirPengendara(tanggalMulai, tanggalAkhir) {
        return sequelize.query(
            `SELECT 
                pp.nama_pengendara,
                COUNT(km.id_kendaraan_masuk) AS jumlah_parkir
            FROM pengendara_profile pp
            JOIN kendaraan k ON pp.id_pengendara = k.pengendara_id
            JOIN kendaraan_masuk km ON k.id_kendaraan = km.kendaraan_id
            WHERE DATE(km.waktu_masuk) BETWEEN DATE(?) AND DATE(?)
            GROUP BY pp.id_pengendara, pp.nama_pengendara
            ORDER BY jumlah_parkir DESC`,
            {
                replacements: [tanggalMulai, tanggalAkhir],
                type: sequelize.QueryTypes.SELECT
            }
        );
    }
};

export default laporanPengendaraRepo;
