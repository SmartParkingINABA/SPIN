import { FaCarSide } from "react-icons/fa6";

export default function VehicleCard({ vehicle }) {
  return (
    <div className="mt-3.5 px-6 py-4 rounded-md bg-[#130F40] flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <div className="bg-[#4B4141] rounded-sm p-3">
          <FaCarSide className="text-[#FFEC78] w-6 h-fit" />
        </div>
        <div className="">
          <p className="text-[#FEF8FD] font-medium">{vehicle.no_plat}</p>
          <p className="text-[#93A3B6] text-[14px] font-medium">
            {vehicle.jenis} • {vehicle.merk}
          </p>
        </div>
      </div>
      <p className="text-[#FFEC78] bg-[#4B4141] text-[14px] px-3 py-1 rounded-sm font-medium">
        {vehicle.status}
      </p>
    </div>
  );
}
