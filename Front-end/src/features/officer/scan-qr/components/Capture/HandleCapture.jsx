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
      className={`bg-[#FFDB58] mt-6 w-full rounded-md py-2 transition cursor-pointer duration-300 ease-in-out
               ${isScanning || loading ? "opacity-80" : "opacity-100"}
                hover:opacity-80`}
    >
      <div className="flex items-center gap-x-3 w-fit mx-auto">
        <MdOutlineCameraAlt className="h-fit w-5 text-[#130F40]" />
        {isScanning || loading ? (
          <p className="text-[#130F40] font-medium">Memindai...</p>
        ) : (
          <p className="text-[#130F40] font-medium">Mulai Scan QR</p>
        )}
      </div>
    </button>
  );
}
