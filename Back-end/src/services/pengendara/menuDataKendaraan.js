import kendaraanRepo from "../../repositories/pengendara/menuDataKendaraan.js";
import pengendaraProfile from "../../repositories/pengendara/pengendaraProfile.js";
import generateQrCode from "../../utils/generateQr.js";
import parseDateToSql from "../../utils/parseDateToSQL.js";
import { formatDateFormatter } from "../../utils/dateTimeFormatter.js";


class menuDataKendaraanService {
    async getMyKendaraan(userId) {
        const pengendara = await pengendaraProfile.findByUserId(userId);
        
        if (!pengendara) {
            throw new Error('Gagal Mengambil Data Kendaraan')
        }

        const kendaraanList = await kendaraanRepo.findAllByPengendara(pengendara.id_pengendara);

        return kendaraanList.map(k => {
            const item = k.get ? k.get({ plain: true }) : k;

            item.masa_berlaku = formatDateFormatter(item.masa_berlaku) ?? item.masa_berlaku;
            return item;
        })
    }

    async createKendaraan(userId, payload) {
        const pengendara = await pengendaraProfile.findByUserId(userId);
        const formatDate = parseDateToSql(payload.masa_berlaku);

        if (!pengendara) {
            throw new Error('Profil Pengendara Tidak Ditemukan')
        }

        const existing = await kendaraanRepo.findByPlatNomor(payload.no_plat);
        if (existing) {
            throw new Error('Plat Nomor Sudah Terdaftar!');
        }

        return kendaraanRepo.createData({
            pengendara_id: pengendara.id_pengendara,
            no_plat: payload.no_plat,
            merk: payload.merk,
            jenis: payload.jenis,
            warna: payload.warna,
            cc: payload.cc,
            tahun_keluaran: payload.tahun_keluaran,
            masa_berlaku: formatDate,
            qr_code: generateQrCode(),
            status: 'Aktif'
            
        });
        
    }

    async updateKendaraan(userId, kendaraanId, payload) {
        const pengendara = await pengendaraProfile.findByUserId(userId);
        if (!pengendara) {
            throw new Error('Profil Pengendara Tidak Ditemukan!')
        }

        const kendaraan = await kendaraanRepo.findByIdAndPengendara(kendaraanId, pengendara.id_pengendara)

        if (!kendaraan) {
            throw new Error('Akses Ditolak Atau Data Tidak Ditemukan!')
        }

        if (payload.no_plat && payload.no_plat !== kendaraan.no_plat) {
            const exist = await kendaraanRepo.findByPlatNomor(payload.no_plat);

            if (exist) {
                throw new Error('Plat Nomor Sudah Digunakan');
            }
        }
        await kendaraanRepo.updateDataKendaraan(kendaraanId, payload);
        return true;
    }

    async deleteKendaraan(userId, kendaraanId) {
        const pengendara = await pengendaraProfile.findByUserId(userId);
        if (!pengendara) {
            throw new Error('Profil Pengendara Tidak Ditemukan!')
        }
        const kendaraan = await kendaraanRepo.findByIdAndPengendara(kendaraanId, pengendara.id_pengendara);

        if (!kendaraan) {
            throw new Error('Akses Ditolak!')
        }
        
        await kendaraanRepo.deleteById(kendaraanId)

        return true;
    }


};

export default new menuDataKendaraanService();