import { FaRegClock } from "react-icons/fa";
import { LuCar } from "react-icons/lu";

export default function Card({ vehicle }) {
  return (
    <div className="bg-[#130F40] border border-[rgba(255,236,120,0.5)] px-6 py-4 rounded-sm flex items-start justify-between">
      <div className="flex items-start gap-x-3.5">
        <div className="bg-blue-100 rounded-sm p-2.5 mt-1">
          <LuCar className="text-blue-600 w-6.5 h-fit" />
        </div>
        <div className="">
          <div className="flex items-center gap-x-2">
            <p className="text-[#FEF8FD] font-medium">{vehicle.plate}</p>
            <p
              className={`text-[#130F40] ${
                vehicle.category === "Motor" ? "bg-green-200" : "bg-yellow-200"
              } text-[12px] rounded-sm px-2 py-0.5 font-medium`}
            >
              {vehicle.category}
            </p>
          </div>
          <p className="text-[#93A3B6] text-[14px]">{vehicle.type}</p>
          <p className="text-[#93A3B6] text-[14px]">
            Pengendara: {vehicle.name}
          </p>
          <div className="flex items-center gap-x-3.5 mt-1">
            <p className="flex items-center gap-x-1.5">
              <FaRegClock className="text-[#93A3B6] h-fit w-3" />{" "}
              <span className="text-[#93A3B6] text-[12px]">
                Masuk: {vehicle.entry}
              </span>
            </p>
            <p className="text-[#93A3B6] text-[12px]">
              Petugas: {vehicle.officer}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-1.5">
        <p className="text-[#FEF8FD] bg-orange-400 rounded-sm px-2.5 py-0.5 w-fit text-[12px]">
          {vehicle.duration}
        </p>
        <p className="text-[#93A3B6] text-[12px] text-end">{vehicle.date}</p>
      </div>
    </div>
  );
}
