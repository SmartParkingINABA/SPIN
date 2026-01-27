import pengendaraRepo from "../../repositories/admin/menuPengendara.js";
import formatDateDDMMYYYY from "../../utils/dateFormatter.js";
import { formatDateTimeFormatter } from "../../utils/dateTimeFormatter.js";

class pengendaraService {
    static async getListPengendara(query) {
        const data = await pengendaraRepo.findAll({
            search: query.search || null
        });

        return data.map(p => ({
            id: p.id_users,
            nama: p.pengendaraProfile?.nama_pengendara || '-',
            email: p.email,
            no_telp: p.pengendaraProfile?.no_telp || '-',
            jumlah_kendaraan: Number(p.getDataValue('jumlah_kendaraan')),
            terdaftar: formatDateDDMMYYYY(p.tanggal_daftar),
            status: p.status
        }));
    }

    static async getDetailPengendara(id) {
        const user = await pengendaraRepo.findUserById(id);
        if (!user) throw new Error('Pengendara Tidak Ditemukan!');

        const riwayatParkir = await pengendaraRepo.findRiwayatParkir(id);

    
        const kendaraanTerdaftar = (user.pengendaraProfile?.kendaraans || []).map(k => ({
            no_plat: k.no_plat,
            merk: k.merk || '-',
            jenis: k.jenis || '-'
        }));

        
        const riwayatFormatted = [];
        
        
        if (riwayatParkir.masuk && riwayatParkir.masuk.length > 0) {
            riwayatParkir.masuk.forEach(item => {
                riwayatFormatted.push({
                    no_plat: item.kendaraan?.no_plat || '-',
                    waktu_masuk: formatDateTimeFormatter(item.waktu_masuk),
                    waktu_keluar: '-'
                });
            });
        }

        
        if (riwayatParkir.keluar && riwayatParkir.keluar.length > 0) {
            riwayatParkir.keluar.forEach(item => {
                const existingIndex = riwayatFormatted.findIndex(
                    r => r.no_plat === item.kendaraanKeluars?.no_plat
                );
                
                if (existingIndex !== -1) {
                    riwayatFormatted[existingIndex].waktu_keluar = formatDateTimeFormatter(item.waktu_keluar);
                } else {
                    riwayatFormatted.push({
                        no_plat: item.kendaraanKeluars?.no_plat || '-',
                        waktu_masuk: '-',
                        waktu_keluar: formatDateTimeFormatter(item.waktu_keluar)
                    });
                }
            });
        }

        
        riwayatFormatted.sort((a, b) => {
            const timeA = new Date(a.waktu_keluar !== '-' ? a.waktu_keluar : a.waktu_masuk);
            const timeB = new Date(b.waktu_keluar !== '-' ? b.waktu_keluar : b.waktu_masuk);
            return timeB - timeA;
        });

        return {
            profil: {
                nama: user.pengendaraProfile.nama_pengendara || '-',
                email: user.email,
                no_telp: user.pengendaraProfile.no_telp || '-',
                alamat: user.pengendaraProfile.alamat || '-',
                status: user.status
            },
            kendaraanTerdaftar: kendaraanTerdaftar,
            riwayatParkir: riwayatFormatted
        };
    }

    static async updateStatus(id, status) {
        await pengendaraRepo.updateStatus(id, status);
        return { message: `Status Pengendara Berhasil Diubah Menjadi ${status}`};
    }
};

export default pengendaraService;