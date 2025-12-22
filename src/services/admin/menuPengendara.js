import pengendaraRepo from "../../repositories/admin/menuPengendara.js";

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
            tanggal_daftar: p.tanggal_daftar,
            status: p.status
        }));
    }

    static async getDetailPengendara(id) {
        const user = await pengendaraRepo.findUserById(id);
        if (!user) throw new Error('Pengendara Tidak Ditemukan!');

        return {
            profil: {
                nama: user.pengendaraProfile.nama_pengendara || '-',
                email: user.email,
                no_telp: user.pengendaraProfile.no_telp || '-',
                alamat: user.pengendaraProfile.alamat || '-',
                status: user.status
            },
            kendaraan: user.kendaraans
        };
    }

    static async updateStatus(id, status) {
        await pengendaraRepo.updateStatus(id, status);
        return { message: `Status Pengendara Berhasil Diubah Menjadi ${status}`};
    }
};

export default pengendaraService;