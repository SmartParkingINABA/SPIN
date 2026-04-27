import { PiChartLineDownLight, PiChartLineUpLight } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";
import StatsCard from "./StatsCard";

export default function StatsGrid() {
  return (
    <div className="mt-6 grid grid-cols-3 gap-x-6">
      <StatsCard
        title="Total Kendaraan Masuk"
        value="5"
        icon={PiChartLineUpLight}
        iconColor="text-green-500"
      />
      <StatsCard
        title="Total Kendaraan Keluar"
        value="2"
        icon={PiChartLineDownLight}
        iconColor="text-red-500"
      />
      <StatsCard
        title="Durasi Rata-rata"
        value="6j 45m"
        icon={FaRegClock}
        iconColor="text-blue-500"
      />
    </div>
  );
}
