import PDFDocument from 'pdfkit';


const drawHeader = (doc, title, subtitle, tanggalMulai, tanggalAkhir) => {
    const pageWidth = doc.page.width;
    const margin = 30;
    const contentWidth = pageWidth - (margin * 2);
    
    
    doc.rect(0, 0, pageWidth, 120).fill('#2D3748');
    

    doc.fillColor('#FFFFFF').fontSize(9).font('Helvetica').text(subtitle, margin, 15, { width: contentWidth, align: 'center' });
    
    
    doc.fillColor('#FFFFFF').fontSize(22).font('Helvetica-Bold').text(title, margin, 35, { width: contentWidth, align: 'center' });
    
    
    doc.fillColor('#E2E8F0').fontSize(8).font('Helvetica').text(`Periode: ${tanggalMulai} s.d ${tanggalAkhir}`, margin, 70, { width: contentWidth, align: 'center' });
    
    
    doc.strokeColor('#FFFFFF').lineWidth(2);
    doc.moveTo(margin, 100).lineTo(pageWidth - margin, 100).stroke();
    
    doc.moveDown(6);
};


const drawSectionTitle = (doc, title) => {
    doc.fillColor('#2D3748').fontSize(11).font('Helvetica-Bold').text(title, 40, doc.y);
    doc.strokeColor('#4A5568').lineWidth(1.5);
    doc.moveTo(40, doc.y + 3).lineTo(555, doc.y + 3).stroke();
    doc.moveDown(0.8);
};


const drawTable = (doc, columns, rows, options = {}) => {
    const { x = 40, y = doc.y, width = 520, rowHeight = 25, fontSize = 8, headerFillColor = '#4A5568', headerTextColor = '#FFFFFF' } = options;
    
    const columnCount = columns.length;
    const columnWidth = width / columnCount;
    let currentY = y;

    
    doc.rect(x, currentY, width, rowHeight).fill(headerFillColor);
    
    columns.forEach((col, index) => {
        doc.fillColor(headerTextColor).fontSize(fontSize).font('Helvetica-Bold');
        const colX = x + (index * columnWidth);
        doc.text(col.label, colX + 5, currentY + 5, { width: columnWidth - 10, height: rowHeight - 10, align: col.align || 'left' });
    });
    
    currentY += rowHeight;
    let rowIndex = 0;

    
    rows.forEach((row, index) => {
        if (currentY > 750) {
            doc.addPage();
            currentY = 40;
            
            
            doc.rect(x, currentY, width, rowHeight).fill(headerFillColor);
            columns.forEach((col, colIndex) => {
                doc.fillColor(headerTextColor).fontSize(fontSize).font('Helvetica-Bold');
                const colX = x + (colIndex * columnWidth);
                doc.text(col.label, colX + 5, currentY + 5, { width: columnWidth - 10, height: rowHeight - 10, align: col.align || 'left' });
            });
            currentY += rowHeight;
        }

        
        if (index % 2 === 0) {
            doc.rect(x, currentY, width, rowHeight).fill('#F7FAFC');
        }

        doc.fillColor('#000000').fontSize(fontSize).font('Helvetica');
        columns.forEach((col, colIndex) => {
            const colX = x + (colIndex * columnWidth);
            const value = String(row[col.key] || '-').substring(0, col.maxLength || 30);
            doc.text(value, colX + 5, currentY + 5, { width: columnWidth - 10, height: rowHeight - 10, align: col.align || 'left' });
        });

        
        doc.strokeColor('#E2E8F0').lineWidth(0.5);
        doc.moveTo(x, currentY + rowHeight).lineTo(x + width, currentY + rowHeight).stroke();

        currentY += rowHeight;
        rowIndex++;
    });

    doc.strokeColor('#000000').lineWidth(1);
    doc.rect(x, y, width, currentY - y).stroke();

    return currentY + 10;
};

