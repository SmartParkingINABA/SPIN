import {
  FaBell,
  FaCarSide,
  FaRegCircleCheck,
  FaRegClock,
} from "react-icons/fa6";
import StatsCard from "./StatsCard";

export default function StatsGrid({ summary }) {
  return (
    <div className="grid grid-cols-4 gap-x-6">
      <StatsCard
        title="Total Kendaraan"
        value={summary.total_kendaraan}
        icon={FaCarSide}
      />
      <StatsCard
        title="Total Parkir"
        value={`${summary.total_parkir} Kali`}
        icon={FaRegCircleCheck}
      />
      <StatsCard
        title="Total Durasi"
        value={`${summary.total_durasi} Jam`}
        icon={FaRegClock}
      />
      <StatsCard
        title="Notifikasi Baru"
        value={summary.notifikasi_baru}
        icon={FaBell}
      />
    </div>
  );
}
