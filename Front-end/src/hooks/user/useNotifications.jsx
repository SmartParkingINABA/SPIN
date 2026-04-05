import { useCallback, useEffect, useState } from "react";
import {
  getNotifications,
  markAllAsRead,
  markAsRead,
} from "../../services/user/notification.Service";
import toast from "react-hot-toast";

export const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNotifications = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getNotifications();

      // const adminNotifs = (res.data?.notif_admin?.data || []).map((item) => ({
      //   id: item.id,
      //   title: item.title || "Info Sistem",
      //   message: item.message || item.konten,
      //   time: item.created_at,
      //   is_read: !!item.is_read,
      //   category: "admin",
      // }));

      // const scanNotifs = (res.data?.notif_scan_qr?.data || []).map((item) => ({
      //   id: item.id,
      //   title: "Scan QR Berhasil",
      //   message: item.keterangan || "Kendaraan anda telah dipindai",
      //   time: item.created_at,
      //   is_read: !!item.is_read,
      //   category: "scan",
      // }));

      // const combinedNotifications = [...adminNotifs, ...scanNotifs];

      // console.log("Data notification", combinedNotifications);

      setNotifications(res);
    } catch (err) {
      console.error("Gagal ambil notifikasi", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const markRead = async (id) => {
    try {
      await markAsRead(id);

      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, status_baca: "Sudah" } : n)),
      );
    } catch (err) {
      console.error("Gagal memperbarui status", err);
      toast.error("Gagal memperbarui status");
    }
  };

  const markAllRead = async () => {
    try {
      await markAllAsRead();
      setNotifications((prev) =>
        prev.map((n) => ({ ...n, status_baca: "Sudah" })),
      );
      toast.success("Semua notifikasi ditandai dibaca");
    } catch (err) {
      console.error("Gagal memperbarui semua", err);
      toast.error("Gagal memperbarui semua");
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return {
    notifications,
    loading,
    markRead,
    markAllRead,
    refresh: fetchNotifications,
  };
};
