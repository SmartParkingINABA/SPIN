import sequelize from "../../configs/DBConfig.js";
import profilRepo from "../../repositories/admin/profilRepo.js";
import { hashPassword, comparePassword } from "../../utils/password.js";


class menuPengaturanService {
    async getProfile(userId) {
        const data = await profilRepo.getProfile(userId);

        if (!data) {
            throw new Error('Gagal mengambil data profil');
        }

        return {
            profil: data.profil
        }
    }

    async updateProfile(userId, payload) {
        const transaction = await sequelize.transaction();

        try {
            await profilRepo.updateProfile(userId, payload, transaction);
            await transaction.commit();
            return { message: 'Data profil berhasil diperbarui' }
        } catch (error) {
            await transaction.rollback();
            console.error(error?.original)
            throw error;
        }
    }

    async changePassword(userId, oldPassword, newPassword) {
        const user = await profilRepo.getUserPassword(userId);
        const valid = await comparePassword(oldPassword, user.password_users);

        if (!valid) throw new Error('Password yang di masukkan salah');

        const transaction = await sequelize.transaction();

        try {
            const hashed = await hashPassword(newPassword);
            await profilRepo.updatePassword(userId, hashed, transaction);
            await transaction.commit();
            return { message: 'Password berhasil diubah' }
        } catch (error) {
            await transaction.rollback();
            console.error(error?.original)
            throw error;
        }
    }
}


export default new menuPengaturanService();