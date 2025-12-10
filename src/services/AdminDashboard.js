import redis from '../configs/RedisConfig.js'
import sequelize from '../configs/DBConfig.js'
import { pengendaraProfile, kendaraan } from '../models/Index.js'
import { generateLastNDates, mergeCounts } from '../utils/DateHelper.js'

const dashboardAdminServices = {
    async getOverview() {
        const totalKendaraan = await kendaraan.count();
        const totalPengendara = await pengendaraProfile.count();

        const aktifRows = await sequelize.query(
            `SELECT COUNT(*) AS total FROM kendaraan_masuk km LEFT JOIN kendaraan_keluar kk ON km.kendaraan_id
            = kk.kendaraan_id WHERE kk.kendaraan_id IS NULL`,
            { 
                type: sequelize.QueryTypes.SELECT 
            }
        );
        const kendaraanAktif = aktifRows[0]?.total || 0;

        const petugasKeys = await redis.keys('petugas:presence:*');
        const petugasAktif = petugasKeys.length;

        const dates = generateLastNDates(7);

        const parkirRows = await sequelize.query(
            `SELECT DATE(waktu_masuk) AS tanggal, COUNT(*) AS total FROM kendaraan_masuk WHERE 
            waktu_masuk >= DATE_SUB(CURDATE(), INTERVAL 6 DAY) GROUP BY DATE(waktu_masuk)`,
        );

        const masukRows = await sequelize.query(
            `SELECT DATE(waktu_masuk) AS tanggal, COUNT(*) AS total FROM kendaraan_masuk WHERE waktu_masuk >= 
            DATE_SUB(CURDATE(), INTERVAL 6 DAY) GROUP BY DATE(waktu_masuk)`,
            {
                type: sequelize.QueryTypes.SELECT
            }
        );

        const keluarRows = await sequelize.query(
            `SELECT DATE(waktu_keluar) AS tanggal, COUNT(*) AS total FROM kendaraan_keluar WHERE waktu_keluar >=
            DATE_SUB(CURDATE(), INTERVAL 6 DAY) GROUP BY DATE(waktu_keluar)`,
            {
                type: sequelize.QueryTypes.SELECT
            }
        );

        const durasiRows= await sequelize.query(
            `SELECT DATE(waktu_keluar) AS tanggal, AVG(TIMESTAMPDIFF(MINUTE, km.waktu_masuk, kk.waktu_keluar))
            AS total FROM kendaraan_masuk km JOIN kendaraan_keluar kk ON km.kendaraan_id = kk.kendaraan_id WHERE kk.waktu_keluar >=
            DATE_SUB(CURDATE(), INTERVAL 6 DAY) GROUP BY DATE(waktu_keluar)`,
            {
                type: sequelize.QueryTypes.SELECT
            }
        );

        const chartMasuk = mergeCounts(dates, masukRows);
        const chartKeluar = mergeCounts(dates, keluarRows);
        const chartDurasi = mergeCounts(dates, durasiRows, 'tanggal', 'total');
        const chartParkir = mergeCounts(dates, parkirRows);

        const aktivitas = await sequelize.query(
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

        const newPengendara = await sequelize.query(
            `SELECT id_pengendara, nama_pengendara, createdAt FROM pengendara_profile ORDER BY createdAt DESC LIMIT 5`,
            {
                type: sequelize.QueryTypes.SELECT
            }
        ).catch(() => []);

        return {
            statistik: {
                totalKendaraan,
                totalPengendara,
                kendaraanAktif,
                petugasAktif
            },
            chart: {
                dates,
                parkirPerTujuhHari: chartParkir,
                masuk: chartMasuk,
                keluar: chartKeluar,
                durasiParkirRatarata: chartDurasi
            },
            aktivitasTerbaru: aktivitas,
            pengendaraBaru: newPengendara
        }
    }
};

export default dashboardAdminServices;