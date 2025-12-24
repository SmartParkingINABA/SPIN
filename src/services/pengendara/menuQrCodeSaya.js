import qrCode from "../../repositories/pengendara/qrCode.js";
import pengendaraProfile from "../../repositories/pengendara/pengendaraProfile.js";
import generateQrImage from "../../utils/generateQrImage.js";
import generateQrPdf from "../../utils/generateQrPdf.js";

class qrCodeService {
    async getDropdownKendaraan(userId) {
        const pengendara = await pengendaraProfile.findByUserId(userId);
        if (!pengendara) {
            throw new Error('Profil Pengendara Tidak Ditemukan')
        }
        return qrCode.findActiveByPengendara(pengendara.id_pengendara);
    }

    async getQrPreview(userId, kendaraanId) {
        const pengendara = await pengendaraProfile.findByUserId(userId);

        if (!pengendara) {
            throw new Error('Profil Pengendara Tidak Ditemukan');
        }
        const kendaraan = await qrCode.findByIdPengendara(kendaraanId, pengendara.id_pengendara);

        if (!kendaraan) {
            throw new Error(' Data Kendaraan Tidak Ditemukan Atau Tidak Aktif');
        }

        const qrImageBase64 = await generateQrImage(kendaraan.qr_code);

        return {
            kendaraan: {
                no_plat: kendaraan.no_plat,
                merk: kendaraan.merk,
                jenis: kendaraan.jenis
            },
            qr_image: qrImageBase64
        };
    }

    async getQrDownload(userId, kendaraanId) {
        const pengendara = await pengendaraProfile.findByUserId(userId);

        if (!pengendara) {
            throw new Error('Profil Pengendara Tidak Ditemukan')
        };

        const kendaraan = await qrCode.findByIdPengendara(kendaraanId, pengendara.id_pengendara);

        if (!kendaraan) {
            throw new Error('Data Kendaraan Tidak Ditemukan Atau Tidak Aktif')
        };
        return generateQrImage(kendaraan.qr_code, {raw: true});
    }

    async getQrPdf(userId, kendaraanId) {
        const pengendara = await pengendaraProfile.findByUserId(userId);
        if (!pengendara) {
            throw new Error('Profil Pengendara Tidak Ditemukan')
        };

        const kendaraan = await qrCode.findByIdPengendara(kendaraanId, pengendara.id_pengendara);

        if (!kendaraan) {
            throw new Error('Data Kendaraan Tidak Ditemukan Atau Tidak Aktif')
        };

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