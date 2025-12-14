import { IoWarningOutline } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline, IoMdCheckmark } from "react-icons/io";
import { CgDanger } from "react-icons/cg";
import { FaRegCheckCircle, FaRegTrashAlt } from "react-icons/fa";
import { BiCheckDouble } from "react-icons/bi";

export default function OfficerNotifikasi() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <h1 className="text-[#FEF8FD] text-2xl font-bold flex items-center gap-x-2">
        Notifikasi Sistem
        <span className="text-[#FEF8FD] text-[12px] bg-red-500 rounded-sm px-1 py-0.5">
          2 Baru
        </span>
      </h1>
      <div className="mt-1 flex items-center justify-between">
        <p className="text-[#93A3B6] font-medium">
          Peringatan dan pesan penting dari sistem
        </p>
        <button className="flex items-center gap-x-2 border border-transparent bg-[#93A3B6] py-1 px-1.5 rounded-sm cursor-pointer transition opacity-100 hover:opacity-80">
          <BiCheckDouble className="h-fit w-5 text-[#130F40]" />
          <p className="text-[#130F40] text-[14px]">
            Tandai Semua Telah Dibaca
          </p>
        </button>
      </div>
      <div className="mt-6 flex flex-col gap-y-3.5">
        <div className="bg-[#F5E79E] px-6 py-4 rounded-md flex flex-col gap-y-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-x-2">
              <IoWarningOutline className="h-fit w-5 text-orange-400 mt-0.5" />
              <div className="">
                <p className="text-[#130F40]">Area Parkir Hampir Penuh</p>
                <p className="text-[14px] text-[#93A3B6]">
                  18 Nov 2025 • 10:30 WIB
                </p>
              </div>
            </div>
            <p className="rounded-sm px-[7px] py-0.5 bg-[#130F40] text-[14px] text-[#FEF8FD]">
              Baru
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[14px] text-[#130F40]">
              Kapasitas parkir motor mencapai 85%. Harap siapkan alternatif area
              parkir.
            </p>
            <button className="flex items-center gap-x-1.5 cursor-pointer">
              <IoMdCheckmark className="h-fit w-4.5 text-[#808080]" />
              <p className="text-[14px] text-[#808080]">Tandai Telah Dibaca</p>
            </button>
          </div>
        </div>
        <div className="bg-red-100 px-6 py-4 rounded-md flex flex-col gap-y-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-x-2">
              <CgDanger className="h-fit w-5 text-red-400 mt-0.5" />
              <div className="">
                <p className="text-[#130F40]">Kendaraan Tidak Terdaftar</p>
                <p className="text-[14px] text-[#93A3B6]">
                  18 Nov 2025 • 09:45 WIB
                </p>
              </div>
            </div>
            <p className="rounded-sm px-[7px] py-0.5 bg-[#130F40] text-[14px] text-[#FEF8FD]">
              Baru
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[14px] text-[#130F40]">
              QR Code dengan ID QR-2024-999 tidak ditemukan dalam sistem.
            </p>
            <button className="flex items-center gap-x-1.5 cursor-pointer">
              <IoMdCheckmark className="h-fit w-4.5 text-[#808080]" />
              <p className="text-[14px] text-[#808080]">Tandai Telah Dibaca</p>
            </button>
          </div>
        </div>
        <div className="bg-blue-100 px-6 py-4 rounded-md flex flex-col gap-y-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-x-2">
              <CgDanger className="h-fit w-5 text-blue-400 mt-0.5" />
              <div className="">
                <p className="text-[#130F40]">Update Sistem</p>
                <p className="text-[14px] text-[#93A3B6]">
                  18 Nov 2025 • 08:00 WIB
                </p>
              </div>
            </div>
            {/* <p className="rounded-sm px-[7px] py-0.5 bg-[#130F40] text-[14px] text-[#FEF8FD]">
              Baru
            </p> */}
          </div>
          <p className="text-[14px] text-[#130F40]">
            Sistem parkir akan diperbarui pada 20 November 2025 pukul 01:00 WIB.
          </p>
        </div>
        <div className="bg-green-100 px-6 py-4 rounded-md flex flex-col gap-y-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-x-2">
              <IoIosCheckmarkCircleOutline className="h-fit w-5 text-green-400 mt-0.5" />
              <div className="">
                <p className="text-[#130F40]">Shift Dimulai</p>
                <p className="text-[14px] text-[#93A3B6]">
                  18 Nov 2025 • 07:00 WI
                </p>
              </div>
            </div>
            {/* <p className="rounded-sm px-[7px] py-0.5 bg-[#130F40] text-[14px] text-[#FEF8FD]">
              Baru
            </p> */}
          </div>
          <p className="text-[14px] text-[#130F40]">
            Anda telah berhasil memulai shift pagi (07:00 - 15:00).
          </p>
        </div>
        <div className="bg-[#F5E79E] px-6 py-4 rounded-md flex flex-col gap-y-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-x-2">
              <IoWarningOutline className="h-fit w-5 text-orange-400 mt-0.5" />
              <div className="">
                <p className="text-[#130F40]">Kendaraan Parkir Lama</p>
                <p className="text-[14px] text-[#93A3B6]">
                  17 Nov 2025 • 16:30 WIB
                </p>
              </div>
            </div>
            {/* <p className="rounded-sm px-[7px] py-0.5 bg-[#130F40] text-[14px] text-[#FEF8FD]">
              Baru
            </p> */}
          </div>
          <p className="text-[14px] text-[#130F40]">
            Kendaraan B 1234 ABC sudah parkir lebih dari 8 jam. Harap periksa.
          </p>
        </div>
        <div className="bg-blue-100 px-6 py-4 rounded-md flex flex-col gap-y-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-x-2">
              <CgDanger className="h-fit w-5 text-blue-400 mt-0.5" />
              <div className="">
                <p className="text-[#130F40]">Pesan dari Admin</p>
                <p className="text-[14px] text-[#93A3B6]">
                  17 Nov 2025 • 15:00 WIB
                </p>
              </div>
            </div>
            {/* <p className="rounded-sm px-[7px] py-0.5 bg-[#130F40] text-[14px] text-[#FEF8FD]">
              Baru
            </p> */}
          </div>
          <p className="text-[14px] text-[#130F40]">
            Harap pastikan semua kendaraan yang masuk telah terdaftar dengan
            benar.
          </p>
        </div>
      </div>
    </section>
  );
}
