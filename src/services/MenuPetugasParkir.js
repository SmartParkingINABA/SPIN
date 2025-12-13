import redis from "../configs/RedisConfig.js";
import { Users, petugasProfile } from "../models/Index.js";
import bcrypt from "bcrypt";
import passwordValidator from "../utils/PasswordValidator.js";
import statusService from "./Status.js";


class menuPetugasParkirService {
    static async getDataMenuPetugasParkir() {
        const totalPetugas = await Users.count(
            {
                where: { role_id: 2 }
            }
        );

        const petugasAktif = await Users.count(
            {
            where: { role_id: 2, status: 'aktif'},
            }
        );

        let petugasOnline = 0;
        const data = await Users.findAll(
            {
                where: { role_id: 2 },
                include: [
                    {
                        model: petugasProfile, as: 'petugasProfile',
                        attributes: [
                            'id_petugas',
                            'nama_petugas',
                            'no_telp',
                            'shift',
                            'lokasi_kerja'
                        ]
                    }
                ]
            }
        );

        const daftar = [];
        for (const p of data) {
            const statusPetugas = await statusService.getStatus(p.id_users)

            const isOnline = !!statusPetugas;
            if (isOnline) petugasOnline++;
            daftar.push(
                {
                    id: p.id_users,
                    nama: p.petugasProfile?.nama_petugas || '-',
                    email: p.email,
                    no_telp: p.petugasProfile?.no_telp || '-',
                    shift: p.petugasProfile?.shift? `Shift ${p.petugasProfile.shift}` : '-',
                    area: p.petugasProfile?.lokasi_kerja? `Area ${p.petugasProfile.lokasi_kerja}` : '-',
                    status: p.status,
                    lastSeen: statusPetugas?.lastSeen || null,
                }
            );
        }
        return {
            statistik: {
                totalPetugas,
                petugasOnline,
                petugasAktif
            },
            daftarPetugas: daftar
        };
    };

    static async tambahPetugasParkir(body) {
        const { nama_petugas, email, no_telp, shift, lokasi_kerja, password_users } = body;

        if (!passwordValidator(password_users)) {
            throw new Error('Password harus mengandung huruf besar, huruf kecil, angka, dan simbol');
        };

        const hashedPassword = await bcrypt.hash(password_users, 10);
        const newUser = await Users.create(
            {
                email,
                password_users: hashedPassword,
                role_id: 2,
                status: 'Aktif'
            }
        );
        await petugasProfile.create(
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
        const { nama_petugas, email, no_telp, shift, lokasi_kerja } = body;
        const profile = await petugasProfile.findOne(
            {
                where: { user_id: id },
            }
        );
        if (!profile) throw new Error('Petugas Parkir Tidak Ditemukan');
        
        await profile.update(
            {
                nama_petugas,
                no_telp,
                shift,
                lokasi_kerja
            }
        );
        return { message: 'Data Petugas Parkir Berhasil Diperbarui' };
    };

    static async statusPetugasParkir(id, statusBaru) {
        const user = await Users.findByPk(id);
        if (!user) throw new Error('Petugas Parkir Tidak Ditemukan');

        await user.update(
            {
                status: statusBaru
            }
        );

        const key = `petugas:presence:${id}`;

        if (statusBaru === 'Non-Aktif') {
            await redis.del(key);
        } else if (statusBaru === 'Aktif') {
            await redis.set(
                key,
                JSON.stringify(
                    { 
                        lastSeen: new Date(),
                        status: 'Online'
                    }
                ),
                'EX',
                3600
            )
        }
        return { message: `Status Petugas Parkir Berhasil Diubah Menjadi ${statusBaru}` };


    };

    static async deletePetugasParkir(id) {
        const user = await Users.findByPk(id);
        if (!user) throw new Error('Petugas Parkir Tidak Ditemukan');

        await petugasProfile.destroy(
            {
                where: { user_id: id }
            }
        );
        await Users.destroy(
            {
                where: { id_users: id }
            }
        );
        await redis.del(`petugas:presence:${id}`);
        return { message: 'Petugas Parkir Berhasil Dihapus' };
    }
};

export default menuPetugasParkirService;