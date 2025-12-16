import { NavLink } from "react-router-dom";

import { HiOutlineHome, HiOutlineUserCircle } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import SidebarFooter from "../SidebarFooter";
import {
  LuArrowLeftToLine,
  LuArrowRightToLine,
  LuCar,
  LuCircleParking,
  LuUserCog,
} from "react-icons/lu";
import { TbReportAnalytics } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function OfficerSidebar() {
  return (
    <aside className="border border-[rgba(255,236,120,0.5)] border-l-0 border-t-0 bg-[#1E1633] fixed top-[60px] left-0 z-40 w-[17%] h-[calc(100vh-60px)] flex flex-col">
      <div className="flex flex-col items-center py-4">
        <div>
          <h1 className="text-[#FFEC78] font-bold text-2xl">SPIN</h1>
          <p className="text-[14px] text-[#93A3B6] font-semibold">
            Dasboard Petugas
          </p>
        </div>
      </div>
      <div className="border-t border-t-[rgba(255,236,120,0.5)] flex flex-col justify-between grow">
        <ul className="py-6 px-5 flex flex-col gap-y-1">
          <NavLink to="/admin" end>
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
          <NavLink to="/admin/parking-attendant">
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
                  <LuUserCog
                    className={`w-6 h-fit transition duration-300 ease-in-out group-hover:text-[#FFEC78] ${
                      isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                    }`}
                  />
                  Petugas Parkir
                </p>
              </li>
            )}
          </NavLink>
          <NavLink to="/admin/rider">
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
                  <HiOutlineUserCircle
                    className={`w-6 h-fit transition duration-300 ease-in-out group-hover:text-[#FFEC78] ${
                      isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                    }`}
                  />
                  Pengendara
                </p>
              </li>
            )}
          </NavLink>
          <NavLink to="/admin/vehicles">
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
                  <LuCar
                    className={`w-6 h-fit transition duration-300 ease-in-out group-hover:text-[#FFEC78] ${
                      isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                    }`}
                  />
                  Kendaraan
                </p>
              </li>
            )}
          </NavLink>
          <NavLink to="/admin/incoming-vehicle">
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
                  <LuArrowRightToLine
                    className={`w-6 h-fit transition duration-300 ease-in-out group-hover:text-[#FFEC78] ${
                      isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                    }`}
                  />
                  Kendaraan Masuk
                </p>
              </li>
            )}
          </NavLink>
          <NavLink to="/admin/vehicle-out">
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
                  <LuArrowLeftToLine
                    className={`w-6 h-fit transition duration-300 ease-in-out group-hover:text-[#FFEC78] ${
                      isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                    }`}
                  />
                  Kendaraan Keluar
                </p>
              </li>
            )}
          </NavLink>
          <NavLink to="/admin/active-parking">
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
                  <LuCircleParking
                    className={`w-6 h-fit transition duration-300 ease-in-out group-hover:text-[#FFEC78] ${
                      isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                    }`}
                  />
                  Parkir Aktif
                </p>
              </li>
            )}
          </NavLink>
          <NavLink to="/admin/notification">
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
                  <IoMdNotificationsOutline
                    className={`w-6 h-fit transition duration-300 ease-in-out group-hover:text-[#FFEC78] ${
                      isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                    }`}
                  />
                  Notifikasi
                </p>
              </li>
            )}
          </NavLink>
          <NavLink to="/admin/report">
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
                  <TbReportAnalytics
                    className={`w-6 h-fit transition duration-300 ease-in-out group-hover:text-[#FFEC78] ${
                      isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                    }`}
                  />
                  Laporan
                </p>
              </li>
            )}
          </NavLink>
          <NavLink to="/admin/account-settings">
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
                  <IoSettingsOutline
                    className={`w-6 h-fit transition duration-300 ease-in-out group-hover:text-[#FFEC78] ${
                      isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                    }`}
                  />
                  Pengaturan Akun
                </p>
              </li>
            )}
          </NavLink>
        </ul>
        <SidebarFooter />
      </div>
    </aside>
  );
}
