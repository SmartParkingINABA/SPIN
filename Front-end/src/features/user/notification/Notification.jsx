import Header from "./components/Header";
import NotificationCard from "./components/NotificationCard";
import { useNotifications } from "../../../hooks/user/useNotifications";
import NotificationSkeleton from "./components/NotificationSkeleton";
import Pagination from "../../../components/ui/Pagination";

export default function Notification() {
  const {
    notifications,
    loading,
    markRead,
    markAllRead,
    pagination,
    setPagination,
    unreadCount,
  } = useNotifications();

  return (
    <>
      {loading ? (
        <NotificationSkeleton />
      ) : (
        <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
          <Header onMarkAllRead={markAllRead} unreadCount={unreadCount} />
          <div className="mt-6 flex flex-col gap-y-3.5">
            {notifications.length > 0 ? (
              notifications.map((item) => (
                <NotificationCard
                  key={`${item.category}-${item.id}`}
                  data={item}
                  onMarkRead={() => markRead(item.id, item.category)}
                />
              ))
            ) : (
              <p className="text-[#93A3B6]">Belum ada notifikasi.</p>
            )}
          </div>
          <Pagination pagination={pagination} setPagination={setPagination} />
        </section>
      )}
    </>
  );
}
