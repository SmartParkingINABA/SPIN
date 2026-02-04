import notifikasiRepo from "../../repositories/petugas/notifikasiRepo.js";
import { formatDateTimeFormatter } from "../../utils/dateTimeFormatter.js";

class menuNotifikasiService {
    async getAll({userId, page, limit}) {
        const offset = (page -1) * limit;

        const { rows, count, unread } = await notifikasiRepo.findByPetugas(
            { userId, limit, offset }
        );

        return {
            unread_count: unread,
            data: rows.map(n => ({
                id: n.id_notifikasi_user,
                judul: n.notifikasi.judul,
                pesan: n.notifikasi.pesan,
                tipe: n.notifikasi.tipe,
                status_baca: n.status_baca,
                waktu: formatDateTimeFormatter(n.notifikasi.waktu_dibuat)
            })),
            pagination: {
                page,
                limit,
                total: count
            }
        };
    }

    async markAsRead({id, userId}) {
        const notif = await notifikasiRepo.findOneOwned({id, userId});

        if (!notif) {
            throw new Error('Notifikasi tidak ditemukan');
        }

        if (notif.status_baca === 'Sudah') return;

        await notifikasiRepo.markAsRead(id);
    }

    async markAllAsRead(userId) {
        await notifikasiRepo.markAllAsRead(userId)
    }
};

export default new menuNotifikasiService();