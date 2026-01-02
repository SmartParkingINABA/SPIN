import { FaArrowLeftLong, FaArrowRightLong, FaRegClock } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { LuCar, LuCreditCard } from "react-icons/lu";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

export default function RegisteredVehicle({
  scanResult,
  actionsStatus,
  vehicleStatus,
  handleIn,
  handleExit,
}) {
  return (
    <>
      {scanResult && !actionsStatus && (
        <div className="mt-3.5">
          <div className="flex justify-between items-center border border-green-400 bg-green-100 rounded-sm px-4 py-3 mb-4">
            <div className="flex items-center gap-x-2.5">
              <FiCheckCircle className="h-fit w-5 text-green-400" />
              <p className="text-[#48515b] font-medium">QR Valid & Terdaftar</p>
            </div>
            <p className="bg-[#130F40] text-[#FEF8FD] rounded-sm px-3.5 py-0.5">
              aktif
            </p>
          </div>
          <div className="flex items-start gap-x-2.5 mb-4">
            <LuCreditCard className="h-fit w-5.5 text-[#93A3B6] mt-0.5" />
            <div>
              <p className="text-[#93A3B6] font-medium">ID QR Code</p>
              <p className="text-[#FEF8FD] font-medium">{scanResult.id}</p>
            </div>
          </div>
          <div className="flex items-start gap-x-2.5 mb-4">
            <LuCar className="h-fit w-5.5 text-[#93A3B6] mt-0.5" />
            <div>
              <p className="text-[#93A3B6] font-medium">Plat Nomor</p>
              <p className="text-[#FEF8FD] font-medium">
                {scanResult.number_plate}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-2.5 mb-4">
            <IoPersonOutline className="h-fit w-5.5 text-[#93A3B6] mt-0.5" />
            <div>
              <p className="text-[#93A3B6] font-medium">Nama Pengendara</p>
              <p className="text-[#FEF8FD] font-medium">{scanResult.name}</p>
            </div>
          </div>
          <div className="flex items-start gap-x-2.5 mb-4">
            <LuCar className="h-fit w-5.5 text-[#93A3B6] mt-0.5" />
            <div>
              <p className="text-[#93A3B6] font-medium">Jenis Kendaraan</p>
              <p className="text-[#FEF8FD] font-medium">
                {scanResult.vehicle_type}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-2.5 mb-4">
            <FaRegClock className="h-fit w-5.5 text-[#93A3B6] mt-0.5" />
            <div>
              <p className="text-[#93A3B6] font-medium">Terdaftar Sejak</p>
              <p className="text-[#FEF8FD] font-medium">
                {scanResult.registered_since}
              </p>
            </div>
          </div>
          <div className="border border-blue-400 bg-blue-100 rounded-sm px-4 py-3 mb-6">
            <p className="text-[#48515b]">Status Kendaraan Saat Ini</p>
            {vehicleStatus === "outside" && (
              <p className="text-[#48515b]">
                <span className="bg-[#48515b] text-[#FEF8FD] rounded-sm px-2 py-0.5">
                  Di Luar Parkir
                </span>{" "}
                Gunakan tombol "Konfirmasi Masuk"
              </p>
            )}

            {vehicleStatus === "inside" && (
              <p className="text-[#48515b]">
                <span className="bg-orange-500 text-[#FEF8FD] rounded-sm px-2 py-0.5">
                  Di Dalam Parkir
                </span>{" "}
                Gunakan tombol "Konfirmasi Keluar"
              </p>
            )}
          </div>
          <div className="flex flex-col gap-y-3 mb-3.5">
            <button
              className={`bg-green-500 flex rounded-sm py-2 transition ${
                vehicleStatus === "inside"
                  ? "opacity-80 cursor-not-allowed"
                  : "opacity-100"
              } hover:opacity-80`}
              onClick={handleIn}
            >
              <div className="flex items-center gap-x-3 text-[#FEF8FD] mx-auto">
                <FaArrowRightLong className="w-5 h-fit" />
                <p>Konfirmasi Masuk</p>
              </div>
            </button>
            <button
              className={`bg-blue-500 flex rounded-sm py-2 transition ${
                vehicleStatus === "outside"
                  ? "opacity-80 cursor-not-allowed"
                  : "opacity-100"
              } hover:opacity-80`}
              onClick={handleExit}
            >
              <div className="flex items-center gap-x-3 text-[#FEF8FD] mx-auto">
                <FaArrowLeftLong className="w-5 h-fit" />
                <p>Konfirmasi Keluar</p>
              </div>
            </button>
          </div>
          <p className="text-[12px] text-[#FEF8FD] flex items-center gap-x-1.5 mx-auto w-fit">
            <MdOutlineTipsAndUpdates className="w-3 h-fit text-[#FFDB58]" />
            Mahasiswa akan menerima notifikasi otomatis setelah konfirmasi
          </p>
        </div>
      )}
    </>
  );
}
