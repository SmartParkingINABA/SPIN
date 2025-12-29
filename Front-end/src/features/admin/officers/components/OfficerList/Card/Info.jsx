import { FiUsers } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

export default function Info({ officer }) {
  return (
    <div className="flex items-center gap-x-3.5">
      <div className="bg-blue-100 rounded-sm p-2.5">
        <FiUsers className="text-blue-600 w-6.5 h-fit" />
      </div>
      <div className="">
        <div className="flex items-center gap-x-2">
          <p className="text-[#FEF8FD] font-medium">{officer.name}</p>
          <div className="flex items-center gap-x-0.5">
            <GoDotFill
              className={`${
                officer.isActive ? "text-green-500" : "text-gray-500"
              } w-3 h-fit`}
            />
            <p className="text-[#93A3B6] font-medium text-[14px]">
              {officer.isActive ? "Online" : "Offline"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-1 text-[14px]">
          <p className="text-[#93A3B6]">joko.w@parking.com</p>
          <GoDotFill className="text-[#93A3B6] w-1.5 h-fit" />
          <p className="text-[#93A3B6]">081234111222</p>
        </div>
        <div className="flex items-center gap-x-1.5 mt-1">
          <p className="text-[#130F40] bg-yellow-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
            {officer.shift}
          </p>
          <p className="text-[#130F40] bg-blue-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
            {officer.area}
          </p>
          <p
            className={`${
              officer.isActive
                ? "border border-[rgba(255,236,120,0.5)] text-[#FFDB58]"
                : "border border-transparent text-[#130F40] bg-gray-200"
            } text-[12px] rounded-sm px-2 py-0.5 font-medium`}
          >
            {officer.isActive ? "Aktif" : "Non-aktif"}
          </p>
        </div>
      </div>
    </div>
  );
}
