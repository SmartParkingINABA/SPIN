import sequelize from "../../configs/DBConfig.js";
import { Users, kendaraan } from "../../models/Index.js";

const dashboardMainOverviewRepo = {
    countKendaraan() {
        return kendaraan.count();
    },

    countPengendara() {
        return Users.count(
            {
                where: {role_id: 3}
            }
        );
    },

    async countKendaraanAktifParkir() {
        const [rows] = await sequelize.query(
            `SELECT COUNT(*) AS total FROM kendaraan_masuk WHERE status_parkir = 'Sedang Parkir'`
        );
        return rows[0]?.total || 0;
    },

    async kendaraanParkirPerhari() {
        return sequelize.query(
            `SELECT DATE(waktu_masuk) AS tanggal, COUNT(*) AS total FROM kendaraan_masuk WHERE 
            waktu_masuk >= DATE_SUB(CURDATE(), INTERVAL 6 DAY) GROUP BY DATE(waktu_masuk)`,
            {
                type: sequelize.QueryTypes.SELECT
            }
        );
    },

    async kendaraanMasukPerhari() {
        return sequelize.query(
            `SELECT DATE(waktu_masuk) AS tanggal, COUNT(*) AS total FROM kendaraan_masuk WHERE waktu_masuk >= 
            DATE_SUB(CURDATE(), INTERVAL 6 DAY) GROUP BY DATE(waktu_masuk)`,
            {
                type: sequelize.QueryTypes.SELECT
            }
        );
    },

    async kendaraanKeluarPerhari() {
        return sequelize.query(
            `SELECT DATE(waktu_keluar) AS tanggal, COUNT(*) AS total FROM kendaraan_keluar WHERE waktu_keluar >=
            DATE_SUB(CURDATE(), INTERVAL 6 DAY) GROUP BY DATE(waktu_keluar)`,
            {
                type: sequelize.QueryTypes.SELECT
            }
        );
    },

    async durasiParkirRataRata() {
        return sequelize.query(
            `SELECT DATE(kk.waktu_keluar) AS tanggal, AVG(TIMESTAMPDIFF(MINUTE, km.waktu_masuk, kk.waktu_keluar)) AS total FROM kendaraan_masuk km 
            JOIN kendaraan_keluar kk ON km.kendaraan_id = kk.kendaraan_id 
            WHERE kk.waktu_keluar >= DATE_SUB(CURDATE(), INTERVAL 6 DAY) 
            GROUP BY DATE(kk.waktu_keluar)`,
            {
                type: sequelize.QueryTypes.SELECT
            }
        );
    },

    async aktivitasTerbaru() {
        return sequelize.query(
            `(SELECT km.kendaraan_id, k.no_plat, km.waktu_masuk AS waktu, 'masuk' AS jenis, pp.nama_pengendara FROM
            kendaraan_masuk km JOIN kendaraan k ON k.id_kendaraan = km.kendaraan_id LEFT JOIN pengendara_profile pp ON
            pp.id_pengendara = k.pengendara_id
            )
            UNION 
            (SELECT kk.kendaraan_id, k.no_plat, kk.waktu_keluar AS waktu, 'keluar' AS jenis, pp.nama_pengendara FROM
            kendaraan_keluar kk JOIN kendaraan k ON k.id_kendaraan = kk.kendaraan_id LEFT JOIN pengendara_profile pp ON 
            pp.id_pengendara = k.pengendara_id) ORDER BY waktu DESC LIMIT 10`,

            {
                type: sequelize.QueryTypes.SELECT
            }
        );
    },

    async pengendaraBaruTerdaftar() {
        return sequelize.query(
            `SELECT pp.id_pengendara, pp.nama_pengendara, u.email, pp.no_telp FROM pengendara_profile
            pp JOIN users u ON u.id_users = pp.user_id
            ORDER BY pp.id_pengendara DESC LIMIT 5`,
            {
                type: sequelize.QueryTypes.SELECT
            }
        );
    }

};

export default dashboardMainOverviewRepo;