import { FaDownload, FaPrint } from "react-icons/fa6";

export default function ButtonCta({ onDownload, onPrint }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-16 sm:mt-20">
      <button
        className="bg-[#FFDB58] rounded-md border-0 py-1 sm:py-2 transition cursor-pointer opacity-100 hover:opacity-80"
        onClick={onDownload}
      >
        <div className="flex items-center gap-1.5 sm:gap-2.5 mx-auto w-fit">
          <FaDownload className="h-fit w-4.5 sm:w-5" />
          <span className="font-medium text-[#1E1633] text-[12px] sm:text-[16px]">
            Download QR Code
          </span>
        </div>
      </button>
      <button
        className="bg-[#FFDB58] rounded-md border-0 py-1 sm:py-2 transition cursor-pointer opacity-100 hover:opacity-80"
        onClick={onPrint}
      >
        <div className="flex items-center gap-1.5 sm:gap-2.5 mx-auto w-fit">
          <FaPrint className="h-fit w-4.5 sm:w-5" />
          <span className="font-medium text-[#1E1633] text-[12px] sm:text-[16px]">
            Cetak QR Code
          </span>
        </div>
      </button>
    </div>
  );
}
