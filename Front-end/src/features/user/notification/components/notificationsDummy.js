import { FaCarSide } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { CgDanger } from "react-icons/cg";

export const notifications = [
  {
    id: 1,
    title: "B 1234 XYZ",
    time: "18 Nov 2025 • 10:30 WIB",
    message: "Kendaraan telah keluar dari area parkir",
    type: "warning",
    isNew: true,
    icon: FaCarSide,
    iconColor: "text-orange-400",
    bgColor: "bg-[#F5E79E]",
    showAction: true,
  },
  {
    id: 2,
    title: "B 1234 XYZ",
    time: "18 Nov 2025 • 08:00 WIB",
    message: "QR Code berhasil dibuat untuk kendaraan",
    type: "info",
    icon: MdOutlinePhoneAndroid,
    iconColor: "text-blue-400",
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    title: "B 5678 ABC",
    time: "18 Nov 2025 • 07:00 WIB",
    message: "Kendaraan telah masuk area parkir",
    type: "success",
    icon: FaCarSide,
    iconColor: "text-green-400",
    bgColor: "bg-green-100",
  },
  {
    id: 4,
    title: "Selamat datang di sistem parkir! Silakan tambahkan kendaraan Anda",
    time: "17 Nov 2025 • 15:00 WIB",
    type: "system",
    icon: CgDanger,
    iconColor: "text-blue-400",
    bgColor: "bg-blue-100",
  },
];
