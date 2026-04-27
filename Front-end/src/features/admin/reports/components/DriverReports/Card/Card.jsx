import { LuUsers } from "react-icons/lu";

export default function Card({ driver }) {
  return (
    <div className="border border-[rgba(255,236,120,0.5)] px-5 py-2.5 rounded-sm bg-[#130F40] flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <div className="bg-blue-100 rounded-sm p-2">
          <LuUsers className="text-blue-600 w-6 h-fit" />
        </div>
        <div className="">
          <p className="text-[#FEF8FD] font-medium">{driver.name}</p>
          <p className="text-[#93A3B6] text-[14px] font-medium">
            {driver.email}
          </p>
        </div>
      </div>
      <p className="text-[#FEF8FD] text-[14px]">{driver.date}</p>
    </div>
  );
}
