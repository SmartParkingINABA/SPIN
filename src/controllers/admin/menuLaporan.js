import menuLaporanService from "../../services/admin/menuLaporan.js";
import { parseDateToSQL, validateDateRange } from "../../utils/parseDateFormat.js";


const parseAndValidateDates = (req) => {
    const { tanggal_mulai, tanggal_akhir } = req.query;

    if (!tanggal_mulai || !tanggal_akhir) {
        throw new Error('Tanggal mulai dan tanggal akhir harus disediakan. Format: DD-MM-YYYY atau DD/MM/YYYY. Contoh: ?tanggal_mulai=01-01-2026&tanggal_akhir=31-01-2026');
    }

    
    const tanggalMulaiSQL = parseDateToSQL(tanggal_mulai);
    const tanggalAkhirSQL = parseDateToSQL(tanggal_akhir);
    
    
    validateDateRange(tanggalMulaiSQL, tanggalAkhirSQL);

    return { tanggalMulaiSQL, tanggalAkhirSQL };
};

class menuLaporanController {
    
    async getLaporanParkir(req, res) {
        try {
            const { tanggalMulaiSQL, tanggalAkhirSQL } = parseAndValidateDates(req);
            const data = await menuLaporanService.getLaporanParkir(tanggalMulaiSQL, tanggalAkhirSQL);
            res.json(data);

        } catch (error) {
            console.error('Error getLaporanParkir:', error);
            res.status(500).json({
                message: error.message || 'Gagal mengambil laporan parkir'
            });
        }
    }

    
    async exportLaporanParkirPDF(req, res) {
        try {
            const { tanggalMulaiSQL, tanggalAkhirSQL } = parseAndValidateDates(req);

            const pdfDoc = await menuLaporanService.exportLaporanParkirPDF(tanggalMulaiSQL, tanggalAkhirSQL);
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename="Laporan-Parkir.pdf"');
            pdfDoc.pipe(res);

        } catch (error) {
            console.error('Error exportLaporanParkirPDF:', error);
            res.status(400).json({
                message: error.message || 'Gagal export laporan parkir PDF'
            });
        }
    }

    async exportLaporanParkirExcel(req, res) {
        try {
            const { tanggalMulaiSQL, tanggalAkhirSQL } = parseAndValidateDates(req);

            const workbook = await menuLaporanService.exportLaporanParkirExcel(tanggalMulaiSQL, tanggalAkhirSQL);
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', 'attachment; filename="Laporan-Parkir.xlsx"');
            await workbook.xlsx.write(res);

        } catch (error) {
            console.error('Error exportLaporanParkirExcel:', error);
            res.status(400).json({
                message: error.message || 'Gagal export laporan parkir Excel'
            });
        }
    }

    
    async getLaporanPengendara(req, res) {
        try {
            const { tanggalMulaiSQL, tanggalAkhirSQL } = parseAndValidateDates(req);
            const data = await menuLaporanService.getLaporanPengendara(tanggalMulaiSQL, tanggalAkhirSQL);
            res.json(data);

        } catch (error) {
            console.error('Error getLaporanPengendara:', error);
            res.status(400).json({
                message: error.message || 'Gagal mengambil laporan pengendara'
            });
        }
    }

    async exportLaporanPengendaraPDF(req, res) {
        try {
            const { tanggalMulaiSQL, tanggalAkhirSQL } = parseAndValidateDates(req);

            const pdfDoc = await menuLaporanService.exportLaporanPengendaraPDF(tanggalMulaiSQL, tanggalAkhirSQL);
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename="Laporan-Pengendara.pdf"');
            pdfDoc.pipe(res);

        } catch (error) {
            console.error('Error exportLaporanPengendaraPDF:', error);
            res.status(400).json({
                message: error.message || 'Gagal export laporan pengendara PDF'
            });
        }
    }

    async exportLaporanPengendaraExcel(req, res) {
        try {
            const { tanggalMulaiSQL, tanggalAkhirSQL } = parseAndValidateDates(req);

            const workbook = await menuLaporanService.exportLaporanPengendaraExcel(tanggalMulaiSQL, tanggalAkhirSQL);
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', 'attachment; filename="Laporan-Pengendara.xlsx"');
            await workbook.xlsx.write(res);

        } catch (error) {
            console.error('Error exportLaporanPengendaraExcel:', error);
            res.status(400).json({
                message: error.message || 'Gagal export laporan pengendara Excel'
            });
        }
    }

    
    async getLaporanPetugas(req, res) {
        try {
            const { tanggalMulaiSQL, tanggalAkhirSQL } = parseAndValidateDates(req);
            const data = await menuLaporanService.getLaporanPetugas(tanggalMulaiSQL, tanggalAkhirSQL);
            res.json(data);

        } catch (error) {
            console.error('Error getLaporanPetugas:', error);
            res.status(400).json({
                message: error.message || 'Gagal mengambil laporan petugas'
            });
        }
    }

    async exportLaporanPetugasPDF(req, res) {
        try {
            const { tanggalMulaiSQL, tanggalAkhirSQL } = parseAndValidateDates(req);

            const pdfDoc = await menuLaporanService.exportLaporanPetugasPDF(tanggalMulaiSQL, tanggalAkhirSQL);
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename="Laporan-Petugas.pdf"');
            pdfDoc.pipe(res);

        } catch (error) {
            console.error('Error exportLaporanPetugasPDF:', error);
            res.status(400).json({
                message: error.message || 'Gagal export laporan petugas PDF'
            });
        }
    }

    async exportLaporanPetugasExcel(req, res) {
        try {
            const { tanggalMulaiSQL, tanggalAkhirSQL } = parseAndValidateDates(req);

            const workbook = await menuLaporanService.exportLaporanPetugasExcel(tanggalMulaiSQL, tanggalAkhirSQL);
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', 'attachment; filename="Laporan-Petugas.xlsx"');
            await workbook.xlsx.write(res);

        } catch (error) {
            console.error('Error exportLaporanPetugasExcel:', error);
            res.status(400).json({
                message: error.message || 'Gagal export laporan petugas Excel'
            });
        }
    }
}

export default new menuLaporanController();
