import { MdOutlineFileDownload } from "react-icons/md";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-[#FEF8FD] text-2xl font-bold">Laporan</h1>
        <p className="text-[#93A3B6] font-medium mt-1">
          Analisis dan laporan data parkir
        </p>
      </div>
      <div className="flex items-center gap-x-3.5">
        <button className="bg-[#FFDB58] flex items-center gap-x-2.5 rounded-md px-3 py-2 cursor-pointer transition opacity-100 hover:opacity-80">
          <MdOutlineFileDownload className="h-fit w-5" />
          <p className="text-[#130F40] font-medium">Expoort PDF</p>
        </button>
        <button className="bg-[#FFDB58] flex items-center gap-x-2.5 rounded-md px-3 py-2 cursor-pointer transition opacity-100 hover:opacity-80">
          <MdOutlineFileDownload className="h-fit w-5" />
          <p className="text-[#130F40] font-medium">Expoort Excel</p>
        </button>
      </div>
    </div>
  );
}
