import { MdOutlineCameraAlt } from "react-icons/md";

export default function HandleCapture({
  handleScanClick,
  isScanning,
  loading,
}) {
  return (
    <button
      onClick={handleScanClick}
      disabled={loading}
      className={`bg-[#FFDB58] mt-4 sm:mt-6 w-full rounded-md py-2 transition  duration-300 ease-in-out ${loading ? "opacity-80 cursor-not-allowed" : "opacity-100 cursor-pointer"} hover:opacity-80`}
    >
      <div className="flex items-center gap-2 w-fit mx-auto">
        <MdOutlineCameraAlt className="h-fit w-5 text-[#130F40]" />
        <p className="text-[#130F40] font-medium text-[14px] sm:text-[16px]">
          {isScanning ? "Hentikan Scan" : "Mulai Scan QR"}
        </p>
      </div>
    </button>
  );
}
