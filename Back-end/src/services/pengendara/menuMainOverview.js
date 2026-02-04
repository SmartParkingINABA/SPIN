import kendaraanRepo from "../../repositories/pengendara/kendaraanRepo.js";
import parkirRepo from "../../repositories/pengendara/parkirRepo.js";
import notifikasiRepo from "../../repositories/pengendara/notifikasiRepo.js";
import { diffMinutes, formatDuration } from "../../utils/dateDuration.js";
import { formatDateTimeFormatter } from "../../utils/dateTimeFormatter.js";

class mainOverviewService {
    async getMainOverview(pengendaraId) {
        const limitNotifikasi =  5;
        const limitParkir = 5;        


        const [
            totalKendaraan,
            totalParkir,
            totalDurasi,
            unreadNotif,
            kendaraanAktif,
            parkirTerakhir,
            notifikasiTerbaru
        ] = await Promise.all([
            kendaraanRepo.countTotalKendaraan(pengendaraId),
            parkirRepo.countTotalParkir({pengendaraId}),
            parkirRepo.totalDurasiParkir(pengendaraId),
            notifikasiRepo.countUnreadNotifikasi(pengendaraId),
            kendaraanRepo.findKendaraanAktifWithStatusParkir(pengendaraId),
            parkirRepo.findParkirTerakhir(pengendaraId, limitParkir),
            notifikasiRepo.findNotifikasiTerbaru(pengendaraId, limitNotifikasi)
        ]);

        return {
            summary: {
                total_kendaraan: totalKendaraan,
                total_parkir: totalParkir,
                total_durasi: formatDuration(totalDurasi),
                notifikasi_baru: unreadNotif
            },
            kendaraan_aktif: kendaraanAktif.map(k => {
                const kendaraan = k.toJSON();

                return {
                    ...kendaraan,
                    riwayatMasuk: kendaraan.riwayatMasuk ?.map(rm => ({
                        ...rm,
                        waktu_masuk: formatDateTimeFormatter(rm.waktu_masuk)
                    })) || []
                };
            }),
            status_Parkir_terakhir: parkirTerakhir.map(pt => {
                const parkir = pt.toJSON();

                return {
                    ...parkir,
                    waktu_masuk: formatDateTimeFormatter(parkir.waktu_masuk),
                    kendaraanKeluar: parkir.kendaraanKeluar ? {
                        ...parkir.kendaraanKeluar,
                        waktu_keluar: formatDateTimeFormatter(parkir.kendaraanKeluar.waktu_keluar)
                    }
                    : null
                }
            }),
            notifikasi_terbaru: notifikasiTerbaru.map(nt => {
                const notifikasi = nt.toJSON();

                return {
                    ...notifikasi,
                    waktu_dibuat: formatDuration(diffMinutes(notifikasi.waktu_dibuat))
                }
            })
        };
    }
}


export default new mainOverviewService();