import { IoMdNotificationsOutline } from "react-icons/io";
import { LuSend, LuUsers } from "react-icons/lu";
import StatsCard from "./StatsCard";

export default function StatsGrid() {
  return (
    <div className="mt-6 grid grid-cols-3 gap-x-6">
      <StatsCard
        title="Total Notifikasi"
        value="3"
        icon={IoMdNotificationsOutline}
        iconColor="text-blue-600"
      />
      <StatsCard
        title="Terkirim Hari Ini"
        value="0"
        icon={LuSend}
        iconColor="text-green-600"
      />
      <StatsCard
        title="Total Notifikasi"
        value="50 Pengguna"
        icon={LuUsers}
        iconColor="text-purple-600"
      />
    </div>
  );
}
