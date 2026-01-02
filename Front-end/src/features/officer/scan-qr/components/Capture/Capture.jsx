import { MdOutlineCameraAlt } from "react-icons/md";

export default function Capture({ isScanning }) {
  return (
    <div className="mt-3.5 bg-[#130F40] h-130 flex justify-center items-center rounded-md">
      <div className="text-center border-2 border-[rgba(255,236,120,0.5)] rounded-xl py-13 w-[45%]">
        <MdOutlineCameraAlt className="h-fit w-13 mx-auto text-[#93A3B6] mb-3" />
        {isScanning ? (
          <>
            <p className="text-[#FEF8FD] mb-1.5">Memindai QR Code...</p>
            <p className="text-[#93A3B6]">Mohon Tunggu</p>
          </>
        ) : (
          <>
            <p className="text-[#93A3B6] mb-1.5">Kamera siap memindai</p>
            <p className="text-[#93A3B6]">Arahkan QR code ke kamera</p>
          </>
        )}
      </div>
    </div>
  );
}
