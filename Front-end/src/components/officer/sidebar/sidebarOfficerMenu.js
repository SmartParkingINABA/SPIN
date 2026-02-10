import { FaBell, FaCarSide } from "react-icons/fa6";
import { HiOutlineHome } from "react-icons/hi2";
import { IoQrCode, IoSettingsSharp } from "react-icons/io5";
import { RxCountdownTimer } from "react-icons/rx";

export const sidebarOfficerMenu = [
  {
    label: "Dashboard",
    path: ".",
    icon: HiOutlineHome,
    exact: true,
  },
  {
    label: "Scan QR Code",
    path: "/petugas/scan-qr-code",
    icon: IoQrCode,
  },
  {
    label: "Data Kendaraan",
    path: "/petugas/data-kendaraan",
    icon: FaCarSide,
  },
  {
    label: "Riwayat Parkir",
    path: "/petugas/riwayat-parkir",
    icon: RxCountdownTimer,
  },
  {
    label: "Notifikasi",
    path: "/petugas/notifikasi",
    icon: FaBell,
  },
  {
    label: "Profil Petugas",
    path: "/petugas/profil-petugas",
    icon: IoSettingsSharp,
  },
];
