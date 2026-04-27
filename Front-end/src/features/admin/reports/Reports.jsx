import { useState } from "react";
import DateInput from "./components/DateInput";
import PieChartRider from "./components/DriverReports/PieChartRider";
import BarChartRider from "./components/DriverReports/BarChartRider";
import BarChartOfficer from "./components/OfficerReports/BarChartOfficer";
import Header from "./components/Header";
import Filter from "./components/Filter";
import ReportTabs from "./components/ReportTabs";
import StatsGrid from "./components/ParkingReports/Stats/StatsGrid";
import BoxWrapper from "../../../components/ui/BoxWrapper";
import IncomingVehicle from "./components/ParkingReports/IncomingVehicle";
import VehicleOut from "./components/ParkingReports/VehicleOut";
import Grid from "./components/DriverReports/Card/Grid";
import OfficerGrid from "./components/OfficerReports/Card/OfficerGrid";

export default function Reports() {
  const [createMode, setCreateMode] = useState("laporan parkir");
  const rows = Array.from({ length: 10 });

  const driversProfile = [
    {
      id: 1,
      name: "Pengendara 1",
      email: "pengendara@mail.com",
      date: "10/3/2024",
    },
    {
      id: 2,
      name: "Pengendara 2",
      email: "pengendara@mail.com",
      date: "10/3/2024",
    },
    {
      id: 3,
      name: "Pengendara 3",
      email: "pengendara@mail.com",
      date: "10/3/2024",
    },
  ];

  const officersProfile = [
    {
      id: 1,
      name: "Petugas 1",
      job: 2,
      transaction: 2,
    },
    {
      id: 2,
      name: "Petugas 2",
      job: 1,
      transaction: 1,
    },
    {
      id: 1,
      name: "Petugas 3",
      job: 0,
      transaction: 0,
    },
  ];

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <Header />
      <div className="mt-6 grid grid-cols-[5.5fr_5.5fr_1fr] gap-x-6 items-end border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
        <DateInput label="Tanggal Mulai" />
        <DateInput label="Tanggal Akhir" />
        <Filter />
      </div>
      <ReportTabs createMode={createMode} setCreateMode={setCreateMode} />
      {createMode === "laporan parkir" && (
        <>
          <StatsGrid />
          <div className="mt-6">
            <BoxWrapper title="Kendaraan Masuk">
              <IncomingVehicle rows={rows} />
            </BoxWrapper>
          </div>
          <div className="mt-6">
            <BoxWrapper title="Kendaraan Keluar">
              <VehicleOut rows={rows} />
            </BoxWrapper>
          </div>
        </>
      )}

      {createMode === "laporan pengendara" && (
        <>
          <div className="mt-6 grid grid-cols-2 gap-x-6">
            <BoxWrapper title="Pengendara Paling Sering Parkir">
              <BarChartRider />
            </BoxWrapper>
            <BoxWrapper title="Distribusi Parkir per Pengendara">
              <PieChartRider />
            </BoxWrapper>
          </div>
          <div className="mt-6">
            <BoxWrapper title="Pengendara Baru Terdaftar">
              <Grid drivers={driversProfile} />
            </BoxWrapper>
          </div>
        </>
      )}

      {createMode === "laporan petugas" && (
        <>
          <div className="mt-6">
            <BoxWrapper title="Petugas Paling Aktif">
              <BarChartOfficer />
            </BoxWrapper>
          </div>
          <div className="mt-6">
            <BoxWrapper title="Detail Aktivitas Petugas">
              <OfficerGrid officers={officersProfile} />
            </BoxWrapper>
          </div>
        </>
      )}
    </section>
  );
}
