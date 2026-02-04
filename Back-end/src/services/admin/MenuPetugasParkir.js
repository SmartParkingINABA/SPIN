import bcrypt from "bcrypt";
import passwordValidator from "../../utils/PasswordValidator.js";
import statusCache from "../../cache/Status.js";
import menuPetugasParkirRepo from "../../repositories/admin/menuPetugasParkir.js";

class menuPetugasParkirService {
    static async getDataMenuPetugasParkir() {
        const [
            totalPetugas,
            petugasOnline,
            petugasAktif,
            daftarPetugasParkir
        ] = await Promise.all(
            [
                menuPetugasParkirRepo.totalPetugas(),
                statusCache.totalPetugasOnline(),
                menuPetugasParkirRepo.totalPetugasAktif(),
                menuPetugasParkirRepo.findAllPetugas()
            ]
        );

        const daftarPetugas = [];

        for (const p of daftarPetugasParkir) {

            const statusOnline = await statusCache.getStatus(p.id_users);

            daftarPetugas.push(
                {
                    id: p.id_users,
                    nama: p.petugasProfile?.nama_petugas || '-',
                    email: p.email,
                    no_telp: p.petugasProfile?.no_telp || '-',
                    shift: p.petugasProfile?.shift? `Shift ${p.petugasProfile.shift}` : '-',
                    area: p.petugasProfile?.lokasi_kerja? `Area ${p.petugasProfile.lokasi_kerja}` : '-',
                    status: p.status,
                    online: !!statusOnline,
                    lastSeen: statusOnline?.lastSeen || null
                }
            );
        }
        return {
            statistik: {
                totalPetugas,
                petugasOnline,
                petugasAktif
            },
            daftarPetugas
        };
    };

    static async tambahPetugasParkir(body) {
        const { nama_petugas, email, no_telp, shift, lokasi_kerja, password_users } = body;

        if (!passwordValidator(password_users)) {
            throw new Error('Password harus mengandung huruf besar, huruf kecil, angka, dan simbol');
        };

        const hashedPassword = await bcrypt.hash(password_users, 10);
        const newUser = await menuPetugasParkirRepo.createUser(
            {
                email,
                password_users: hashedPassword,
                role_id: 2,
                status: 'Aktif'
            }
        );
        await menuPetugasParkirRepo.createPetugasProfile(
            {
                user_id: newUser.id_users,
                nama_petugas,
                no_telp,
                shift,
                lokasi_kerja
            }
        );
        return { message: 'Petugas Parkir Berhasil Ditambahkan' };
    };

    static async editPetugasParkir(id, body) {
        const profile = await menuPetugasParkirRepo.findPetugasProfileByUserId(id);
        if (!profile) throw new Error('Petugas Parkir Tidak Ditemukan');
        
        await profile.update(body);
        return { message: 'Data Petugas Parkir Berhasil Diperbarui' };
    };

    static async statusPetugasParkir(id, statusBaru) {
        const user = await menuPetugasParkirRepo.findUserById(id);
        if (!user) throw new Error('Petugas Parkir Tidak Ditemukan');

        await user.update(
            {
                status: statusBaru
            }
        );
        return {
            message: `Status Petugas Parkir Berhasil Diubah Menjadi ${statusBaru}`
        }
    };

    static async deletePetugasParkir(id) {
        const user = await menuPetugasParkirRepo.findUserById(id);
        if (!user) throw new Error('Petugas Parkir Tidak Ditemukan');

        await menuPetugasParkirRepo.deletePetugasProfileById(id);
        await menuPetugasParkirRepo.deleteUserById(id)
        return { message: 'Petugas Parkir Berhasil Dihapus' };
    }
};

export default menuPetugasParkirService;