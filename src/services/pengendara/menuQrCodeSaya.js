import qrCode from "../../repositories/pengendara/qrCode.js";
import pengendaraProfile from "../../repositories/pengendara/pengendaraProfile.js";
import generateQrImage from "../../utils/generateQrImage.js";
import generateQrPdf from "../../utils/generateQrPdf.js";

class qrCodeService {

    async previewQR(userId, kendaraanId = null ) {
        const pengendara  = await pengendaraProfile.findByUserId(userId);

        if (!pengendara) {
            throw new Error('Profil Pengendara Tidak Ditemukan');
        }

        const kendaraanList = await qrCode.findActiveByPengendara(pengendara.id_pengendara);

        if (!kendaraanList.length) {
            return { kendaraan_list: [], selected: null }
        }

        let selected = null;

        if (kendaraanId) {
            const kendaraan = kendaraanList.find(
                k => k.id_kendaraan == kendaraanId
            );

            if (!kendaraan) {
                throw new Error('Data Kendaraan Tidak Ditemukan')
            }
            const qrImageBase64 = await generateQrImage(kendaraan.qr_code);

            selected = {
                id: kendaraan.id_kendaraan,
                no_plat: kendaraan.no_plat,
                merk: kendaraan.merk,
                qr_image: qrImageBase64
            };
        }

        return {
            kendaraan_list: kendaraanList.map(k => ({
                id: k.id_kendaraan,
                no_plat: k.no_plat,
                merk: k.merk
            })),
            selected
        };
    }

    async downloadQRPng(userId, kendaraanId) {
        const pengendara = await pengendaraProfile.findByUserId(userId);
        const kendaraan = await qrCode.findByIdPengendara(kendaraanId, pengendara.id_pengendara);

        if (!kendaraan) {
            throw new Error('Data Kendaraan Tidak Ditemukan')
        }

        return generateQrImage(kendaraan.qr_code, {raw: true});
    }

    async printQRPdf(userId, kendaraanId) {
        const pengendara = await pengendaraProfile.findByUserId(userId);
        const kendaraan = await qrCode.findByIdPengendara(kendaraanId, pengendara.id_pengendara);

        if (!kendaraan) {
            throw new Error('Data Kendaraan Tidak Ditemukan')
        }

        return generateQrPdf({
            qrData: kendaraan.qr_code,
            kendaraan: {
                no_plat: kendaraan.no_plat,
                merk: kendaraan.merk,
                jenis: kendaraan.jenis
            }
        })
    }
}

export default new qrCodeService();