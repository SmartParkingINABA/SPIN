import mainOverviewRepo from "../../repositories/petugas/mainOverviewRepo.js";

class menuMainOverviewService {
    async getMainOverview() {
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);

        const [
            totalMasuk,
            totalKeluar,
            totalSedangParkir,
            aktivitas
        ] = await Promise.all([
            mainOverviewRepo.countKendaraanMasuk(startOfDay, endOfDay),
            mainOverviewRepo.countKendaraanKeluar(startOfDay, endOfDay),
            mainOverviewRepo.countSedangParkir(),
            mainOverviewRepo.getAktivitasTerakhir()
        ]);

        return {
            summary: {
                kendaraan_masuk: totalMasuk,
                kendaraan_keluar: totalKeluar,
                sedang_parkir: totalSedangParkir
            },
            aktivitas_terakhir: aktivitas
        }
    }
}

export default new menuMainOverviewService();