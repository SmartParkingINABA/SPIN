import { IoQrCode } from "react-icons/io5";

export default function Information() {
  return (
    <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md p-5 sm:p-6 mt-4 sm:mt-6">
      <p className="text-[#FEF8FD] text-[16px] sm:text-[18px] font-semibold mb-3.5">
        Informasi
      </p>
      <div className="flex items-center gap-x-2.5 mb-4">
        <IoQrCode className="text-[#FFEC78] w-5 h-fit" />
        <p className="text-[#93A3B6] font-medium text-[12px] sm:text[16px]">
          QR Code unik per kendaraan.
        </p>
      </div>
      <div className="flex items-center gap-x-2.5">
        <IoQrCode className="text-[#FFEC78] w-5 h-fit" />
        <p className="text-[#93A3B6] font-medium text-[12px] sm:text[16px]">
          Dapat diunduh ulang kapan saja.
        </p>
      </div>
    </div>
  );
}
