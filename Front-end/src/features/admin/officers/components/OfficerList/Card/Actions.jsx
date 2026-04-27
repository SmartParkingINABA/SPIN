import { BiSolidEdit } from "react-icons/bi";
import { FaTrashCan } from "react-icons/fa6";

export default function Actions({
  officer,
  onToggleActive,
  setIsModalOpenEdit,
}) {
  return (
    <div className="flex gap-x-3">
      <button
        className="text-[#130F40] bg-[#FEF8FD] font-medium text-[14px] rounded-sm px-2 py-1 cursor-pointer opacity-100 hover:opacity-80 transition"
        onClick={onToggleActive}
      >
        {officer.isActive ? "Nonaktifkan" : "Aktifkan"}
      </button>
      <button
        className="bg-[#FEF8FD] font-medium rounded-sm px-2 py-1 opacity-100 hover:opacity-80 transition cursor-pointer"
        onClick={setIsModalOpenEdit}
      >
        <BiSolidEdit className="w-5 h-fit text-[#130F40]" />
      </button>
      <button className="bg-[#FEF8FD] font-medium rounded-sm px-2 py-1 cursor-pointer opacity-100 hover:opacity-80 transition">
        <FaTrashCan className="w-4 h-fit text-[#B90404]" />
      </button>
    </div>
  );
}
