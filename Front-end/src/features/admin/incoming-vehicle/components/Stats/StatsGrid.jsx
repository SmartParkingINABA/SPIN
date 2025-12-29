import { FaRegClock } from "react-icons/fa6";
import StatsCard from "./StatsCard";

export default function StatsGrid() {
  return (
    <div className="mt-6 grid grid-cols-3 gap-x-6">
      <StatsCard title="Total Parkir Hari Ini" value="5" />
      <StatsCard title="Sedang Parkir" value="3" />
      <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-10 px-6 py-4 rounded-md">
        <p className="text-[#FEF8FD] font-medium">Waktu Real-time</p>
        <p className="text-[#93A3B6] font-medium flex items-center gap-x-2">
          <FaRegClock className="h-fit w-3.5" /> 22.01.10
        </p>
      </div>
    </div>
  );
}
