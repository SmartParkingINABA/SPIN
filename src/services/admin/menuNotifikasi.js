import sequelize from "../../configs/DBConfig.js";
import notifikasiAdminRepo from "../../repositories/admin/notifikasiAdminRepo.js";
import notifikasiUserRepo from "../../repositories/admin/notifikasiUserRepo.js";
import userRepo from "../../repositories/admin/userRepo.js";
import { emitNotifToAllUser, emitNotifToPetugas, emitNotifToPengendara } from "../../socket/emitter/notifikasiEmitter.js";
import adminRepo from "../../repositories/admin/adminRepo.js";


class menuNotifikasiService {
    async createNotifikasi({userId, judul, pesan, tipe, target}) {
        const transaction = await sequelize.transaction();
        let notifikasiAdmin

        try {

            const adminProfile = await adminRepo.findUserById(userId);

            if (!adminProfile) {
                throw new Error('Data admin profile tidak ditemukan')
            }
            
            const userIds = await userRepo.findUserIdByTarget(target);
            const totalPenerima = userIds.length;

            notifikasiAdmin = await notifikasiAdminRepo.createNotifikasiAdmin({
                admin_id: adminProfile.id_admin,
                judul,
                pesan,
                tipe,
                target,
                total_penerima: totalPenerima
            }, transaction);
            

            if (totalPenerima > 0) {
                const notifikasiUsers = userIds.map(uid => ({
                    notifikasi_admin_id: notifikasiAdmin.id_notifikasi_admin,
                    user_id: uid,
                    status_baca: 'Belum'
                }));

                await notifikasiUserRepo.bulkCreatePenerima(notifikasiUsers, transaction);
            };
            
            await transaction.commit();

            const payload = {
                id: notifikasiAdmin.id_notifikasi_admin,
                data: {
                    judul,
                    pesan,
                    tipe,
                    waktu: new Date()
                }
            };
    
            switch (target) {
                case 'All':
                    emitNotifToAllUser(payload);
                    break;
                case 'Petugas':
                    emitNotifToPetugas(payload);
                    break;
                case 'Pengendara':
                    emitNotifToPengendara(payload);
                    break;
            };
    
            return { success: true, totalPenerima};

        } catch (error) {
            if (!transaction.finished) {
                await transaction.rollback();
            }
            throw error;
        } 
        
        
    }

    async getDashboardStats() {
        const [
            totalNotifikasi,
            totalTerkirimHariIni,
            totalPenerima
        ] = await Promise.all([
            notifikasiAdminRepo.countAll(),
            notifikasiAdminRepo.countToday(),
            userRepo.countActiveUsers()
        ]);

        return {
            totalNotifikasi,
            totalTerkirimHariIni,
            totalPenerima
        };
    }
};

export default new menuNotifikasiService();