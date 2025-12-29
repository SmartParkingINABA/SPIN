import { LuArrowRightToLine, LuCalculator } from "react-icons/lu";

export default function DetailOut({ selectedVehicle, setSelectedVehicle }) {
  if (!selectedVehicle) return null;

  return (
    <div className="bg-[#130F40] border border-[rgba(255,236,120,0.5)] rounded-sm px-5 py-3 mt-3.5">
      <div className="flex items-center justify-between mb-1.5">
        <p className="text-[#FEF8FD] font-medium">{selectedVehicle.plate}</p>
        <p className="text-[#130F40] bg-gray-200 rounded-sm px-2.5 py-0.5 w-fit text-[12px]">
          {selectedVehicle.category}
        </p>
      </div>
      <p className="text-[#93A3B6] text-[14px] font-medium">
        {selectedVehicle.type}
      </p>
      <p className="text-[#93A3B6] text-[14px] font-medium">
        Pemilik: {selectedVehicle.name}
      </p>
      <div className="mt-3 flex flex-col gap-y-3.5">
        <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] px-3.5 py-2 flex flex-col gap-y-1.5 rounded-sm">
          <div>
            <p className="text-[13px] text-[#93A3B6]">Waktu Masuk</p>
            <p className="text-[#FEF8FD] font-medium">
              27/11/2024, {selectedVehicle.entry}
            </p>
          </div>
          <div>
            <p className="text-[13px] text-[#93A3B6]">
              Waktu Keluar (Estimasi)
            </p>
            <p className="text-[#FEF8FD] font-medium">
              18/12/2025, {selectedVehicle.exit}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between bg-blue-200 px-3.5 py-2 rounded-sm">
          <div className="flex items-center gap-x-2">
            <LuCalculator className="h-fit w-5" />
            <p className="text-[15px]">Durasi Parkir</p>
          </div>
          <p className="font-medium">{selectedVehicle.duration}</p>
        </div>
        <button
          className="bg-[#FFDB58] rounded-sm py-2 transition opacity-100 hover:opacity-80 cursor-pointer"
          onClick={setSelectedVehicle}
        >
          <div className="flex items-center gap-x-2 mx-auto w-fit">
            <LuArrowRightToLine className="h-fit w-5 text-[#130F40]" />
            <p className="text-[#130F40] font-medium">Konfirmasi Check-out</p>
          </div>
        </button>
      </div>
    </div>
  );
}
