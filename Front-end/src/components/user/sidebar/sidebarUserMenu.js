import { IoQrCode, IoSettingsSharp } from "react-icons/io5";
import { FaBell, FaCarSide } from "react-icons/fa6";
import { HiOutlineHome } from "react-icons/hi2";
import { RxCountdownTimer } from "react-icons/rx";

export const sidebarUserMenu = [
  {
    label: "Dashboard",
    path: ".",
    icon: HiOutlineHome,
    exact: true,
  },
  {
    label: "Data Kendaraan",
    path: "/pengendara/data-kendaraan",
    icon: FaCarSide,
  },
  {
    label: "QR Code Saya",
    path: "/pengendara/qr-code-saya",
    icon: IoQrCode,
  },
  {
    label: "Riwayat Parkir",
    path: "/pengendara/riwayat-parkir",
    icon: RxCountdownTimer,
  },
  {
    label: "Notifikasi",
    path: "/pengendara/notifikasi",
    icon: FaBell,
  },
  {
    label: "Profil Pengguna",
    path: "/pengendara/profil-pengendara",
    icon: IoSettingsSharp,
  },
];
