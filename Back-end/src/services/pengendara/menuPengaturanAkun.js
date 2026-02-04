import sequelize from "../../configs/DBConfig.js";
import menuPengaturanAkunRepo from "../../repositories/pengendara/menuPengaturanAkunRepo.js";
import { hashPassword, comparePassword } from "../../utils/password.js";
import formatDateDDMMYYYY from "../../utils/dateFormatter.js";

class menuPengaturanAkunService {
    async getProfile(userId) {
        const data = await menuPengaturanAkunRepo.getProfile(userId)
        
        if (!data) {
            throw new Error('Gagal Mengambil Data Profil')
        }

        return {
            profil: data.profil,
            statistik: {
                total_kendaraan: data.statistik.totalKendaraan,
                total_parkir: data.statistik.totalParkir,
                bergabung_sejak: formatDateDDMMYYYY(data.statistik.tanggalDaftar)
            }
        };
    }   


    async updateProfile(userId, payload) {
        const transaction = await sequelize.transaction();

        try {
            await menuPengaturanAkunRepo.updateProfile(userId, payload, transaction);
            await transaction.commit();
            return { message: 'Data Profil Berhasil Diperbarui' };
        } catch (error) {
            await transaction.rollback();
            throw error
        }
    }

    async uploadPhoto(userId, file) {
        if (!file) throw Error('File Foto Wajib Diupload');

        const transaction = await sequelize.transaction();
        try {
            const path = `/uploads/profile/${file.filename}`;

            await menuPengaturanAkunRepo.updatePhoto(userId, path, transaction);
            
            await transaction.commit();
            return {
                message: 'Foto Profil Berhasil Diperbarui',
                foto_profil: path
            };
        } catch (error) {
            await transaction.rollback();
            throw error
        }
    }

    async changePassword(userId, oldPassword, newPassword) {
        const user = await menuPengaturanAkunRepo.getUserPassword(userId);
        const valid = await comparePassword(oldPassword, user.password_users);

        if (!valid) throw new Error('Password Yang Dimasukkan Salah');

        const transaction = await sequelize.transaction();
        try {
            const hashed = await hashPassword(newPassword);
            await menuPengaturanAkunRepo.updatePassword(userId, hashed, transaction);
            await transaction.commit();
            return { message: 'Password Berhasil Diubah' }
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }
};

export default new menuPengaturanAkunService();