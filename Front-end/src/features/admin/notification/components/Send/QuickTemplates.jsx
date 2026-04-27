import { IoWarningOutline } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";

export default function QuickTemplates({ handleSelectTemplate }) {
  return (
    <div className="mt-3.5 grid grid-cols-2 gap-x-6">
      <div
        className="border border-[rgba(255,236,120,0.5)] px-5 py-2.5 rounded-sm bg-[#130F40] flex items-center gap-x-3 transition opacity-100 hover:opacity-80 cursor-pointer"
        role="button"
        onClick={() => handleSelectTemplate("warning")}
      >
        <div className="bg-red-100 rounded-sm p-1.5">
          <IoWarningOutline className="text-red-600 w-5.5 h-fit" />
        </div>
        <div className="">
          <p className="text-[#FEF8FD] font-medium">Area Parkir Hampir Penuh</p>
          <p className="text-[#93A3B6] text-[14px] font-medium">
            Peringatan untuk petugas parkir
          </p>
        </div>
      </div>
      <div
        className="border border-[rgba(255,236,120,0.5)] px-5 py-2.5 rounded-sm bg-[#130F40] flex items-center gap-x-3 transition opacity-100 hover:opacity-80 cursor-pointer"
        role="button"
        onClick={() => handleSelectTemplate("info")}
      >
        <div className="bg-blue-100 rounded-sm p-1.5">
          <RiErrorWarningLine className="text-blue-600 w-5.5 h-fit" />
        </div>
        <div className="">
          <p className="text-[#FEF8FD] font-medium">Pemeliharaan Sistem</p>
          <p className="text-[#93A3B6] text-[14px] font-medium">
            Informasi untuk semua pengguna
          </p>
        </div>
      </div>
    </div>
  );
}
