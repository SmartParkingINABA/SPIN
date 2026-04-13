import { FaArrowRightLong, FaRegClock } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";

export default function StatusOut({ actionsStatus, scanResult }) {
  return (
    <>
      {actionsStatus === "out" && (
        <div className="mt-6">
          <div className="flex flex-col gap-y-2 border border-green-500 bg-green-100 rounded-sm px-4 py-3 mb-4">
            <div className="flex items-center gap-x-2.5">
              <FiCheckCircle className="h-fit w-5 text-green-500" />
              <p className="text-[#48515b] font-medium">{scanResult?.judul}</p>
            </div>
            <div className="flex items-center gap-x-2">
              <FaRegClock className="h-fit w-4 text-[#93A3B6]" />
              <p className="text-[#93A3B6] text-[12px] font-medium">
                {scanResult?.waktu}
              </p>
            </div>
          </div>
          <div className="border border-gray-500 bg-blue-100 rounded-sm px-4 py-3 mb-4">
            <div className="flex items-center gap-x-3 text-[#FEF8FD] mb-2">
              <FaArrowRightLong className="w-5 h-fit text-blue-500" />
              <p className="text-blue-500">KENDARAAN KELUAR</p>
            </div>
            <p className="font-medium text-[#93A3B6] mb-0.5">
              Plat Nomor:{" "}
              <span className="text-[#48515b]">
                {scanResult?.kendaraan?.no_plat}
              </span>
            </p>
            <p className="font-medium text-[#93A3B6] mb-0.5">
              Nama Pengendara:{" "}
              <span className="text-[#48515b]">
                {scanResult?.kendaraan?.nama_pengendara}
              </span>
            </p>
            <p className="font-medium text-[#93A3B6] mb-0.5">
              Telp:{" "}
              <span className="text-[#48515b]">
                {scanResult?.kendaraan?.no_telp}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
