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
      setNotifications(res || []);
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
