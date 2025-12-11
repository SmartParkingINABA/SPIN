import { Link } from "react-router-dom";
import { IoQrCode } from "react-icons/io5";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

export default function UserDashboard() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[#FEF8FD] text-2xl font-bold">
            Dashboard Petugas
          </h1>
          <p className="text-[#93A3B6] font-medium mt-1">
            Selamat datang, <span>Nama Petugas</span>
          </p>
        </div>
        <Link
          to={"/officer/scan-qr-code"}
          className="bg-[#FFDB58] flex items-center gap-x-2 px-4 py-2.5 rounded-sm transition opacity-100 hover:opacity-80"
        >
          <IoQrCode className="text-[#130F40] w-5 h-fit" />
          <p className="text-[#130F40] font-medium">Mulai Scan</p>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-x-6 mb-6">
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-8 px-6 py-4 rounded-md">
          <div className="flex items-center justify-between w-full">
            <p className="text-[#93A3B6] font-medium">Kendaraan Masuk</p>
            <FaArrowDown className="text-green-500 w-4 h-fit" />
          </div>
          <div>
            <p className="text-green-500 font-semibold">24</p>
            <p className="text-[#93A3B6] text-[14px]">Hari ini</p>
          </div>
        </div>
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-8 px-6 py-4 rounded-md">
          <div className="flex items-center justify-between w-full">
            <p className="text-[#93A3B6] font-medium">Sedang Parkir</p>
            <MdAccessTime className="text-yellow-500 w-4 h-fit" />
          </div>
          <div>
            <p className="text-yellow-500 font-semibold">19</p>
            <p className="text-[#93A3B6] text-[14px]">Hari ini</p>
          </div>
        </div>
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-8 px-6 py-4 rounded-md">
          <div className="flex items-center justify-between w-full">
            <p className="text-[#93A3B6] font-medium">Kendaraan Keluar</p>
            <FaArrowUp className="text-blue-500 w-4 h-fit" />
          </div>
          <div>
            <p className="text-blue-500 font-semibold">5</p>
            <p className="text-[#93A3B6] text-[14px]">Hari ini</p>
          </div>
        </div>
      </div>
      <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] rounded-md px-6 py-4">
        <p className="text-[#FEF8FD] text-[18px] font-medium">
          Aktivitas Terakhir
        </p>
        <div className="flex items-center justify-between mt-3.5">
          <div className="flex items-center gap-x-3">
            <GoDotFill className="text-green-500 w-4 h-fit" />
            <div>
              <p className="text-[#FEF8FD] font-medium">B 1234 ABC - Masuk</p>
              <p className="text-[#93A3B6] text-[14px]">Rizky Pratama</p>
            </div>
          </div>
          <p className="text-[#93A3B6]">10:45 WIB</p>
        </div>
        <div className="flex items-center justify-between mt-3.5">
          <div className="flex items-center gap-x-3">
            <GoDotFill className="text-green-500 w-4 h-fit" />
            <div>
              <p className="text-[#FEF8FD] font-medium">B 1234 ABC - Masuk</p>
              <p className="text-[#93A3B6] text-[14px]">Rizky Pratama</p>
            </div>
          </div>
          <p className="text-[#93A3B6]">10:45 WIB</p>
        </div>
        <div className="flex items-center justify-between mt-3.5">
          <div className="flex items-center gap-x-3">
            <GoDotFill className="text-blue-500 w-4 h-fit" />
            <div>
              <p className="text-[#FEF8FD] font-medium">B 1234 ABC - Keluar</p>
              <p className="text-[#93A3B6] text-[14px]">Rizky Pratama</p>
            </div>
          </div>
          <p className="text-[#93A3B6]">10:45 WIB</p>
        </div>
        <div className="flex items-center justify-between mt-3.5">
          <div className="flex items-center gap-x-3">
            <GoDotFill className="text-blue-500 w-4 h-fit" />
            <div>
              <p className="text-[#FEF8FD] font-medium">B 1234 ABC - Keluar</p>
              <p className="text-[#93A3B6] text-[14px]">Rizky Pratama</p>
            </div>
          </div>
          <p className="text-[#93A3B6]">10:45 WIB</p>
        </div>
      </div>
    </section>
  );
}
