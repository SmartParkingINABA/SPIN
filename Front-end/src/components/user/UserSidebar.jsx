import HomeIcon from "../../assets/images/user/homeIcon.svg?react";
import CarIcon from "../../assets/images/user/carIcon.svg?react";
import QrIcon from "../../assets/images/user/qrIcon.svg?react";
import TimeIcon from "../../assets/images/user/timeIcon.svg?react";
import BellIcon from "../../assets/images/user/bellIcon.svg?react";
import GearIcon from "../../assets/images/user/gearIcon.svg?react";
import UserFooter from "./UserFooter";

export default function UserSidebar() {
  return (
    <aside className="border border-[rgba(255,236,120,0.5)] border-l-0 bg-[#1E1633] fixed bottom-0 left-0 z-40 w-[17%] h-screen flex flex-col">
      <div className="flex flex-col items-center py-4">
        <div>
          <h1 className="text-[#FFEC78] font-bold text-2xl">SPIN</h1>
          <p className="text-[14px] text-[#93A3B6] font-semibold">
            Dasboard Pengendara
          </p>
        </div>
      </div>
      <div className="border-t border-t-[rgba(255,236,120,0.5)] flex flex-col justify-between grow">
        <ul className="py-6 px-5 flex flex-col gap-y-1">
          <li className="has-[a:hover]:bg-[#130F40] transition duration-300 ease-in-out px-3 py-2.5 rounded-md">
            <a
              href="#"
              className="font-medium text-[#FEF8FD] flex items-center gap-x-2.5 transition duration-300 ease-in-out hover:text-[#FFEC78] w-fit group"
            >
              <HomeIcon className="w-5 text-[#FEF8FD] transition duration-300 ease-in-out group-hover:text-[#FFEC78] h-fit" />
              Dashboard
            </a>
          </li>
          <li className="has-[a:hover]:bg-[#130F40] transition duration-300 ease-in-out px-3 py-2.5 rounded-md">
            <a
              href="#"
              className="font-medium text-[#FEF8FD] flex items-center gap-x-2.5 transition duration-300 ease-in-out hover:text-[#FFEC78] w-fit group"
            >
              <CarIcon className="w-5 text-[#FEF8FD] transition duration-300 ease-in-out group-hover:text-[#FFEC78] h-fit" />
              Data Kendaraan
            </a>
          </li>
          <li className="has-[a:hover]:bg-[#130F40] transition duration-300 ease-in-out px-3 py-2.5 rounded-md">
            <a
              href="#"
              className="font-medium text-[#FEF8FD] flex items-center gap-x-2.5 transition duration-300 ease-in-out hover:text-[#FFEC78] w-fit group"
            >
              <QrIcon className="w-5 text-[#FEF8FD] transition duration-300 ease-in-out group-hover:text-[#FFEC78] h-fit" />
              QR Code Saya
            </a>
          </li>
          <li className="has-[a:hover]:bg-[#130F40] transition duration-300 ease-in-out px-3 py-2.5 rounded-md">
            <a
              href="#"
              className="font-medium text-[#FEF8FD] flex items-center gap-x-2.5 transition duration-300 ease-in-out hover:text-[#FFEC78] w-fit group"
            >
              <TimeIcon className="w-5 text-[#FEF8FD] transition duration-300 ease-in-out group-hover:text-[#FFEC78] h-fit" />
              Riwayat Parkir
            </a>
          </li>
          <li className="has-[a:hover]:bg-[#130F40] transition duration-300 ease-in-out px-3 py-2.5 rounded-md">
            <a
              href="#"
              className="font-medium text-[#FEF8FD] flex items-center gap-x-2.5 transition duration-300 ease-in-out hover:text-[#FFEC78] w-fit group"
            >
              <BellIcon className="w-5 text-[#FEF8FD] transition duration-300 ease-in-out group-hover:text-[#FFEC78] h-fit" />
              Notifikasi
            </a>
          </li>
          <li className="has-[a:hover]:bg-[#130F40] transition duration-300 ease-in-out px-3 py-2.5 rounded-md">
            <a
              href="#"
              className="font-medium text-[#FEF8FD] flex items-center gap-x-2.5 transition duration-300 ease-in-out hover:text-[#FFEC78] w-fit group"
            >
              <GearIcon className="w-5 text-[#FEF8FD] transition duration-300 ease-in-out group-hover:text-[#FFEC78] h-fit" />
              Akun Profile
            </a>
          </li>
        </ul>
        <UserFooter />
      </div>
    </aside>
  );
}
