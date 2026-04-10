import Header from "./components/Header";
import NotificationCard from "./components/Notification/NotificationCard";
import { useNotification } from "../../../hooks/officer/useNotification";
import Pagination from "../../../components/ui/Pagination";

export default function Notifikasi() {
  const {
    loading,
    notifications,
    unreadCount,
    pagination,
    setPagination,
    readNotification,
    readAllNotification,
  } = useNotification();

  if (loading) return <p className="p-5">Loading...</p>;

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <Header unreadCount={unreadCount} onReadAll={readAllNotification} />
      <div className="mt-6 flex flex-col gap-y-3.5">
        {notifications.length > 0 ? (
          notifications.map((notif) => (
            <NotificationCard
              key={notif.id}
              {...notif}
              onRead={() => readNotification(notif.id)}
            />
          ))
        ) : (
          <p className="text-[#93A3B6]">Belum ada notifikasi.</p>
        )}
      </div>
      <Pagination pagination={pagination} setPagination={setPagination} />
    </section>
  );
}
