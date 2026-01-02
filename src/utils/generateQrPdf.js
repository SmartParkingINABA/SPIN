import PDFDocument from 'pdfkit';
import generateQrImage from './generateQrImage.js';

const generateQrPdf = async ({qrData, kendaraan}) => {
    const doc = new PDFDocument({
        size: 'A4',
        margin: 50
    });

    const qrSize = 250;
    const pageWidth = doc.page.width;

    const qrX = ( pageWidth - qrSize ) / 2;

    const qrBuffer = await generateQrImage(qrData, {raw: true});

    doc
    .fontSize(18)
    .font('Helvetica-Bold')
    .text('QR Code SPIN Kendaraan Parkir Anda', {
        align: 'center'
    });

    doc.moveDown(1.5);
    doc
    .fontSize(12)
    .font('Helvetica')
    .text(`Nomor Polisi : ${kendaraan.no_plat}`)
    .text(`Merk : ${kendaraan.merk}`)
    .text(`Jenis : ${kendaraan.jenis}`);

    doc.moveDown(2)

    const qrY = doc.y;

    doc.image(qrBuffer, qrX, qrY, {
        width: qrSize,
        height: qrSize
    });

    doc.moveDown(20);

    doc
    .fontSize(10)
    .fillColor('black')
    .text('Gunakan QR Code SPIN ini untuk akses masuk dan keluar area parkir.',
        {align: 'center'}
    );

    doc.end();
    return doc;
};

export default generateQrPdf;