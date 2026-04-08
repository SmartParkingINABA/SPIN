import { useCallback, useEffect, useMemo, useState } from "react";
import {
  getNotifications,
  markAllAsRead,
  markAsRead,
} from "../../services/user/notification.Service";
import toast from "react-hot-toast";

export const useNotifications = () => {
  const [rawNotifications, setRawNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
  });

  const parseDate = (str) => {
    const bulanMap = {
      Januari: 0,
      Februari: 1,
      Maret: 2,
      April: 3,
      Mei: 4,
      Juni: 5,
      Juli: 6,
      Agustus: 7,
      September: 8,
      Oktober: 9,
      November: 10,
      Desember: 11,
    };

    const regex = /(\d{1,2}) (\w+) (\d{4}) pukul (\d{2})\.(\d{2})\.(\d{2})/;

    const match = str.match(regex);
    if (!match) return new Date();

    const [, day, month, year, h, m, s] = match;

    return new Date(year, bulanMap[month], day, h, m, s);
  };

  const fetchNotifications = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getNotifications();
      console.log("RES:", res);

      const adminData =
        res?.data?.notif_admin?.data?.map((item) => ({
          ...item,
          category: "admin",
          jenis: item.tipe,
        })) || [];

      const qrData =
        res?.data?.notif_scan_qr?.data?.map((item) => ({
          ...item,
          category: "scan",
        })) || [];

      const combinedData = [...adminData, ...qrData].sort(
        (a, b) => parseDate(b.waktu) - parseDate(a.waktu),
      );

      setRawNotifications(combinedData);

      setPagination((prev) => ({
        ...prev,
        total: combinedData.length,
      }));
    } catch (err) {
      console.error("Gagal ambil notifikasi", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const notifications = useMemo(() => {
    const start = (pagination.page - 1) * pagination.limit;
    const end = start + pagination.limit;

    return rawNotifications.slice(start, end);
  }, [rawNotifications, pagination]);

  const unreadCount = useMemo(() => {
    return rawNotifications.filter((n) => n.status_baca === "Belum").length;
  }, [rawNotifications]);

  const markRead = async (id, type) => {
    try {
      await markAsRead(id, type);
      setRawNotifications((prev) =>
        prev.map((n) =>
          n.id === id && n.category === type
            ? { ...n, status_baca: "Sudah" }
            : n,
        ),
      );
    } catch (err) {
      console.error("Gagal memperbarui status", err);
      toast.error("Gagal memperbarui status");
    }
  };

  const markAllRead = async () => {
    try {
      await Promise.all([markAllAsRead("admin"), markAllAsRead("scan")]);

      setRawNotifications((prev) =>
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

  useEffect(() => {
    const interval = setInterval(() => {
      fetchNotifications();
    }, 10000);

    return () => clearInterval(interval);
  }, [fetchNotifications]);

  return {
    notifications,
    loading,
    markRead,
    markAllRead,
    pagination,
    setPagination,
    unreadCount,
  };
};
