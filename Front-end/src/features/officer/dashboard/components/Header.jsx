import { Link } from "react-router-dom";
import { IoQrCode } from "react-icons/io5";

export default function Header({ user }) {
  return (
    <div className="flex items-center justify-between mb-4 sm:mb-6">
      <div>
        <h1 className="text-[#FEF8FD] text-[18px] sm:text-2xl font-bold">
          Dashboard Petugas
        </h1>
        <p className="text-[#93A3B6] text-[14px] sm:text-[18px] font-medium sm:mt-1">
          Selamat datang, <span>{user?.displayName}</span>
        </p>
      </div>
      <Link
        to={"/petugas/scan-qr-code"}
        className="bg-[#FFDB58] inline-flex items-center gap-x-2 py-2 px-3 rounded-sm transition opacity-100 hover:opacity-80"
      >
        <IoQrCode className="text-[#130F40] w-4 sm:w-5 h-fit" />
        <p className="text-[#130F40] font-medium text-[14px] sm:text-[18px]">
          Mulai Scan
        </p>
      </Link>
    </div>
  );
}
