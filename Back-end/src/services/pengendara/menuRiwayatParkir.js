import kendaraanRepo from "../../repositories/pengendara/kendaraanRepo.js";
import parkirRepo from "../../repositories/pengendara/parkirRepo.js";
import { diffMinutes, formatDuration } from "../../utils/dateDuration.js";

class menuRiwayatParkirService {
    async getRiwayatParkirExport(pengendaraId, status = 'all', kendaraanId = 'all', page = 1, limit = 10) {

        if (kendaraanId !== 'all') {
            const owned = await kendaraanRepo.findOwnVehicles({
                kendaraanId, pengendaraId
            });

            if(!owned) {
                throw new Error('Data Kendaraan Tidak Ditemukan')
            }
        }

        const offset = (page - 1) * limit;

        const kendaraanList = await kendaraanRepo.findByPengendara(pengendaraId);

        const {rows, count} = await parkirRepo.findRiwayat({
            pengendaraId,
            kendaraanId,
            status,
            limit,
            offset
        });

        let totalDurasiMenit = 0;

        const riwayat = rows.map(item => {
            const jamMasuk = new Date(item.waktu_masuk);
            const jamKeluar = item.kendaraanKeluar
            ? new Date(item.kendaraanKeluar.waktu_keluar) : null;

            let durasiMenit = 0;
            if (item.status_parkir === 'Selesai' && jamKeluar && jamKeluar >= jamMasuk) {
                durasiMenit = diffMinutes(jamMasuk, jamKeluar);
                totalDurasiMenit += durasiMenit;
            }


            return {
                plat_nomor: item.kendaraan.no_plat,
                tanggal_masuk: jamMasuk.toLocaleDateString('id-ID', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                }),
                jam_masuk: jamMasuk.toLocaleTimeString('id-ID', {
                    hour: '2-digit',
                    minute: '2-digit',
                }),
                jam_keluar: jamKeluar ? jamKeluar.toLocaleTimeString('id-ID', {
                    hour: '2-digit',
                    minute: '2-digit'
                }) : null,
                durasi: formatDuration(durasiMenit),
                status: item.status_parkir
            };
        });

        const totalParkir = await parkirRepo.countTotalParkir({
            pengendaraId,
            kendaraanId
        });

        const sedangParkir = await parkirRepo.countSedangParkir({
            pengendaraId,
            kendaraanId
        });

        return {
            kendaraan_list: [
                {id: 'all', label: 'Semua Kendaraan'},
                ...kendaraanList.map(k => ({
                    id: k.id_kendaraan,
                    label: k.no_plat
                }))
            ],
            summary: {
                total_parkir: totalParkir,
                total_durasi: formatDuration(totalDurasiMenit),
                sedang_parkir: sedangParkir
            },
            riwayat: {
                data: riwayat,
                pagination: {
                    page,
                    limit,
                    total: count
                }
            }
        }
    }
};

export default new menuRiwayatParkirService();