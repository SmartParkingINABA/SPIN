import { useCallback, useEffect, useState } from "react";
import {
  getAllNotification,
  putReadAllNotification,
  putReadNotification,
} from "../../services/officer/notification.Service";
import { AiOutlineWarning } from "react-icons/ai";
import { MdInfoOutline } from "react-icons/md";
import { usePagination } from "./usePagination";

export const useNotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const { pagination, setPagination } = usePagination({
    page: 1,
    limit: 10,
    total: 0,
  });

  const fetchNotifications = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getAllNotification({
        page: pagination.page,
        limit: pagination.limit,
      });
      const backendData = res.data;
      setUnreadCount(Number(backendData.unread_count));

      setPagination((prev) => ({
        ...prev,
        total: backendData.pagination.total,
      }));

      const mapped = backendData.data.map((item) => ({
        id: item.id,
        title: item.title,
        message: item.pesan,
        time: item.waktu,
        isNew: item.status_baca === "Belum",
        shosAction: item.status_baca === "Belum",
        icon: item.tipe === "Peringatan" ? AiOutlineWarning : MdInfoOutline,
        bgColor: item.status_baca === "Belum" ? "bg-[#EAF4FF]" : "bg-[#F5F5F5]",
      }));

      setNotifications(mapped);
    } catch (err) {
      console.error("Error fetch notifications: ", err);
    } finally {
      setLoading(false);
    }
  }, [pagination.page, pagination.limit, setPagination]);

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  const readNotification = async (id) => {
    try {
      await putReadNotification(id);
      fetchNotifications();
    } catch (err) {
      console.error("Error read notification:", err);
    }
  };

  const readAllNotification = async () => {
    try {
      await putReadAllNotification();
      fetchNotifications();
    } catch (err) {
      console.error("Error read all notification:", err);
    }
  };

  return {
    notifications,
    unreadCount,
    loading,
    pagination,
    setPagination,
    readNotification,
    readAllNotification,
  };
};
