import laporanParkirRepo from "../../repositories/admin/laporanParkir.js";
import laporanPengendaraRepo from "../../repositories/admin/laporanPengendara.js";
import laporanPetugasRepo from "../../repositories/admin/laporanPetugas.js";
import { formatDateFormatter } from "../../utils/dateTimeFormatter.js";
import { formatDuration } from "../../utils/dateDuration.js";
import { formatSQLDate } from "../../utils/parseDateFormat.js";
import { exportLaporanParkirPDF, exportLaporanPengendaraPDF, exportLaporanPetugasPDF } from "../../utils/exportPDF.js";
import { exportLaporanParkirExcel, exportLaporanPengendaraExcel, exportLaporanPetugasExcel } from "../../utils/exportExcel.js";

class menuLaporanService {
    
    async getLaporanParkir(tanggalMulai, tanggalAkhir) {
        try {
            
            if (!tanggalMulai || !tanggalAkhir) {
                throw new Error('Tanggal mulai dan tanggal akhir harus disediakan');
            }

            const [statistik, kendaraanMasuk, kendaraanKeluar] = await Promise.all([
                laporanParkirRepo.getStatistikParkir(tanggalMulai, tanggalAkhir),
                laporanParkirRepo.getKendaraanMasuk(tanggalMulai, tanggalAkhir),
                laporanParkirRepo.getKendaraanKeluar(tanggalMulai, tanggalAkhir)
            ]);

            return {
                tanggalMulai: formatSQLDate(tanggalMulai),
                tanggalAkhir: formatSQLDate(tanggalAkhir),
                statistik: {
                    total_masuk: statistik?.total_masuk || 0,
                    total_keluar: statistik?.total_keluar || 0,
                    durasi_rata_rata: formatDuration(parseInt(statistik?.durasi_rata_rata || 0))
                },
                kendaraanMasuk: (kendaraanMasuk || []).map(item => ({
                    ...item,
                    tanggal: formatSQLDate(item.tanggal)
                })),
                kendaraanKeluar: (kendaraanKeluar || []).map(item => ({
                    ...item,
                    tanggal: formatSQLDate(item.tanggal)
                }))
            };
        } catch (error) {
            throw new Error(`Gagal mengambil laporan parkir: ${error.message}`);
        }
    }

    async exportLaporanParkirPDF(tanggalMulai, tanggalAkhir) {
        try {
            const data = await this.getLaporanParkir(tanggalMulai, tanggalAkhir);
            return await exportLaporanParkirPDF(data);
        } catch (error) {
            throw new Error(`Gagal export PDF: ${error.message}`);
        }
    }

    async exportLaporanParkirExcel(tanggalMulai, tanggalAkhir) {
        try {
            const data = await this.getLaporanParkir(tanggalMulai, tanggalAkhir);
            return await exportLaporanParkirExcel(data);
        } catch (error) {
            throw new Error(`Gagal export Excel: ${error.message}`);
        }
    }

    async getLaporanPengendara(tanggalMulai, tanggalAkhir) {
        try {
            const [pengendaraSeringParkir, distribusiParkir, pengendaraBaruTerdaftar] = await Promise.all([
                laporanPengendaraRepo.getPengendaraSeringParkir(tanggalMulai, tanggalAkhir),
                laporanPengendaraRepo.getDistribusiParkirPengendara(tanggalMulai, tanggalAkhir),
                laporanPengendaraRepo.getPengendaraBaruTerdaftar(10)
            ]);

            return {
                tanggalMulai: formatSQLDate(tanggalMulai),
                tanggalAkhir: formatSQLDate(tanggalAkhir),
                pengendaraSeringParkir: pengendaraSeringParkir || [],
                distribusiParkir: distribusiParkir || [],
                pengendaraBaruTerdaftar: pengendaraBaruTerdaftar.map(item => ({
                    ...item,
                    tanggal_daftar: formatDateFormatter(item.tanggal_daftar)
                })) || []
            };
        } catch (error) {
            throw new Error(`Gagal mengambil laporan pengendara: ${error.message}`);
        }
    }

    async exportLaporanPengendaraPDF(tanggalMulai, tanggalAkhir) {
        try {
            const data = await this.getLaporanPengendara(tanggalMulai, tanggalAkhir);
            return await exportLaporanPengendaraPDF(data);
        } catch (error) {
            throw new Error(`Gagal export PDF: ${error.message}`);
        }
    }

    async exportLaporanPengendaraExcel(tanggalMulai, tanggalAkhir) {
        try {
            const data = await this.getLaporanPengendara(tanggalMulai, tanggalAkhir);
            return await exportLaporanPengendaraExcel(data);
        } catch (error) {
            throw new Error(`Gagal export Excel: ${error.message}`);
        }
    }

    async getLaporanPetugas(tanggalMulai, tanggalAkhir) {
        try {
            const [petugasAktifitas, petugasPalingAktif] = await Promise.all([
                laporanPetugasRepo.getPetugasAktifitas(tanggalMulai, tanggalAkhir),
                laporanPetugasRepo.getPetugasPalingAktif(tanggalMulai, tanggalAkhir)
            ]);

            return {
                tanggalMulai: formatSQLDate(tanggalMulai),
                tanggalAkhir: formatSQLDate(tanggalAkhir),
                petugasAktifitas: petugasAktifitas || [],
                petugasPalingAktif: petugasPalingAktif || []
            };
        } catch (error) {
            throw new Error(`Gagal mengambil laporan petugas: ${error.message}`);
        }
    }

    async exportLaporanPetugasPDF(tanggalMulai, tanggalAkhir) {
        try {
            const data = await this.getLaporanPetugas(tanggalMulai, tanggalAkhir);
            return await exportLaporanPetugasPDF(data);
        } catch (error) {
            throw new Error(`Gagal export PDF: ${error.message}`);
        }
    }

    async exportLaporanPetugasExcel(tanggalMulai, tanggalAkhir) {
        try {
            const data = await this.getLaporanPetugas(tanggalMulai, tanggalAkhir);
            return await exportLaporanPetugasExcel(data);
        } catch (error) {
            throw new Error(`Gagal export Excel: ${error.message}`);
        }
    }
};

export default new menuLaporanService();