export const exportLaporanParkirPDF = async (data) => {
    const doc = new PDFDocument({
        size: 'A4',
        margin: 0
    });

    
    drawHeader(doc, 'LAPORAN PARKIR', 'Smart Parking INABA', data.tanggalMulai, data.tanggalAkhir);

    
    drawSectionTitle(doc, 'STATISTIK PARKIR');
    doc.moveDown(0.3);
    
    const statsX = 40;
    const statsBoxWidth = 150;
    const statBoxHeight = 55;
    const statsY = doc.y;
    
    
    doc.rect(statsX, statsY, statsBoxWidth, statBoxHeight).fill('#EDF2F7').stroke();
    doc.fillColor('#2D3748').fontSize(8).font('Helvetica').text('Total Masuk', statsX + 8, statsY + 8, { width: statsBoxWidth - 16 });
    doc.fillColor('#4A5568').fontSize(14).font('Helvetica-Bold').text(String(data.statistik.total_masuk), statsX + 8, statsY + 22, { width: statsBoxWidth - 16, align: 'center' });
    
    
    doc.rect(statsX + statsBoxWidth + 10, statsY, statsBoxWidth, statBoxHeight).fill('#EDF2F7').stroke();
    doc.fillColor('#2D3748').fontSize(8).font('Helvetica').text('Total Keluar', statsX + statsBoxWidth + 18, statsY + 8, { width: statsBoxWidth - 16 });
    doc.fillColor('#4A5568').fontSize(14).font('Helvetica-Bold').text(String(data.statistik.total_keluar), statsX + statsBoxWidth + 18, statsY + 22, { width: statsBoxWidth - 16, align: 'center' });
    

    doc.rect(statsX + (statsBoxWidth + 10) * 2, statsY, statsBoxWidth, statBoxHeight).fill('#EDF2F7').stroke();
    doc.fillColor('#2D3748').fontSize(8).font('Helvetica').text('Durasi Rata-rata', statsX + (statsBoxWidth + 10) * 2 + 8, statsY + 8, { width: statsBoxWidth - 16 });
    doc.fillColor('#4A5568').fontSize(13).font('Helvetica-Bold').text(String(data.statistik.durasi_rata_rata), statsX + (statsBoxWidth + 10) * 2 + 8, statsY + 22, { width: statsBoxWidth - 16, align: 'center' });
    
    doc.moveDown(4);

    
    drawSectionTitle(doc, 'RIWAYAT KENDARAAN MASUK');

    if (data.kendaraanMasuk && data.kendaraanMasuk.length > 0) {
        const masukColumns = [
            { label: 'Tanggal', key: 'tanggal', maxLength: 12 },
            { label: 'No. Plat', key: 'no_plat', maxLength: 10 },
            { label: 'Pengendara', key: 'nama_pengendara', maxLength: 50 },
            { label: 'Waktu Masuk', key: 'waktu_masuk', maxLength: 8 },
            { label: 'Petugas', key: 'nama_petugas', maxLength: 50 }
        ];
        
        doc.y = drawTable(doc, masukColumns, data.kendaraanMasuk, {
            fontSize: 7,
            rowHeight: 20,
            width: 525
        });
    } else {
        doc.fillColor('#666666').fontSize(9).font('Helvetica').text('Tidak ada data');
        doc.moveDown();
    }

    doc.moveDown(0.8);

    
    drawSectionTitle(doc, 'RIWAYAT KENDARAAN KELUAR');

    if (data.kendaraanKeluar && data.kendaraanKeluar.length > 0) {
        const keluarColumns = [
            { label: 'Tanggal', key: 'tanggal', maxLength: 12 },
            { label: 'No. Plat', key: 'no_plat', maxLength: 10 },
            { label: 'Pengendara', key: 'nama_pengendara', maxLength: 50 },
            { label: 'Masuk', key: 'waktu_masuk', maxLength: 8 },
            { label: 'Keluar', key: 'waktu_keluar', maxLength: 8 },
            { label: 'Durasi', key: 'durasi_parkir', maxLength: 10 }
        ];
        
        doc.y = drawTable(doc, keluarColumns, data.kendaraanKeluar, {
            fontSize: 7,
            rowHeight: 20,
            width: 525
        });
    } else {
        doc.fillColor('#666666').fontSize(9).font('Helvetica').text('Tidak ada data');
        doc.moveDown();
    }

    doc.moveDown(1);
    doc.fillColor('#666666').fontSize(7).font('Helvetica').text(
        `Dibuat pada: ${new Date().toLocaleString('id-ID')}`,
        { align: 'center' }
    );

    doc.end();
    return doc;
};

