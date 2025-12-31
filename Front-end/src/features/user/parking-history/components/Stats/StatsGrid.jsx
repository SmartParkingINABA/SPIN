import { LuRepeat2 } from "react-icons/lu";
import StatsCard from "./StatsCard";
import { RxLapTimer, RxTimer } from "react-icons/rx";

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-3 gap-6 mt-6">
      <StatsCard icon={LuRepeat2} title="Total Parkir" value="6 Kali" />
      <StatsCard icon={RxTimer} title="Total Durasi" value="42 Jam" />
      <StatsCard icon={RxLapTimer} title="Sedang Parkir" value="1 Kendaraan" />
    </div>
  );
}
