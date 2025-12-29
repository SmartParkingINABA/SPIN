import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdDoNotDisturb } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { LuCar } from "react-icons/lu";

export default function Profile({ rider }) {
  return (
    <div className="flex items-center gap-x-3.5">
      <div className="bg-blue-100 rounded-sm p-2.5">
        <FiUsers className="text-blue-600 w-6.5 h-fit" />
      </div>
      <div className="">
        <div className="flex items-center gap-x-2">
          <p className="text-[#FEF8FD] font-medium">{rider.name}</p>
          <div
            className={`flex items-center gap-x-0.5 ${
              rider.isActive ? "bg-[#93A3B6]" : "bg-green-200"
            } rounded-sm px-2 py-0.5`}
          >
            {rider.isActive ? (
              <>
                <MdDoNotDisturb className="text-[#130F40] w-3.5 h-fit" />
                <p className="text-[#130F40] font-medium text-[12px]">
                  Non-aktif
                </p>
              </>
            ) : (
              <>
                <IoIosCheckmarkCircleOutline className="text-green-500 w-3.5 h-fit" />
                <p className="text-green-500 font-medium text-[12px]">Aktif</p>
              </>
            )}
          </div>
        </div>
        <div className="text-[14px]">
          <p className="text-[#93A3B6]">joko.w@parking.com</p>
          <p className="text-[#93A3B6]">081234111222</p>
        </div>
        <div className="flex items-center gap-x-1.5 mt-1">
          <div className="flex items-center gap-x-1.5 bg-yellow-200 rounded-sm px-2 py-0.5 font-medium">
            <LuCar className="h-fit w-4 text-[#130F40" />
            <p className="text-[#130F40 text-[12px]">2 Kendaraan</p>
          </div>
          <p className="text-[#93A3B6] text-[13px]">Terdaftar: 15/1/2024</p>
        </div>
      </div>
    </div>
  );
}
