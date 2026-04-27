import { HiOutlineHome, HiOutlineUserCircle } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUserCog } from "react-icons/lu";
import { TbReportAnalytics } from "react-icons/tb";

export const sidebarAdminMenu = [
  {
    label: "Dashboard",
    path: ".",
    icon: HiOutlineHome,
    exact: true,
  },
  {
    label: "Petugas Parkir",
    path: "/admin/petugas-parkir",
    icon: LuUserCog,
  },
  {
    label: "Pengendara",
    path: "/admin/pengendara",
    icon: HiOutlineUserCircle,
  },
  {
    label: "Notifikasi",
    path: "/admin/notifikasi",
    icon: IoMdNotificationsOutline,
  },
  {
    label: "Laporan",
    path: "/admin/laporan",
    icon: TbReportAnalytics,
  },
  {
    label: "Pengaturan Akun",
    path: "/admin/pengaturan-akun",
    icon: IoSettingsOutline,
  },
];
