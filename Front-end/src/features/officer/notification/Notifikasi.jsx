import Header from "./components/Header";
import { notifications } from "./components/Notification/NotificationsDummy";
import NotificationCard from "./components/Notification/NotificationCard";

export default function Notifikasi() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <Header />
      <div className="mt-6 flex flex-col gap-y-3.5">
        {notifications.map((notif) => (
          <NotificationCard key={notif.id} {...notif} />
        ))}
      </div>
    </section>
  );
}
