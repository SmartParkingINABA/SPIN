import { FaDownload, FaPrint } from "react-icons/fa6";

export default function ButtonCta() {
  return (
    <div className="grid grid-cols-2 gap-x-6 mt-20">
      <button className="bg-[#FFDB58] rounded-md border-0 py-2 transition cursor-pointer opacity-100 hover:opacity-80">
        <div className="flex items-center gap-x-2.5 mx-auto w-fit">
          <FaDownload className="h-fit w-5" />
          <span className="font-medium text-[#1E1633]">Download QR Code</span>
        </div>
      </button>
      <button className="bg-[#FFDB58] rounded-md border-0 py-2 transition cursor-pointer opacity-100 hover:opacity-80">
        <div className="flex items-center gap-x-2.5 mx-auto w-fit">
          <FaPrint className="h-fit w-5" />
          <span className="font-medium text-[#1E1633]">Cetak QR Code</span>
        </div>
      </button>
    </div>
  );
}
