import { FiDownload } from "react-icons/fi";

export default function ExportData({ onExport, isDisabled }) {
  return (
    <button
      className={`inline-flex items-center gap-x-1.5 sm:gap-x-2.5 py-2 px-2 sm:px-3 rounded-sm transition 
        ${
          isDisabled
            ? "bg-[rgba(255,219,88,0.8)] cursor-not-allowed opacity-50"
            : "bg-[#FFDB58] hover:opacity-80 cursor-pointer"
        }`}
      onClick={onExport}
      disabled={isDisabled}
    >
      <FiDownload className="text-[#130F40] w-4 sm:w-5 h-fit" />
      <p className="text-[#130F40] font-medium text-[14px] sm:text-[16px]">
        Export Data
      </p>
    </button>
  );
}
