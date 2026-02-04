import kendaraanParkirRepo from "../../repositories/petugas/kendaraanParkirRepo.js";
import { formatTimeFormatter } from "../../utils/dateTimeFormatter.js";
import { formatDuration }  from "../../utils/dateDuration.js";

class menuKendaraanParkirService {
    async getKendaraanParkir(query) {
        const page = Number(query.page) || 1;
        const limit = Number(query.limit) || 10;
        const search = query.search || null;
        const offset = (page - 1) * limit;

        const { rows, count } = await kendaraanParkirRepo.findKendaraanParkirAktif({
            search,
            limit,
            offset
        });

        const data = rows.map(item => ({
            no_plat: item.kendaraan.no_plat,
            nama_pengendara: item.kendaraan.pemilik.nama_pengendara,
            jenis: item.kendaraan.jenis,
            waktu_masuk: formatTimeFormatter(item.waktu_masuk),
            durasi_parkir: formatDuration(item.durasi_menit)
        }));

        return {
            meta: {
                page,
                limit,
                total_data: count,
                total_page: Math.ceil(count / limit)
            },
            data
        };
    }
};


export default new menuKendaraanParkirService();