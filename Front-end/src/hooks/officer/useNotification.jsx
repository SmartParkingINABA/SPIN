import { useEffect, useState } from "react";
import {
  getAllNotification,
  putReadAllNotification,
  putReadNotification,
} from "../../services/officer/notification.Service";
import { AiOutlineWarning } from "react-icons/ai";
import { MdInfoOutline } from "react-icons/md";

export const useNotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const res = await getAllNotification();
      const backendData = res.data;
      setUnreadCount(backendData.unread_count);

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
  };

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

  useEffect(() => {
    fetchNotifications();
  }, []);

  return {
    notifications,
    unreadCount,
    loading,
    readNotification,
    readAllNotification,
  };
};
