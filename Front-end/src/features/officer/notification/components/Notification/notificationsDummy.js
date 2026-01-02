// data/notifications.js
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import { CgDanger } from "react-icons/cg";

export const notifications = [
  {
    id: 1,
    title: "Area Parkir Hampir Penuh",
    time: "18 Nov 2025 • 10:30 WIB",
    message:
      "Kapasitas parkir motor mencapai 85%. Harap siapkan alternatif area parkir.",
    icon: IoWarningOutline,
    iconColor: "text-orange-400",
    bgColor: "bg-[#F5E79E]",
    isNew: true,
    showAction: true,
  },
  {
    id: 2,
    title: "Kendaraan Tidak Terdaftar",
    time: "18 Nov 2025 • 09:45 WIB",
    message: "QR Code dengan ID QR-2024-999 tidak ditemukan dalam sistem.",
    icon: CgDanger,
    iconColor: "text-red-400",
    bgColor: "bg-red-100",
    isNew: true,
    showAction: true,
  },
  {
    id: 3,
    title: "Update Sistem",
    time: "18 Nov 2025 • 08:00 WIB",
    message:
      "Sistem parkir akan diperbarui pada 20 November 2025 pukul 01:00 WIB.",
    icon: CgDanger,
    iconColor: "text-blue-400",
    bgColor: "bg-blue-100",
  },
  {
    id: 4,
    title: "Shift Dimulai",
    time: "18 Nov 2025 • 07:00 WIB",
    message: "Anda telah berhasil memulai shift pagi (07:00 - 15:00).",
    icon: IoIosCheckmarkCircleOutline,
    iconColor: "text-green-400",
    bgColor: "bg-green-100",
  },
];
