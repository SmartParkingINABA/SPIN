import { FaRegEye } from "react-icons/fa6";
import { MdDoNotDisturb } from "react-icons/md";

export default function Actions({ rider, handleToggleActive, setIsModalOpen }) {
  return (
    <div className="flex gap-x-3">
      <button
        className="bg-[#FEF8FD] font-medium text-[14px] rounded-sm px-2 py-1 cursor-pointer opacity-100 hover:opacity-80 transition flex items-center gap-x-1.5"
        onClick={setIsModalOpen}
      >
        <FaRegEye className="h-fit w-4 text-[#130F40]" />
        <p className="font-medium text-[#130F40]">Detail</p>
      </button>
      <button
        className="bg-[#FEF8FD] font-medium rounded-sm px-2 py-1 opacity-100 hover:opacity-80 transition cursor-pointer flex items-center gap-x-1.5"
        onClick={handleToggleActive}
      >
        {rider.isActive ? (
          <>
            <p className="font-medium text-[#130F40]">Aktifkan</p>
          </>
        ) : (
          <>
            <MdDoNotDisturb className="h-fit w-4 text-red-500" />
            <p className="font-medium text-red-500">Non-aktifkan</p>
          </>
        )}
      </button>
    </div>
  );
}
