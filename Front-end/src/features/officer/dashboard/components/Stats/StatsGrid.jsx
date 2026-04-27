import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import StatsCard from "./StatsCard";

export default function StatsGrid({ summary }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
      <StatsCard
        title="Kendaraan Masuk"
        value={summary?.kendaraan_masuk || 0}
        label="Hari ini"
        icon={FaArrowDown}
        color="text-green-500"
      />
      <StatsCard
        title="Sedang Parkir"
        value={summary?.kendaraan_parkir || 0}
        label="Kendaraan Parkir"
        icon={MdAccessTime}
        color="text-yellow-500"
      />
      <StatsCard
        title="Kendaraan Keluar"
        value={summary?.kendaraan_keluar || 0}
        label="Hari ini"
        icon={FaArrowUp}
        color="text-blue-500"
      />
    </div>
  );
}
