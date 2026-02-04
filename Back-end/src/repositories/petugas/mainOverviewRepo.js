import { pengendaraProfile, kendaraan, kendaraanMasuk, kendaraanKeluar } from "../../models/Index.js";
import { Op } from "sequelize";
import { formatTimeFormatter } from "../../utils/dateTimeFormatter.js";

class mainOverviewRepo {

    async getAktivitasTerakhir(limit = 10) {
        const masuk = await kendaraanMasuk.findAll({
            limit,
            order: [['waktu_masuk', 'DESC']],
            include: [{
                model: kendaraan,
                as: 'kendaraan',
                attributes: ['no_plat'],
                include: [
                    {
                        model: pengendaraProfile,
                        as: 'pemilik',
                        attributes: ['nama_pengendara']
                    }
                ]
            }]
        });

        const keluar = await kendaraanKeluar.findAll({
            limit,
            order: [['waktu_keluar', 'DESC']],
            include: [{
                model: kendaraan,
                as: 'kendaraanKeluars',
                attributes: ['no_plat'],
                include: [
                    { 
                        model: pengendaraProfile,
                        as: 'pemilik',
                        attributes: ['nama_pengendara']
                    }
                ]
            }]
        });

        const mappedMasuk = masuk.map(m => ({
            no_plat: m.kendaraan?.no_plat ?? '-',
            nama_pengendara: m.kendaraan?.pemilik.nama_pengendara?? '-',
            aktivitas: 'Masuk',
            waktu_raw: m.waktu_masuk,
            waktu: formatTimeFormatter(m.waktu_masuk)
        }));

        const mappedKeluar = keluar.map(k => ({
            no_plat: k.kendaraanKeluars?.no_plat?? '-',
            nama_pengendara: k.kendaraanKeluars?.pemilik.nama_pengendara?? '-',
            aktivitas: 'Keluar',
            waktu_raw: k.waktu_keluar,
            waktu: formatTimeFormatter(k.waktu_keluar)
            
        }));

        return [...mappedMasuk, ...mappedKeluar].sort((a, b) => new Date(b.waktu_raw) - new
        Date(a.waktu_raw)).slice(0, limit).map(({ waktu_raw, ...rest}) => rest);
    }

    countKendaraanMasuk(start, end) {
        return kendaraanMasuk.count({
            where: {
                waktu_masuk: {
                    [Op.between]: [start, end]
                }
            }
        });
    }

    countKendaraanKeluar(start, end) {
        return kendaraanKeluar.count({
            where: {
                waktu_keluar: {
                    [Op.between]: [start, end]
                }
            }
        });
    }

    countSedangParkir() {
        return kendaraanMasuk.count({
            where: {
                status_parkir: 'Sedang Parkir'
            }
        });
    }
}

export default new mainOverviewRepo();