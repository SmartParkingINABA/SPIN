import kendaraanRepo from "../../repositories/petugas/kendaraanRepo.js";
import kendaraanMasukRepo from "../../repositories/petugas/kendaraanMasukRepo.js";
import kendaraanKeluarRepo from "../../repositories/petugas/kendaraanKeluarRepo.js";
import notifikasiRepo from "../../repositories/petugas/notifikasiRepo.js";
import formatDateDDMMYYYY from "../../utils/dateFormatter.js";
import formatDateTimeFormatter from "../../utils/dateTimeFormatter.js";
import sequelize from "../../configs/DBConfig.js";


class menuScanQrCodeService {
    async scan(qrCode) {
        const kendaraan = await kendaraanRepo.findByQrCode(qrCode);

        if (!kendaraan) {
            throw new Error('QR Code Tidak Valid Atau Kendaraan Tidak Aktif');
        }

        if (!kendaraan.pemilik) {
            throw new Error('Data Pengendara Tidak Lengkap')
        }
        
        const activeParkir = await kendaraanMasukRepo.findActive(kendaraan.id_kendaraan);

        return {
            status: kendaraan.pemilik.status,
            qr_code: kendaraan.qr_code,
            no_plat: kendaraan.no_plat,
            nama_pengendara: kendaraan.pemilik.nama_pengendara || '-',
            alamat: kendaraan.pemilik.alamat || '-',
            merk: kendaraan.merk || '-',
            jenis: kendaraan.jenis || '-',
            terdaftar_sejak: formatDateDDMMYYYY(kendaraan.createdAt),
            status_parkir: activeParkir ? 'Sedang Parkir' : 'Di Luar Parkir'
        };
        
    }

    async konfirmasiMasukByQR(qrCode, petugasId) {
        const transaction = await sequelize.transaction();
        try {
            const kendaraan = await kendaraanRepo.findByQrCode(qrCode);

            if (!kendaraan) {
                throw new Error('QR Code Tidak Valid')
            }

            const kendaraanId = kendaraan.id_kendaraan;

            const active = await kendaraanMasukRepo.findActive(kendaraanId, transaction);

            if (active) {
                throw new Error('Kendaraan Sudah Berada Diarea Parkir');
            }

            await kendaraanMasukRepo.create({
                kendaraan_id: kendaraanId,
                petugas_id: petugasId
            }, transaction);

            

            await notifikasiRepo.create({
                kendaraan_id: kendaraanId,
                judul: 'Kendaraan Masuk',
                pesan: 'Kendaraan Anda Berhasil Masuk Ke Area Parkir',
                jenis: 'Masuk'
            }, transaction);

            await transaction.commit();

            return {
                judul: 'Kendaraan Telah Berhasil Dicatat MASUK',
                waktu: formatDateTimeFormatter(),
                kendaraan: {
                    no_plat: kendaraan.no_plat,
                    nama_pengendara: kendaraan.pemilik?.nama_pengendara || '-',
                    no_telp: kendaraan.pemilik?.no_telp || '-',
                    alamat: kendaraan.pemilik?.alamat || '-'
                },
            }

        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }

    async konfirmasiKeluarByQR(qrCode, petugasId) {
        const transaction = await sequelize.transaction();

        try {
            const kendaraan = await kendaraanRepo.findByQrCode(qrCode, transaction);

            if (!kendaraan) {
                throw new Error('QR Code Tidak Valid');
            }

            const kendaraanId = kendaraan.id_kendaraan;

            const active = await kendaraanMasukRepo.findActive(kendaraanId, transaction);

            if (!active) {
                throw new Error('Kendaraan Belum Memasuki Area Parkir')
            }

            await kendaraanMasukRepo.finish(active.id_kendaraan_masuk, transaction);

            await kendaraanKeluarRepo.create({
                kendaraan_masuk_id: active.id_kendaraan_masuk,
                kendaraan_id: kendaraanId,
                petugas_id: petugasId
            }, transaction);


            await notifikasiRepo.create({
                kendaraan_id: kendaraanId,
                judul: 'Kendaraan Keluar',
                pesan: 'Kendaraan Anda Berhasil Keluar Dari Area Parkir',
                jenis: 'Keluar'
            }, transaction);

            await transaction.commit();
            return {
                judul: 'Kendaraan Telah Berhasil Dicatat KELUAR',
                waktu: formatDateTimeFormatter(),
                kendaraan: {
                    no_plat: kendaraan.no_plat,
                    nama_pengendara: kendaraan.pemilik?.nama_pengendara || '-',
                    no_telp: kendaraan.pemilik?.no_telp || '-',
                    alamat: kendaraan.pemilik?.alamat || '-'
                },
            }


        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }
};

export default new menuScanQrCodeService();