export const exportLaporanPengendaraPDF = async (data) => {
    const doc = new PDFDocument({
        size: 'A4',
        margin: 0
    });


    drawHeader(doc, 'LAPORAN PENGENDARA', 'Smart Parking INABA', data.tanggalMulai, data.tanggalAkhir);

    
    drawSectionTitle(doc, 'PENGENDARA YANG SERING PARKIR');

    if (data.pengendaraSeringParkir && data.pengendaraSeringParkir.length > 0) {
        const parkirColumns = [
            { label: 'Nama Pengendara', key: 'nama_pengendara', maxLength: 40 },
            { label: 'Total Parkir', key: 'total_parkir', maxLength: 10, align: 'center' }
        ];
        
        doc.y = drawTable(doc, parkirColumns, data.pengendaraSeringParkir, {
            fontSize: 8,
            rowHeight: 22,
            width: 525
        });
    } else {
        doc.fillColor('#666666').fontSize(9).font('Helvetica').text('Tidak ada data');
        doc.moveDown();
    }

    doc.moveDown(0.8);

    // Pengendara Baru
    drawSectionTitle(doc, 'PENGENDARA BARU TERDAFTAR');

    if (data.pengendaraBaruTerdaftar && data.pengendaraBaruTerdaftar.length > 0) {
        const baruColumns = [
            { label: 'Nama', key: 'nama_pengendara', maxLength: 30 },
            { label: 'Email', key: 'email', maxLength: 30 },
            { label: 'Tanggal Daftar', key: 'tanggal_daftar', maxLength: 12 }
        ];
        
        doc.y = drawTable(doc, baruColumns, data.pengendaraBaruTerdaftar, {
            fontSize: 8,
            rowHeight: 22,
            width: 525
        });
    } else {
        doc.fillColor('#666666').fontSize(9).font('Helvetica').text('Tidak ada data');
        doc.moveDown();
    }

    doc.moveDown(1);
    doc.fillColor('#666666').fontSize(7).font('Helvetica').text(
        `Dibuat pada: ${new Date().toLocaleString('id-ID')}`,
        { align: 'center' }
    );

    doc.end();
    return doc;
};

export const exportLaporanPetugasPDF = async (data) => {
    const doc = new PDFDocument({
        size: 'A4',
        margin: 0
    });

    
    drawHeader(doc, 'LAPORAN PETUGAS PARKIR', 'Smart Parking INABA', data.tanggalMulai, data.tanggalAkhir);

    
    drawSectionTitle(doc, 'AKTIVITAS PETUGAS');

    if (data.petugasAktifitas && data.petugasAktifitas.length > 0) {
        const petugasColumns = [
            { label: 'Nama Petugas', key: 'nama_petugas', maxLength: 35 },
            { label: 'Masuk', key: 'total_masuk', maxLength: 10, align: 'center' },
            { label: 'Keluar', key: 'total_keluar', maxLength: 10, align: 'center' },
            { label: 'Total Menangani Kendaraan', key: 'total_transaksi', maxLength: 10, align: 'center' }
        ];
        
        doc.y = drawTable(doc, petugasColumns, data.petugasAktifitas, {
            fontSize: 8,
            rowHeight: 22,
            width: 525
        });
    } else {
        doc.fillColor('#666666').fontSize(9).font('Helvetica').text('Tidak ada data');
        doc.moveDown();
    }

    doc.moveDown(1);
    doc.fillColor('#666666').fontSize(7).font('Helvetica').text(
        `Dibuat pada: ${new Date().toLocaleString('id-ID')}`,
        { align: 'center' }
    );

    doc.end();
    return doc;
};
