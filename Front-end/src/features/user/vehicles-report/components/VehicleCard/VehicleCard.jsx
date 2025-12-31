import { BiSolidEdit } from "react-icons/bi";
import { FaCarSide, FaMotorcycle, FaTrashCan } from "react-icons/fa6";
import { IoQrCode } from "react-icons/io5";
import BarIcon from "../../../../../assets/images/user/barIcon.svg?react";

export default function VehicleCard({ vehicle }) {
  const {
    plate,
    category,
    brand,
    cc,
    year,
    validUntil,
    status,
    hasQr,
    iconType,
  } = vehicle;
  const Icon = iconType === "car" ? FaCarSide : FaMotorcycle;

  return (
    <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] rounded-md p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <div className="bg-[#4B4141] rounded-sm p-3">
            <Icon className="text-[#FFEC78] w-6 h-fit" />
          </div>
          <div className="">
            <p className="text-[#FEF8FD] text-[14px] font-medium">{plate}</p>
            <p className="text-[#93A3B6] text-[12px] font-medium">{category}</p>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <BiSolidEdit className="w-6 h-fit text-[#93A3B6] transition duration-300 ease-in-out hover:text-[#FFEC78]" />
          <FaTrashCan className="w-5 h-fit text-[#B90404] transition duration-300 ease-in-out hover:text-[#FFEC78]" />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-5">
        <div className="flex flex-col gap-y-3">
          <Info label="Merk" value={brand} />
          <Info label="CC" value={cc} />
        </div>
        <div className="flex flex-col gap-y-3">
          <Info label="Tahun" value={year} />
          <Info label="Berlaku Sampai" value={validUntil} />
        </div>
      </div>
      <BarIcon className="w-full mt-5" />
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center gap-x-3">
          <IoQrCode className="text-[#FFEC78] w-5 h-fit" />
          <p className="text-[#FEF8FD] text-[14px] font-medium">
            {hasQr ? "QR Code Tersedia" : "QR Code Tidak Ada"}
          </p>
        </div>
        <p className="text-[#FFEC78] bg-[#4B4141] text-[10px] px-3 py-1 rounded-sm font-medium">
          {status}
        </p>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-[#93A3B6] text-[12px] font-medium">{label}</p>
      <p className="text-[#FEF8FD] text-[14px] font-medium">{value}</p>
    </div>
  );
}
