import menuQrCodeSaya from "../../services/pengendara/menuQrCodeSaya.js";

class qrCodeController {
    async listDropDown(req, res, next) {
        try {
            const userId = req.user.id_users;
            const data = await menuQrCodeSaya.getDropdownKendaraan(userId);
            res.json(data);
        } catch (err) {
            next(err)
        }
    }

    async preview(req, res, next) {
        try {
            const userId = req.user.id_users;
            const kendaraanId = req.params.id;
            const result = await menuQrCodeSaya.getQrPreview(userId, kendaraanId);
            res.json(result);
        } catch (err) {
            throw new Error('')
        }
    }

    async download(req, res, next) {
        try {
            const userId = req.user.id_users;
            const kendaraanId = req.params.id;
            const qrBuffer = await menuQrCodeSaya.getQrDownload(userId, kendaraanId);
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
            const kendaraanId = req.params.id;
            const pdfDoc = await menuQrCodeSaya.getQrPdf(userId, kendaraanId);
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename="QR-Code-SPIN.pdf"');
            pdfDoc.pipe(res)
        } catch (err) {
            next(err)
        }
    }
};




export default new qrCodeController();