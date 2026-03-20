import { FiDownload } from "react-icons/fi";

export default function ExportData() {
  return (
    <button className="bg-[#FFDB58] inline-flex items-center gap-x-2 py-2 px-3 rounded-sm transition opacity-100 hover:opacity-80">
      <FiDownload className="text-[#130F40] w-5 h-fit" />
      <p className="text-[#130F40] font-medium">Export Data</p>
    </button>
  );
}
