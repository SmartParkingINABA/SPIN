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

    async getAdminNotifikasi({userId, limit, page}) {
        const offset = (page - 1) * limit;

        const { rows, count, unread } = await notifikasiRepo.findAdminByUser({
            userId,
            limit,
            offset
        });

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
            pagination: { page, limit, total: count }
        }
    }

    async getAllCombined({pengendaraId, userId, page, limit}) {
        const [scanQR, admin] = await Promise.all([
            this.getAll({pengendaraId, page, limit}),
            this.getAdminNotifikasi({userId, page, limit})
        ]);

        return {
            unread_count_all: scanQR.unread_count + admin.unread_count,
            notif_scan_qr: scanQR,
            notif_admin: admin
        }
    }

    async markAsRead({notifikasiId, pengendaraId, type, userId}) {

        if (type === 'scan') {
            const notif = await notifikasiRepo.findOneOwned(
                notifikasiId,
                pengendaraId
            );
            
            if (!notif) throw new Error('Notifikasi tidak ditemukan');
            if (notif.status_baca === 'Sudah') return;
            
            return notifikasiRepo.markAsRead(notifikasiId);
        }

        if (type === 'admin') {
            const notif = await notifikasiRepo.findAdminOwned(
                {
                    notifikasiUserId: notifikasiId,
                    userId
                }
            );

            if (!notif) throw new Error('Notifikasi tidak ditemukan');
            if (notif.status_baca === 'Sudah') return;

            return notifikasiRepo.markNotifAdminAsRead(notifikasiId)
        }
    }

    async markAllAsRead({pengendaraId, type, userId}) {
        if (type === 'scan') {
            return notifikasiRepo.markAllAsRead(pengendaraId);
        }

        if (type === 'admin') {
            return notifikasiRepo.markAllNotifAdminAsRead(userId);
        }
        throw new Error('Type notifikasi tidak valid');
    }
};

export default new notifikasiService();