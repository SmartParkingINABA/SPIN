import { BiCheckDouble } from "react-icons/bi";
import UserDropdownNotifikasi from "../../components/user/UserDropdownNotifikasi";
import { FaCarSide, FaRegBell } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlinePhoneAndroid } from "react-icons/md";

export default function UserNotifikasi() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <h1 className="text-[#FEF8FD] text-2xl font-bold">Notifikasi</h1>
      <div className="mt-1 flex items-center justify-between">
        <p className="text-[#93A3B6] font-medium flex items-center gap-x-2">
          Pantau aktivitas kendaraan Anda{" "}
          <span className="text-[#FEF8FD] text-[10px] bg-red-500 rounded-sm px-1 py-0.5">
            2 Baru
          </span>
        </p>
        <button className="flex items-center gap-x-2 border border-transparent bg-[#93A3B6] py-1 px-1.5 rounded-sm cursor-pointer transition opacity-100 hover:opacity-80">
          <BiCheckDouble className="h-fit w-5 text-[#130F40]" />
          <p className="text-[#130F40] text-[14px]">
            Tandai Semua Telah Dibaca
          </p>
        </button>
      </div>
      <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md py-5 px-6 mt-6">
        <UserDropdownNotifikasi selectedOption={"Semua Notifikasi"} />
      </div>
      <div className="bg-[rgba(147,163,182,0.26)] border border-transparent rounded-md py-5 px-6 mt-6 flex justify-between">
        <div className="flex flex-col gap-y-4.5">
          <div className="flex items-center gap-x-3">
            <div className="bg-[#4B4141] rounded-full p-3 flex justify-center items-center">
              <FaCarSide className="text-[#FFEC78] w-6 h-fit" />
            </div>
            <div>
              <p className="text-[#FEF8FD] text-[15px]">
                Kendaraan telah keluar dari area parkir
              </p>
              <p className="text-[#FFEC78] font-medium">B 1234 XYZ</p>
            </div>
          </div>
          <p className="text-[#93A3B6] text-[15px]">14 Nov 2025 • 14:30</p>
        </div>
        <div className="flex flex-col items-end justify-between">
          <GoDotFill className="h-fit w-4.5 text-yellow-400" />
          <div className="flex items-center gap-x-8">
            <button className="flex items-center gap-x-1.5 cursor-pointer">
              <IoMdCheckmark className="h-fit w-4.5 text-[#93A3B6]" />
              <p className="text-[15px] text-[#93A3B6]">Tandai Telah Dibaca</p>
            </button>
            <button className="cursor-pointer">
              <FaRegTrashAlt className="h-fit w-4.5 text-red-500" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(147,163,182,0.26)] border border-transparent rounded-md py-5 px-6 mt-6 flex justify-between">
        <div className="flex flex-col gap-y-4.5">
          <div className="flex items-center gap-x-3">
            <div className="bg-[#4B4141] rounded-full p-3 flex justify-center items-center">
              <FaCarSide className="text-[#FFEC78] w-6 h-fit" />
            </div>
            <div>
              <p className="text-[#FEF8FD] text-[15px]">
                Kendaraan telah Masuk ke area parkir
              </p>
              <p className="text-[#FFEC78] font-medium">B 1234 XYZ</p>
            </div>
          </div>
          <p className="text-[#93A3B6] text-[15px]">14 Nov 2025 • 14:30</p>
        </div>
        <div className="flex flex-col items-end justify-between">
          <GoDotFill className="h-fit w-4.5 text-yellow-400" />
          <div className="flex items-center gap-x-8">
            <button className="flex items-center gap-x-1.5 cursor-pointer">
              <IoMdCheckmark className="h-fit w-4.5 text-[#93A3B6]" />
              <p className="text-[15px] text-[#93A3B6]">Tandai Telah Dibaca</p>
            </button>
            <button className="cursor-pointer">
              <FaRegTrashAlt className="h-fit w-4.5 text-red-500" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md py-5 px-6 mt-6 flex justify-between items-end">
        <div className="flex flex-col gap-y-4.5">
          <div className="flex items-center gap-x-3">
            <div className="bg-[#4B4141] rounded-full p-3 flex justify-center items-center">
              <MdOutlinePhoneAndroid className="text-[#FFEC78] w-6 h-fit" />
            </div>
            <div>
              <p className="text-[#FEF8FD] text-[15px]">
                QR Code berhasil dibuat untuk kendaraan
              </p>
              <p className="text-[#FFEC78] font-medium">B 1234 XYZ</p>
            </div>
          </div>
          <p className="text-[#93A3B6] text-[15px]">14 Nov 2025 • 14:30</p>
        </div>
        <div className="flex flex-col items-end justify-between">
          <button className="cursor-pointer">
            <FaRegTrashAlt className="h-fit w-4.5 text-red-500" />
          </button>
        </div>
      </div>
      <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md py-5 px-6 mt-6 flex justify-between items-end">
        <div className="flex flex-col gap-y-4.5">
          <div className="flex items-center gap-x-3">
            <div className="bg-[#4B4141] rounded-full p-3 flex justify-center items-center">
              <FaCarSide className="text-[#FFEC78] w-6 h-fit" />
            </div>
            <div>
              <p className="text-[#FEF8FD] text-[15px]">
                Kendaraan telah Masuk ke area parkir
              </p>
              <p className="text-[#FFEC78] font-medium">B 1234 XYZ</p>
            </div>
          </div>
          <p className="text-[#93A3B6] text-[15px]">14 Nov 2025 • 14:30</p>
        </div>
        <div className="flex flex-col items-end justify-between">
          <button className="cursor-pointer">
            <FaRegTrashAlt className="h-fit w-4.5 text-red-500" />
          </button>
        </div>
      </div>
      <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md py-5 px-6 mt-6 flex justify-between items-end">
        <div className="flex items-center gap-x-3">
          <div className="bg-[#4B4141] rounded-full p-3 flex justify-center items-center">
            <FaRegBell className="text-[#FFEC78] w-6 h-fit" />
          </div>
          <div className="flex flex-col gap-y-3">
            <p className="text-[#FEF8FD] text-[15px]">
              Selamat datang di sistem parkir! Silakan tambahkan kendaraan Anda
            </p>
            <p className="text-[#93A3B6] text-[15px]">14 Nov 2025 • 14:30</p>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between">
          <button className="cursor-pointer">
            <FaRegTrashAlt className="h-fit w-4.5 text-red-500" />
          </button>
        </div>
      </div>
    </section>
  );
}
