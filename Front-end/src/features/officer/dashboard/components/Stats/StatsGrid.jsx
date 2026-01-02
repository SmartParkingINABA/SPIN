import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import StatsCard from "./StatsCard";

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-3 gap-6 mb-6">
      <StatsCard
        title="Kendaraan Masuk"
        value="24"
        label="Hari ini"
        icon={FaArrowDown}
        color="text-green-500"
      />
      <StatsCard
        title="Sedang Parkir"
        value="19"
        label="Kendaraan aktif"
        icon={MdAccessTime}
        color="text-yellow-500"
      />
      <StatsCard
        title="Kendaraan Keluar"
        value="5"
        label="Hari ini"
        icon={FaArrowUp}
        color="text-blue-500"
      />
    </div>
  );
}
