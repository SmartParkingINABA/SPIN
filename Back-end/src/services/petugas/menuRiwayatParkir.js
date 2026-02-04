import riwayatParkirRepo from "../../repositories/petugas/riwayatParkirRepo.js";
import { formatTimeFormatter } from "../../utils/dateTimeFormatter.js";
import { formatDuration } from "../../utils/dateDuration.js";
import formatDateDDMMYYYY from "../../utils/dateFormatter.js";

class menuRiwayatParkirService {
    async getRiwayatParkir(query) {
        const page = Number(query.page) || 1;
        const limit = Number(query.limit) || 10;
        const offset = (page - 1) * limit;
        const search = query.search || null;

        const { rows, count } = await riwayatParkirRepo.findRiwayatParkir({
            search,
            limit,
            offset
        });

        const data = rows.map(item => ({
            tanggal: formatDateDDMMYYYY(item.waktu_masuk),
            no_plat: item.kendaraan.no_plat,
            nama_pengendara: item.kendaraan.pemilik.nama_pengendara,
            jam_masuk: formatTimeFormatter(item.waktu_masuk),
            jam_keluar: formatTimeFormatter(item.waktu_keluar),
            durasi: formatDuration(item.durasi_menit),
            status: item.status_parkir
        }));

        return {
            meta: {
            page,
            limit,
            total_data: count,
            total_page: Math.ceil(count / limit),
            },
            data
        };
    };
};


export default new menuRiwayatParkirService();