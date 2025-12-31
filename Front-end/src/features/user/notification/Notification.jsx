import Header from "./components/Header";
import { notifications } from "./components/notificationsDummy";
import NotificationCard from "./components/NotificationCard";

export default function Notification() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <Header />
      <div className="mt-6 flex flex-col gap-y-3.5">
        {notifications.map((item) => (
          <NotificationCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}
