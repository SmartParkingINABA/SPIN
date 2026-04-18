import { MdOutlineCameraAlt } from "react-icons/md";

export default function HandleCapture({
  handleScanClick,
  isScanning,
  loading,
}) {
  return (
    <button
      onClick={handleScanClick}
      disabled={isScanning || loading}
      className={`bg-[#FFDB58] mt-4 sm:mt-6 w-full rounded-md py-2 transition  duration-300 ease-in-out ${isScanning || loading ? "opacity-80 cursor-not-allowed" : "opacity-100 cursor-pointer"} hover:opacity-80`}
    >
      <div className="flex items-center gap-x-3 w-fit mx-auto">
        <MdOutlineCameraAlt className="h-fit w-5 text-[#130F40]" />
        {isScanning || loading ? (
          <p className="text-[#130F40] font-medium text-[14px] sm:text-[16px]">
            Memindai...
          </p>
        ) : (
          <p className="text-[#130F40] font-medium text-[14px] sm:text-[16px]">
            Mulai Scan QR
          </p>
        )}
      </div>
    </button>
  );
}
