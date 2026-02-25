import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";

export default function WorkInformation() {
  return (
    <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md w-2/3">
      <p className="text-[#FEF8FD] font-medium">Informasi Kerja</p>
      <div className="flex items-center gap-x-2 my-3.5">
        <IoTimeOutline className="h-fit w-6.5 text-[#93A3B6]" />
        <div>
          <p className="text-[#93A3B6] text-[14px]">Shift Kerja</p>
          <p className="text-[#FEF8FD]">Pagi</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <CiLocationOn className="h-fit w-6.5 text-[#93A3B6]" />
        <div>
          <p className="text-[#93A3B6] text-[14px]">Lokasi Kerja</p>
          <p className="text-[#FEF8FD]">Gerbang Utama - Area A</p>
        </div>
      </div>
    </div>
  );
}
