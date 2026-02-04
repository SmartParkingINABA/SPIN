import menuScanQrCode from "../../services/petugas/menuScanQrCode.js";

class menuScanQrCodeController {
    async scan(req, res, next) {
        try {
            const { qr_code } = req.body;
            const data = await menuScanQrCode.scan(qr_code);
            res.json(data)
        } catch (err) {
            console.error(err),
            res.json(
                {
                    message: err.message
                }
            )
            
        }
    }

    async masuk(req, res, next) {
        try {
            const petugasId = req.user.petugasProfile.id_petugas;
            const { qr_code } = req.body;
            const result = await menuScanQrCode.konfirmasiMasukByQR(qr_code, petugasId);
            res.json(result)
        } catch (err) {
            console.error(err);
            res.status(409).json(
                {
                    message: err.message
                }
            )
        }
    }

    async keluar(req, res, next) {
        try {
            const petugasId = req.user.petugasProfile.id_petugas;
            const { qr_code } = req.body;
            const result = await menuScanQrCode.konfirmasiKeluarByQR(qr_code, petugasId);
            res.json(result);
        } catch (err) {
            console.error(err);
            res.status(409).json(
                {
                    message: err.message
                }
            )
        }
    }

};

export default new menuScanQrCodeController();