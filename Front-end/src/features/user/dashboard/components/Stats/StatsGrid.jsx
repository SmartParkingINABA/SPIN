import {
  FaBell,
  FaCarSide,
  FaRegCircleCheck,
  FaRegClock,
} from "react-icons/fa6";
import StatsCard from "./StatsCard";

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-4 gap-x-6">
      <StatsCard title="Total Kendaraan" value="2" icon={FaCarSide} />
      <StatsCard title="Total Parkir" value="3 Kali" icon={FaRegCircleCheck} />
      <StatsCard title="Total Durasi" value="48 Jam" icon={FaRegClock} />
      <StatsCard title="Notifikasi Baru" value="2" icon={FaBell} />
    </div>
  );
}
