import { FaClock, FaRegCircleCheck } from "react-icons/fa6";

export default function StatusCard({ vehicle }) {
  const isSelesai = vehicle.status_parkir === "Selesai";

  return (
    <div className="mt-3.5 px-6 py-4 rounded-md bg-[#130F40]">
      <div className="flex items-center gap-x-3">
        <div className="bg-[#4B4141] rounded-sm p-3">
          {isSelesai ? (
            <FaRegCircleCheck className="text-[#FFEC78] w-6 h-fit" />
          ) : (
            <FaClock className="text-[#FFEC78] w-6 h-fit" />
          )}
        </div>
        <div className="">
          <p className="text-[#FEF8FD] text-[14px] font-medium flex items-center gap-x-2.5">
            {vehicle.kendaraan.no_plat}
            <span
              className={`text-[10px] font-medium px-2 rounded-sm ${isSelesai ? "text-[#1E1633] bg-[#FFEC78]" : "bg-green-500 text-white"}`}
            >
              {vehicle.status_parkir}
            </span>
          </p>
          <p className="text-[#93A3B6] text-[12px] font-medium">
            {isSelesai
              ? vehicle.kendaraanKeluar?.waktu_keluar
              : vehicle.waktu_masuk}
          </p>
        </div>
      </div>
    </div>
  );
}
