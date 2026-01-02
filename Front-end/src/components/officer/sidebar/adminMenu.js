import { FaBell, FaCarSide } from "react-icons/fa6";
import { HiOutlineHome } from "react-icons/hi2";
import { IoQrCode, IoSettingsSharp } from "react-icons/io5";

import { RxCountdownTimer } from "react-icons/rx";

export const adminMenu = [
  {
    label: "Dashboard",
    path: "/officer",
    icon: HiOutlineHome,
    exact: true,
  },
  {
    label: "Scan QR Code",
    path: "/officer/scan-qr-code",
    icon: IoQrCode,
  },
  {
    label: "Data Kendaraan",
    path: "/officer/report-data",
    icon: FaCarSide,
  },
  {
    label: "Riwayat Parkir",
    path: "/officer/parking-history",
    icon: RxCountdownTimer,
  },
  {
    label: "Notifikasi",
    path: "/officer/notifikasi",
    icon: FaBell,
  },
  {
    label: "Profil Petugas",
    path: "/officer/officer-profile",
    icon: IoSettingsSharp,
  },
];
