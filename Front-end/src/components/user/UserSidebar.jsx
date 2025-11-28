import { NavLink } from "react-router-dom";

import UserFooter from "./UserFooter";

import { HiOutlineHome } from "react-icons/hi2";
import { FaCarSide, FaBell } from "react-icons/fa6";
import { IoQrCode, IoSettingsSharp } from "react-icons/io5";
import { RxCountdownTimer } from "react-icons/rx";

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
          <NavLink to="/user" end>
            {({ isActive }) => (
              <li
                className={`transition duration-300 ease-in-out px-3 py-2.5 rounded-md hover:bg-[#130f40] group ${
                  isActive ? "bg-[#130f40]" : "bg-transparent"
                }`}
              >
                <p
                  className={`pointer-events-auto cursor-pointer
                  font-medium flex items-center gap-x-2.5 transition duration-300 ease-in-out w-fit group-hover:text-[#FFEC78] ${
                    isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                  }`}
                >
                  <HiOutlineHome
                    className={`w-6 h-fit transition duration-300 ease-in-out group-hover:text-[#FFEC78] ${
                      isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                    }`}
                  />
                  Dashboard
                </p>
              </li>
            )}
          </NavLink>
          <NavLink to="/user/report-data">
            {({ isActive }) => (
              <li
                className={`transition duration-300 ease-in-out px-3 py-2.5 rounded-md hover:bg-[#130f40] group ${
                  isActive ? "bg-[#130f40]" : "bg-transparent"
                }`}
              >
                <p
                  className={`
                  font-medium flex items-center gap-x-2.5 transition duration-300 ease-in-out w-fit group-hover:text-[#FFEC78] ${
                    isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                  }`}
                >
                  <FaCarSide
                    className={`w-6 h-fit transition duration-300 ease-in-out group-hover:text-[#FFEC78] ${
                      isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                    }`}
                  />
                  Data Kendaraan
                </p>
              </li>
            )}
          </NavLink>
          <NavLink to="/user/my-qr-code">
            {({ isActive }) => (
              <li
                className={`transition duration-300 ease-in-out px-3 py-2.5 rounded-md hover:bg-[#130f40] group ${
                  isActive ? "bg-[#130f40]" : "bg-transparent"
                }`}
              >
                <p
                  className={`
                  font-medium flex items-center gap-x-2.5 transition duration-300 ease-in-out w-fit group-hover:text-[#FFEC78] ${
                    isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                  }`}
                >
                  <IoQrCode
                    className={`w-6 h-fit transition duration-300 ease-in-out group-hover:text-[#FFEC78] ${
                      isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                    }`}
                  />
                  QR Code Saya
                </p>
              </li>
            )}
          </NavLink>
          <NavLink to="/user/parking-history">
            {({ isActive }) => (
              <li
                className={`transition duration-300 ease-in-out px-3 py-2.5 rounded-md hover:bg-[#130f40] group ${
                  isActive ? "bg-[#130f40]" : "bg-transparent"
                }`}
              >
                <p
                  className={`
                  font-medium flex items-center gap-x-2.5 transition duration-300 ease-in-out w-fit group-hover:text-[#FFEC78] ${
                    isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                  }`}
                >
                  <RxCountdownTimer
                    className={`w-6 h-fit transition duration-300 ease-in-out group-hover:text-[#FFEC78] ${
                      isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                    }`}
                  />
                  Riwayat Parkir
                </p>
              </li>
            )}
          </NavLink>
          <NavLink to="/user/notifikasi">
            {({ isActive }) => (
              <li
                className={`transition duration-300 ease-in-out px-3 py-2.5 rounded-md hover:bg-[#130f40] group ${
                  isActive ? "bg-[#130f40]" : "bg-transparent"
                }`}
              >
                <p
                  className={`
                  font-medium flex items-center gap-x-2.5 transition duration-300 ease-in-out w-fit group-hover:text-[#FFEC78] ${
                    isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                  }`}
                >
                  <FaBell
                    className={`w-6 h-fit transition duration-300 ease-in-out group-hover:text-[#FFEC78] ${
                      isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                    }`}
                  />
                  Notifikasi
                </p>
              </li>
            )}
          </NavLink>
          <NavLink to="/user/user-profile">
            {({ isActive }) => (
              <li
                className={`transition duration-300 ease-in-out px-3 py-2.5 rounded-md hover:bg-[#130f40] group ${
                  isActive ? "bg-[#130f40]" : "bg-transparent"
                }`}
              >
                <p
                  className={`
                  font-medium flex items-center gap-x-2.5 transition duration-300 ease-in-out w-fit group-hover:text-[#FFEC78] ${
                    isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                  }`}
                >
                  <IoSettingsSharp
                    className={`w-6 h-fit transition duration-300 ease-in-out group-hover:text-[#FFEC78] ${
                      isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                    }`}
                  />
                  Akun Profile
                </p>
              </li>
            )}
          </NavLink>
        </ul>
        <UserFooter />
      </div>
    </aside>
  );
}
