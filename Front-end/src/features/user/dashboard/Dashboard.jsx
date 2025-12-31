import { useState } from "react";
import Header from "./components/Header";
import StatsGrid from "./components/Stats/StatsGrid";
import VehicleGrid from "./components/VehicleCard/VehicleGrid";
import StatusGrid from "./components/StatusCard/StatusGrid";
import NotificationGrid from "./components/NotificationCard/NotificationGrid";
import BoxWrapper from "../../../components/ui/BoxWrapper";
import { FaCarSide, FaMotorcycle } from "react-icons/fa6";

export default function Dashboard() {
  // eslint-disable-next-line no-unused-vars
  const [vehiclesActive, setVehiclesActive] = useState([
    {
      id: 1,
      plate: "D 1234 XYZ",
      category: "Motor",
      type: "Honda Beat",
      icon: FaMotorcycle,
      isActive: true,
    },
    {
      id: 2,
      plate: "D 1234 XYZ",
      category: "Mobil",
      type: "Pajero Sport",
      icon: FaCarSide,
      isActive: true,
    },
  ]);

  // eslint-disable-next-line no-unused-vars
  const [vehiclesStatus, setVehiclesStatus] = useState([
    {
      id: 1,
      plate: "D 1234 XYZ",
      date: "09 November 2025 • 16:00",
      isExit: true,
    },
    {
      id: 2,
      plate: "D 1234 XYZ",
      date: "09 November 2025 • 16:00",
      isExit: false,
    },
  ]);

  // eslint-disable-next-line no-unused-vars
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Kendaraan D 1234 XYZ keluar area parkir",
      time: "2 jam lalu",
      isActive: true,
    },
    {
      id: 2,
      message: "Kendaraan D 5678 ABC masuk area parkir",
      time: "2 jam lalu",
      isActive: true,
    },
    {
      id: 3,
      message:
        "QR Code berhasil dibuat untuk kendaraan dengan Nopol D 1234 XYZ",
      time: "1 hari yang lalu",
      isActive: false,
    },
  ]);

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <Header />
      <div className="mt-6">
        <StatsGrid />
      </div>
      <div className="mt-6">
        <BoxWrapper title="Kendaraan Aktif">
          <VehicleGrid vehicles={vehiclesActive.filter((v) => v.isActive)} />
        </BoxWrapper>
      </div>
      <div className="mt-6">
        <BoxWrapper title="Status Parkir Terakhir">
          <StatusGrid vehicles={vehiclesStatus.filter((v) => v.isExit)} />
        </BoxWrapper>
      </div>
      <div className="mt-6">
        <BoxWrapper title="Notifikasi Terbaru">
          <NotificationGrid notifications={notifications} />
        </BoxWrapper>
      </div>
    </section>
  );
}
