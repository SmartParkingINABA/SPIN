import UserDropdown from "../../components/user/UserDropdownHistory";

import { IoQrCode } from "react-icons/io5";
import { FaDownload, FaPrint } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function UserQRCode() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <h1 className="text-[#FEF8FD] text-2xl font-bold">QR Code Saya</h1>
      <p className="text-[#93A3B6] font-medium mt-1">
        QR Code untuk kendaraan anda
      </p>
      <div className="mt-5 flex items-start gap-x-5">
        <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md p-6 w-[70%]">
          <h2 className="text-[#FEF8FD] text-[18px] font-semibold mb-2">
            QR Code Kendaraan
          </h2>
          <p className="text-[#93A3B6] font-medium mb-2">Pilih Kendaraan</p>
          <UserDropdown selectedOption={"Semua Kendaraan"} />
          <div className="mt-12 border border-[#FFEC78] bg-[#FEF8FD] w-2/5 h-[412px] mx-auto rounded-xl flex items-center justify-center">
            <div className="">
              <IoQrCode className="w-45 mx-auto h-fit mb-8" />
              <p className="text-[#1E1633] text-center font-semibold">
                D 1234 XYZ
              </p>
              <p className="text-[#93A3B6] text-center text-[12px] font-medium -mt-1">
                Toyota Avanza
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6 mt-20">
            <button className="bg-[#FFDB58] rounded-md border-0 py-2.5 transition cursor-pointer opacity-100 hover:opacity-80">
              <div className="flex items-center gap-x-2.5 mx-auto w-fit">
                <FaDownload className="h-fit w-5" />
                <span className="font-medium text-[#1E1633]">
                  Download QR Code
                </span>
              </div>
            </button>
            <button className="bg-[#FFDB58] rounded-md border-0 py-2.5 transition cursor-pointer opacity-100 hover:opacity-80">
              <div className="flex items-center gap-x-2.5 mx-auto w-fit">
                <FaPrint className="h-fit w-5" />
                <span className="font-medium text-[#1E1633]">
                  Cetak QR Code
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md p-6">
            <p className="text-[#FEF8FD] text-[18px] font-semibold mb-3.5">
              Cara Menggunakan
            </p>
            <div className="flex items-start gap-x-3 mb-3.5">
              <p className="px-3 py-1 text-[#FFEC78] bg-[#4B4141] font-semibold rounded-full">
                1
              </p>
              <div>
                <p className="text-[#FEF8FD] font-semibold">Pilih Kendaraan</p>
                <p className="text-[#93A3B6] font-medium">
                  Pilih kendaraan yang ingin ditampilkan QR Code-nya.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-x-3 mb-3.5">
              <p className="px-3 py-1 text-[#FFEC78] bg-[#4B4141] font-semibold rounded-full">
                2
              </p>
              <div>
                <p className="text-[#FEF8FD] font-semibold">Unduh atau Cetak</p>
                <p className="text-[#93A3B6] font-medium">
                  Simpan QR Code atau Cetak untuk dipasang di kendaraan.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-x-3">
              <p className="px-3 py-1 text-[#FFEC78] bg-[#4B4141] font-semibold rounded-full">
                3
              </p>
              <div>
                <p className="text-[#FEF8FD] font-semibold">Scan Saat Parkir</p>
                <p className="text-[#93A3B6] font-medium">
                  Petugas akan scan QR Code anda saat masuk/keluar parkir.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md p-6 mt-5">
            <p className="text-[#FEF8FD] text-[18px] font-semibold mb-3.5">
              Informasi
            </p>
            <div className="flex items-center gap-x-2.5 mb-4">
              <IoQrCode className="text-[#FFEC78] w-5 h-fit" />
              <p className="text-[#93A3B6] font-medium">
                QR Code unik per kendaraan.
              </p>
            </div>
            <div className="flex items-center gap-x-2.5">
              <IoQrCode className="text-[#FFEC78] w-5 h-fit" />
              <p className="text-[#93A3B6] font-medium">
                Dapat diunduh ulang kapan saja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
