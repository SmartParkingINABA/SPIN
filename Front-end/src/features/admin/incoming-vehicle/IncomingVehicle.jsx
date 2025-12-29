import Header from "./components/Header";
import StatsGrid from "./components/Stats/StatsGrid";
import BoxWrapper from "../../../components/admin/ui/BoxWrapper";
import Search from "./components/Search";
import Grid from "./components/Card/Grid";
import { useState } from "react";

export default function IncomingVehicle() {
  // eslint-disable-next-line no-unused-vars
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      plate: "Z 9090 XX",
      name: "Pengguna A",
      entry: "08.30.00",
      isParking: true,
    },
    {
      id: 2,
      plate: "Z 9090 XX",
      name: "Pengguna B",
      entry: "08.30.00",
      isParking: false,
    },
    {
      id: 3,
      plate: "Z 9090 XX",
      name: "Pengguna C",
      entry: "08.30.00",
      isParking: false,
    },
  ]);

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <Header />
      <StatsGrid />
      <div className="mt-6 grid grid-cols-2 items-start gap-x-6">
        <BoxWrapper title="Check-in Kendaraan">
          <Search />
        </BoxWrapper>
        <BoxWrapper title="Kendaraan Sedang Parkir" className="">
          <Grid vehicles={vehicles.filter((v) => v.isParking)} />
        </BoxWrapper>
      </div>
    </section>
  );
}
