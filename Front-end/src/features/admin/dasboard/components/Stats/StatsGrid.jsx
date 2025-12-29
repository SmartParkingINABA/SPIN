import { PiChartLineDownLight, PiChartLineUpLight } from "react-icons/pi";
import { LuCar, LuCircleParking, LuUserCog } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import StatsCard from "./StatsCard";

export default function StatsGrid() {
  return (
    <div className="mt-6 grid grid-cols-4 gap-x-6">
      <StatsCard
        title="Total Kendaraan"
        value="5"
        subtitle="Kendaraan terdaftar"
        icon={LuCar}
        iconColor="text-blue-500"
        trend={
          <p className="text-green-500 flex items-center gap-x-0.5">
            <PiChartLineUpLight className="h-fit w-4" />{" "}
            <span className="text-[10px]">+12%</span>
          </p>
        }
      />
      <StatsCard
        title="Sedang Parkir"
        value="2"
        subtitle="Kendaraan aktif parkir"
        icon={LuCircleParking}
        iconColor="text-green-500"
        trend={
          <p className="text-red-500 flex items-center gap-x-0.5">
            <PiChartLineDownLight className="h-fit w-4" />{" "}
            <span className="text-[10px]">-3%</span>
          </p>
        }
      />
      <StatsCard
        title="Total Pengendara"
        value="6"
        subtitle="Pengendara terdaftar"
        icon={FiUsers}
        iconColor="text-blue-500"
        trend={
          <p className="text-green-500 flex items-center gap-x-0.5">
            <PiChartLineUpLight className="h-fit w-4" />{" "}
            <span className="text-[10px]">+3%</span>
          </p>
        }
      />
      <StatsCard
        title="Petugas Aktif"
        value="2/3"
        subtitle="Petugas online"
        icon={LuUserCog}
        iconColor="text-yellow-500"
      />
    </div>
  );
}
