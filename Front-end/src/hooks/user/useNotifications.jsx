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

      const adminData =
        res.data?.notif_admin?.data?.map((item) => ({
          ...item,
          category: "admin",
          jenis: item.tipe,
        })) || [];

      const qrData =
        res.data?.notif_scan_qr?.data?.map((item) => ({
          ...item,
          category: "scan",
        })) || [];

      const combinedData = [...adminData, ...qrData];

      setNotifications(combinedData);
    } catch (err) {
      console.error("Gagal ambil notifikasi", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const markRead = async (id, type) => {
    try {
      await markAsRead(id, type);

      setNotifications((prev) =>
        prev.map((n) =>
          n.id === id && n.category === type
            ? { ...n, status_baca: "Sudah" }
            : n,
        ),
      );

      await fetchNotifications();
    } catch (err) {
      console.error("Gagal memperbarui status", err);
      toast.error("Gagal memperbarui status");
    }
  };

  const markAllRead = async () => {
    try {
      await Promise.all([markAllAsRead("admin"), markAllAsRead("scan")]);

      setNotifications((prev) =>
        prev.map((n) => ({ ...n, status_baca: "Sudah" })),
      );

      await fetchNotifications();

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
