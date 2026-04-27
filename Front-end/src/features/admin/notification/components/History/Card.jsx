import { FaRegCheckCircle } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";

export default function Card({
  icon,
  iconBg,
  title,
  typeLabel,
  typeBg,
  typeColor,
  message,
  date,
  readCount,
  to,
}) {
  return (
    <div className="border border-[rgba(255,236,120,0.5)] px-5 py-2.5 rounded-sm bg-[#130F40] flex items-start justify-between">
      <div className="flex items-start gap-x-3">
        <div className={`${iconBg} rounded-sm p-2 mt-1`}>{icon}</div>
        <div className="">
          <div className="flex items-center gap-x-2">
            <p className="text-[#FEF8FD] font-medium">{title}</p>
            <p
              className={`${typeColor} ${typeBg} text-[12px] rounded-sm px-2 py-0.5 font-medium`}
            >
              {typeLabel}
            </p>
          </div>
          <p className="text-[#93A3B6] text-[14px] font-medium">{message}</p>
          <p className="text-[#93A3B6] text-[12px] font-medium flex items-center gap-x-3 mt-1">
            <span className="flex items-center gap-x-1">
              <LuUsers className="h-fit w-3" /> {to}
            </span>
            <span className="flex items-center gap-x-1">
              <MdOutlineDateRange className="h-fit w-3" /> {date}
            </span>
            <span className="flex items-center gap-x-1">
              <FaRegCheckCircle className="h-fit w-3" /> {readCount} dibaca
            </span>
          </p>
        </div>
      </div>
      <button className="bg-[#FEF8FD] font-medium rounded-sm p-1.5 cursor-pointer opacity-100 hover:opacity-80 transition">
        <FaTrashCan className="w-4 h-fit text-[#B90404]" />
      </button>
    </div>
  );
}
