import dashboardMainOverviewRepo from "../../repositories/admin/dashboardMainOverview.js";
import statusCache from "../../cache/Status.js";
import { generateLastNDates, mergeCounts } from "../../utils/DateHelper.js";
import { formatDateTimeFormatter } from "../../utils/dateTimeFormatter.js";

const dashboardMainOverviewServices = {
    async getOverview() {
        const dates = generateLastNDates(7);
        const petugasOnline = await statusCache.totalPetugasOnline()

        const [ 
            totalKendaraan, 
            kendaraanAktifParkir,
            totalPengendara,
            parkirPerhari, 
            kendaraanMasuk, 
            kendaraanKeluar, 
            durasiParkirRataRata,
            aktivitasTerbaru, 
            pengendaraBaruTerdaftar 
        ] = await Promise.all(
            [
                dashboardMainOverviewRepo.countKendaraan(),
                dashboardMainOverviewRepo.countKendaraanAktifParkir(),
                dashboardMainOverviewRepo.countPengendara(),
                dashboardMainOverviewRepo.kendaraanParkirPerhari(),
                dashboardMainOverviewRepo.kendaraanMasukPerhari(),
                dashboardMainOverviewRepo.kendaraanKeluarPerhari(),
                dashboardMainOverviewRepo.durasiParkirRataRata(),
                dashboardMainOverviewRepo.aktivitasTerbaru(),
                dashboardMainOverviewRepo.pengendaraBaruTerdaftar()

            ]
        );

        
        const aktivitas = aktivitasTerbaru.map(activity => ({
            ...activity,
            waktu: formatDateTimeFormatter(activity.waktu)
        }));

        return {
            statistik: {
                totalKendaraan,
                kendaraanAktifParkir,
                totalPengendara,
                petugasOnline
            },

            chart: {
                dates,
                jumlahParkir: mergeCounts(dates, parkirPerhari),
                masuk: mergeCounts(dates, kendaraanMasuk),
                keluar: mergeCounts(dates, kendaraanKeluar),
                durasi: mergeCounts(dates, durasiParkirRataRata)
            },

            aktivitas: aktivitas,
            pengendaraBaru: pengendaraBaruTerdaftar
        };
    }
};

export default dashboardMainOverviewServices;