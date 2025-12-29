import { useState } from "react";
import Header from "./components/Header";
import StatsGrid from "./components/Stats/StatsGrid";
import Filter from "./components/Filter";
import BoxWrapper from "../../../components/admin/ui/BoxWrapper";
import Grid from "./components/VehicleList/Card/Grid";

export default function ActiveParking() {
  // eslint-disable-next-line no-unused-vars
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      name: "Pengguna A",
      plate: "B 1234 XYZ",
      type: "Honda Beat",
      category: "Motor",
      entry: "09.15.00",
      duration: "9276j 11m",
      date: "27/04/2025",
      officer: "Petugas 1",
    },
    {
      id: 2,
      name: "Pengguna B",
      plate: "B 1234 XYZ",
      type: "Honda Pajero",
      category: "Mobil",
      entry: "09.15.00",
      duration: "9276j 11m",
      date: "27/04/2025",
      officer: "Petugas 2",
    },
    {
      id: 3,
      name: "Pengguna C",
      plate: "B 1234 XYZ",
      type: "Honda Fortuner",
      category: "Mobil",
      entry: "09.15.00",
      duration: "9276j 11m",
      date: "27/04/2025",
      officer: "Petugas 3",
    },
  ]);
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <Header />
      <StatsGrid />
      <Filter />
      <div className="mt-6">
        <BoxWrapper title="Daftar Kendaraan Parkir Aktif">
          <Grid vehicles={vehicles} />
        </BoxWrapper>
      </div>
    </section>
  );
}
