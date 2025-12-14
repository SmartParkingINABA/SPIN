import { BiCheckDouble } from "react-icons/bi";
import { CgDanger } from "react-icons/cg";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";

export default function UserNotifikasi() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <h1 className="text-[#FEF8FD] text-2xl font-bold flex items-center gap-x-2">
        Notifikasi
        <span className="text-[#FEF8FD] text-[12px] bg-red-500 rounded-sm px-1 py-0.5">
          2 Baru
        </span>
      </h1>
      <div className="mt-1 flex items-center justify-between">
        <p className="text-[#93A3B6] font-medium">
          Pantau aktivitas kendaraan Anda
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
              <FaCarSide className="h-fit w-5 text-orange-400 mt-0.5" />
              <div className="">
                <p className="text-[#130F40]">B 1234 XYZ</p>
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
              Kendaraan telah keluar dari area parkir
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
              <MdOutlinePhoneAndroid className="h-fit w-5 text-blue-400 mt-0.5" />
              <div className="">
                <p className="text-[#130F40]">B 1234 XYZ</p>
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
            QR Code berhasil dibuat untuk kendaraan
          </p>
        </div>
        <div className="bg-green-100 px-6 py-4 rounded-md flex flex-col gap-y-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-x-2">
              <FaCarSide className="h-fit w-5 text-green-400 mt-0.5" />
              <div className="">
                <p className="text-[#130F40]">B 5678 ABC</p>
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
            Kendaraan telah masuk area parkir
          </p>
        </div>
        <div className="bg-blue-100 px-6 py-4 rounded-md flex flex-col gap-y-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-x-2">
              <CgDanger className="h-fit w-5 text-blue-400 mt-0.5" />
              <div className="">
                <p className="text-[#130F40]">
                  Selamat datang di sistem parkir! Silakan tambahkan kendaraan
                  Anda
                </p>
                <p className="text-[14px] text-[#93A3B6]">
                  17 Nov 2025 • 15:00 WIB
                </p>
              </div>
            </div>
            {/* <p className="rounded-sm px-[7px] py-0.5 bg-[#130F40] text-[14px] text-[#FEF8FD]">
                  Baru
                </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
