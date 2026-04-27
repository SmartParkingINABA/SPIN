import { FaArrowRightLong, FaRegClock } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";

export default function StatusIn({ actionsStatus, message }) {
  if (actionsStatus !== "in") return null;

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-y-2 border border-green-400 bg-green-100 rounded-sm px-4 py-3 mb-4">
        <div className="flex items-center gap-x-2.5">
          <FiCheckCircle className="h-fit w-5 text-green-400" />
          <p className="text-[#48515b] font-medium">{message?.judul}</p>
        </div>
        <div className="flex items-center gap-x-2">
          <FaRegClock className="h-fit w-4 text-[#93A3B6]" />
          <p className="text-[#93A3B6] text-[12px] font-medium">
            {message?.waktu}
          </p>
        </div>
      </div>
      <div className="border border-gray-500 bg-blue-100 rounded-sm px-4 py-3 mb-4">
        <div className="flex items-center gap-x-3 text-[#FEF8FD] mb-2">
          <FaArrowRightLong className="w-5 h-fit text-green-500" />
          <p className="text-green-500">KENDARAAN MASUK</p>
        </div>
        <p className="font-medium text-[#93A3B6] mb-0.5">
          Plat Nomor:{" "}
          <span className="text-[#48515b]">{message?.kendaraan?.no_plat}</span>
        </p>
        <p className="font-medium text-[#93A3B6] mb-0.5">
          Nama Pengendara:{" "}
          <span className="text-[#48515b]">
            {message?.kendaraan?.nama_pengendara}
          </span>
        </p>
        <p className="font-medium text-[#93A3B6]">
          Telp:{" "}
          <span className="text-[#48515b]">{message?.kendaraan?.no_telp}</span>
        </p>
      </div>
    </div>
  );
}
