import { IoQrCode, IoSettingsSharp } from "react-icons/io5";
import { FaBell, FaCarSide } from "react-icons/fa6";
import { HiOutlineHome } from "react-icons/hi2";
import { RxCountdownTimer } from "react-icons/rx";

export const sidebarMenu = [
  {
    label: "Dashboard",
    path: "/user",
    icon: HiOutlineHome,
    exact: true,
  },
  {
    label: "Data Kendaraan",
    path: "/user/report-data",
    icon: FaCarSide,
  },
  {
    label: "QR Code Saya",
    path: "/user/my-qr-code",
    icon: IoQrCode,
  },
  {
    label: "Riwayat Parkir",
    path: "/user/parking-history",
    icon: RxCountdownTimer,
  },
  {
    label: "Notifikasi",
    path: "/user/notifikasi",
    icon: FaBell,
  },
  {
    label: "Profil Pengguna",
    path: "/user/user-profile",
    icon: IoSettingsSharp,
  },
];
