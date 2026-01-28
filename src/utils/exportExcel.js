import ExcelJS from 'exceljs';

export const exportLaporanParkirExcel = async (data) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Laporan Parkir');

    const headerRow = worksheet.addRow(['LAPORAN PARKIR']);
    headerRow.font = { bold: true, size: 14 };
    headerRow.alignment = { horizontal: 'center', vertical: 'center' };

    worksheet.addRow(['Smart Parking INABA']);
    worksheet.addRow([]);

    worksheet.addRow([`Periode: ${data.tanggalMulai} - ${data.tanggalAkhir}`]);
    worksheet.addRow([]);

    worksheet.addRow(['STATISTIK PARKIR']);
    worksheet.getCell('A' + worksheet.lastRow.number).font = { bold: true };
    
    worksheet.addRow(['Total Kendaraan Masuk', data.statistik.total_masuk]);
    worksheet.addRow(['Total Kendaraan Keluar', data.statistik.total_keluar]);
    worksheet.addRow(['Durasi Rata-rata Parkir', data.statistik.durasi_rata_rata]);
    worksheet.addRow([]);

    worksheet.addRow(['RIWAYAT KENDARAAN MASUK']);
    worksheet.getCell('A' + worksheet.lastRow.number).font = { bold: true };

    const masukHeaders = ['Tanggal', 'No. Plat', 'Pengendara', 'Waktu Masuk', 'Petugas'];
    const masukHeaderRow = worksheet.addRow(masukHeaders);
    masukHeaderRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    masukHeaderRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1F4E78' } };
    masukHeaderRow.alignment = { horizontal: 'center', vertical: 'center' };

    (data.kendaraanMasuk || []).forEach(item => {
        worksheet.addRow([
            item.tanggal || '-',
            item.no_plat || '-',
            item.nama_pengendara || '-',
            item.waktu_masuk || '-',
            item.nama_petugas || '-'
        ]);
    });

    worksheet.addRow([]);

    worksheet.addRow(['RIWAYAT KENDARAAN KELUAR']);
    worksheet.getCell('A' + worksheet.lastRow.number).font = { bold: true };

    const keluarHeaders = ['Tanggal', 'No. Plat', 'Pengendara', 'Waktu Masuk', 'Waktu Keluar', 'Durasi Parkir'];
    const keluarHeaderRow = worksheet.addRow(keluarHeaders);
    keluarHeaderRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    keluarHeaderRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1F4E78' } };

    (data.kendaraanKeluar || []).forEach(item => {
        worksheet.addRow([
            item.tanggal || '-',
            item.no_plat || '-',
            item.nama_pengendara || '-',
            item.waktu_masuk || '-',
            item.waktu_keluar || '-',
            item.durasi_parkir || '-'
        ]);
    });

    worksheet.columns = [
        { width: 15 },
        { width: 15 },
        { width: 20 },
        { width: 15 },
        { width: 15 }
    ];

    return workbook;
};

export const exportLaporanPengendaraExcel = async (data) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Laporan Pengendara');

    const headerRow = worksheet.addRow(['LAPORAN PENGENDARA']);
    headerRow.font = { bold: true, size: 14 };
    headerRow.alignment = { horizontal: 'center', vertical: 'center' };

    worksheet.addRow(['Smart Parking INABA']);
    worksheet.addRow([]);

    worksheet.addRow([`Periode: ${data.tanggalMulai} - ${data.tanggalAkhir}`]);
    worksheet.addRow([]);

    worksheet.addRow(['PENGENDARA YANG SERING PARKIR']);
    worksheet.getCell('A' + worksheet.lastRow.number).font = { bold: true };

    const freqHeaders = ['Nama Pengendara', 'Total Parkir'];
    const freqHeaderRow = worksheet.addRow(freqHeaders);
    freqHeaderRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    freqHeaderRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1F4E78' } };

    (data.pengendaraSeringParkir || []).forEach(item => {
        worksheet.addRow([
            item.nama_pengendara || '-',
            item.total_parkir || 0
        ]);
    });

    worksheet.addRow([]);

    worksheet.addRow(['PENGENDARA BARU TERDAFTAR']);
    worksheet.getCell('A' + worksheet.lastRow.number).font = { bold: true };

    const newHeaders = ['Nama', 'Email', 'Tanggal Daftar'];
    const newHeaderRow = worksheet.addRow(newHeaders);
    newHeaderRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    newHeaderRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1F4E78' } };

    (data.pengendaraBaruTerdaftar || []).forEach(item => {
        worksheet.addRow([
            item.nama_pengendara || '-',
            item.email || '-',
            item.tanggal_daftar || '-'
        ]);
    });

    worksheet.columns = [
        { width: 20 },
        { width: 20 },
        { width: 20 }
    ];

    return workbook;
};

export const exportLaporanPetugasExcel = async (data) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Laporan Petugas');

    const headerRow = worksheet.addRow(['LAPORAN PETUGAS PARKIR']);
    headerRow.font = { bold: true, size: 14 };
    headerRow.alignment = { horizontal: 'center', vertical: 'center' };

    worksheet.addRow(['Smart Parking INABA']);
    worksheet.addRow([]);

    worksheet.addRow([`Periode: ${data.tanggalMulai} - ${data.tanggalAkhir}`]);
    worksheet.addRow([]);

    worksheet.addRow(['AKTIVITAS PETUGAS']);
    worksheet.getCell('A' + worksheet.lastRow.number).font = { bold: true };

    const aktHeaders = ['Nama Petugas', 'Masuk', 'Keluar', 'Total Menangani Kendaraan'];
    const aktHeaderRow = worksheet.addRow(aktHeaders);
    aktHeaderRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    aktHeaderRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1F4E78' } };

    (data.petugasAktifitas || []).forEach(item => {
        worksheet.addRow([
            item.nama_petugas || '-',
            item.total_masuk || 0,
            item.total_keluar || 0,
            item.total_transaksi || 0
        ]);
    });

    worksheet.addRow([]);

    return workbook;
};
