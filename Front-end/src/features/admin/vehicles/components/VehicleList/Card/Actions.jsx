import { BiSolidEdit } from "react-icons/bi";
import { FaRegEye, FaTrashCan } from "react-icons/fa6";

export default function Actions({ openModalDetail, openModalEdit }) {
  return (
    <div className="flex gap-x-3">
      <button
        className="bg-[#FEF8FD] font-medium text-[14px] rounded-sm px-2 py-1 cursor-pointer opacity-100 hover:opacity-80 transition flex items-center gap-x-1.5"
        onClickCapture={openModalDetail}
      >
        <FaRegEye className="h-fit w-4 text-[#130F40]" />
        <p className="font-medium text-[#130F40]">Detail</p>
      </button>
      <button
        className="bg-[#FEF8FD] font-medium rounded-sm px-2 py-1 opacity-100 hover:opacity-80 transition cursor-pointer"
        onClick={openModalEdit}
      >
        <BiSolidEdit className="w-5 h-fit text-[#130F40]" />
      </button>
      <button className="bg-[#FEF8FD] font-medium rounded-sm px-2 py-1 cursor-pointer opacity-100 hover:opacity-80 transition">
        <FaTrashCan className="w-4 h-fit text-[#B90404]" />
      </button>
    </div>
  );
}
