import profilRepo from "../../repositories/petugas/profilRepo.js";
import formatDateDDMMYYYY from "../../utils/dateFormatter.js";

class menuProfilPetugasService {
    async getProfilePetugas(userId) {
        const profile = await profilRepo.findPetugasProfile(userId);

        if (!profile || !profile.petugasProfile) {
            throw new Error('Data profil tidak ditemukan');
        };

        const petugasId = profile.petugasProfile.id_petugas;

        if (!petugasId) {
            throw new Error('Id petugas tidak valid')
        };

        const kendaraanMasuk = await profilRepo.countKendaraanMasuk(petugasId);
        const kendaraanKeluar = await profilRepo.countKendaraanKeluar(petugasId);

        return {
            informasi_pribadi: {
                nama_petugas: profile.petugasProfile.nama_petugas,
                status_akun: profile.status,
                tanggal_daftar: formatDateDDMMYYYY(profile.tanggal_daftar),
                no_telp: profile.petugasProfile.no_telp,
                email: profile.email
            },
            statistik_hari_ini: {
                kendaraan_masuk: kendaraanMasuk,
                kendaraan_keluar: kendaraanKeluar
            },
            informasi_kerja: {
                shift: profile.petugasProfile.shift,
                lokasi_kerja: profile.petugasProfile.lokasi_kerja? `Gerbang Utama - Area ${profile.petugasProfile.lokasi_kerja}` : '-'
            }
        }
    }

    async updateProfilPetugas(userId, payload) {
        const allowedPayload = {
            nama_petugas: payload.nama_petugas,
            no_telp: payload.no_telp
        }
        await profilRepo.updateProfile(userId, allowedPayload);
    }
}

export default new menuProfilPetugasService();