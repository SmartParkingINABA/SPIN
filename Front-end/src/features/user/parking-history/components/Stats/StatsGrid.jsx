import { LuRepeat2 } from "react-icons/lu";
import StatsCard from "./StatsCard";
import { RxLapTimer, RxTimer } from "react-icons/rx";

export default function StatsGrid({ stats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
      <StatsCard
        icon={LuRepeat2}
        title="Total Parkir"
        value={`${stats.total_parkir || 0} Kali`}
      />
      <StatsCard
        icon={RxTimer}
        title="Total Durasi"
        value={`${stats.total_durasi || 0} Jam`}
      />
      <StatsCard
        icon={RxLapTimer}
        title="Sedang Parkir"
        value={`${stats.sedang_parkir || 0} Kendaraan`}
      />
    </div>
  );
}
