import notifikasiRepo from "../../repositories/pengendara/notifikasiRepo.js";
import { formatDateTimeFormatter } from "../../utils/dateTimeFormatter.js";

class notifikasiService {
    async getAll({pengendaraId, page, limit}) {
        const offset = (page - 1) * limit;

        const {row, count, unread} = await notifikasiRepo.findByPengendara({
            pengendaraId,
            limit,
            offset
        });

        return {
            unread_count: unread,
            data: row.map(n => ({
                id: n.id_notifikasi,
                judul: n.judul,
                pesan: n.pesan,
                jenis: n.jenis,
                status_baca: n.status_baca,
                waktu: formatDateTimeFormatter(n.waktu_dibuat)
            })),
            pagination: {
                page,
                limit,
                total: count
            }
        }
    }

    async markAsRead({notifikasiId, pengendaraId}) {
        const notif = await notifikasiRepo.findOneOwned(
            notifikasiId,
            pengendaraId
        );

        if (!notif) {
            throw new Error('Notifikasi tidak ditemukan')
        }

        if (notif.status_baca === 'Sudah') return;

        await notifikasiRepo.markAsRead(notifikasiId);
    }

    async markAllAsRead(pengendaraId) {
        await notifikasiRepo.markAllAsRead(pengendaraId);
    }
};

export default new notifikasiService();