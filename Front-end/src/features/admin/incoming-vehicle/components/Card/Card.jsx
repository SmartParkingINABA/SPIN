import { LuCar } from "react-icons/lu";

export default function Card({ vehicle }) {
  return (
    <div className="border border-[rgba(255,236,120,0.5)] px-5 py-2.5 rounded-sm bg-[#130F40] flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <div className="bg-blue-100 rounded-sm p-2.5">
          <LuCar className="text-blue-600 w-6.5 h-fit" />
        </div>
        <div className="">
          <p className="text-[#FEF8FD] font-medium">{vehicle.plate}</p>
          <p className="text-[#93A3B6] text-[14px] font-medium">
            {vehicle.name}
          </p>
          <p className="text-[#93A3B6] text-[14px] font-medium">
            Masuk: {vehicle.entry}
          </p>
        </div>
      </div>
      <p className="text-[#130F40] bg-gray-200 rounded-sm px-2.5 py-0.5 w-fit text-[12px]">
        Parkir
      </p>
    </div>
  );
}
