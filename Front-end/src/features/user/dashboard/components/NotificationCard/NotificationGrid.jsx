import NotificationCard from "./NotificationCard";

export default function NotificationGrid({ notifications }) {
  return (
    <>
      {notifications.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ))}
    </>
  );
}
