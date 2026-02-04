import menuQrCodeSaya from "../../services/pengendara/menuQrCodeSaya.js";

class qrCodeController {

    async preview(req, res, next) {
        try {
            const userId = req.user.id_users;
            const kendaraanId = req.query.kendaraan_id || null;
            const result = await menuQrCodeSaya.previewQR(userId, kendaraanId);
            res.json(result);
        } catch (err) {
            throw new Error('')
        }
    }

    async download(req, res, next) {
        try {
            const userId = req.user.id_users;
            const kendaraanId = req.query.kendaraan_id;

            if (!kendaraanId) {
                throw new Error('Kendaraan Id Tidak Ditemukan')
            }

            const qrBuffer = await menuQrCodeSaya.downloadQRPng(userId, kendaraanId);
            res.setHeader('Content-type', 'img/png');
            res.setHeader('Content-Disposition', 'attachment; filename="QR-Code-SPIN.png"');
            res.send(qrBuffer)
        } catch (err) {
            next(err)
        }
    }

    async printPDF(req, res, next) {
        try {
            const userId = req.user.id_users;
            const kendaraanId = req.query.kendaraan_id;

            if (!kendaraanId) {
                throw new Error('Kendaraan Id Tidak Ditemukan')
            }

            const pdfDoc = await menuQrCodeSaya.printQRPdf(userId, kendaraanId);
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename="QR-Code-SPIN.pdf"');
            pdfDoc.pipe(res)
        } catch (err) {
            next(err)
        }
    }
};




export default new qrCodeController();