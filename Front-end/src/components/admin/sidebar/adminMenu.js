import { HiOutlineHome, HiOutlineUserCircle } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import {
  LuArrowLeftToLine,
  LuArrowRightToLine,
  LuCar,
  LuCircleParking,
  LuUserCog,
} from "react-icons/lu";
import { TbReportAnalytics } from "react-icons/tb";

export const adminMenu = [
  {
    label: "Dashboard",
    path: "/admin",
    icon: HiOutlineHome,
    exact: true,
  },
  {
    label: "Petugas Parkir",
    path: "/admin/parking-attendant",
    icon: LuUserCog,
  },
  {
    label: "Pengendara",
    path: "/admin/rider",
    icon: HiOutlineUserCircle,
  },
  {
    label: "Notifikasi",
    path: "/admin/notification",
    icon: IoMdNotificationsOutline,
  },
  {
    label: "Laporan",
    path: "/admin/reports",
    icon: TbReportAnalytics,
  },
  {
    label: "Pengaturan Akun",
    path: "/admin/account-settings",
    icon: IoSettingsOutline,
  },
];
