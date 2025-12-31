import { useState } from "react";
import BoxWrapper from "../../../components/ui/BoxWrapper";
import Header from "./components/Header";
import StatsGrid from "./components/Stats/StatsGrid";
import Search from "./components/Search";
import DetailOut from "./components/DetaillOut";
import Grid from "./components/Card/Grid";

export default function VehicleOut() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      plate: "Z 9090 XX",
      name: "Pengguna A",
      category: "Motor",
      type: "Honda Beat",
      entry: "08.30.00",
      exit: "12.35.00",
      duration: "35j 24m",
      isParking: true,
    },
    {
      id: 2,
      plate: "Z 9090 XX",
      name: "Pengguna B",
      category: "Motor",
      type: "Honda Beat",
      entry: "08.30.00",
      exit: "12.35.00",
      duration: "35j 24m",
      isParking: true,
    },
    {
      id: 3,
      plate: "Z 9090 XX",
      name: "Pengguna C",
      category: "Motor",
      type: "Honda Beat",
      entry: "08.30.00",
      exit: "12.35.00",
      duration: "35j 24m",
      isParking: false,
    },
  ]);

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <Header />
      <StatsGrid />
      <div className="mt-6 grid grid-cols-2 items-start gap-x-6">
        <BoxWrapper title="Check-out Kendaraan">
          <Search />
          <DetailOut
            vehicles={vehicles}
            selectedVehicle={selectedVehicle}
            setSelectedVehicle={() => setSelectedVehicle(null)}
          />
        </BoxWrapper>
        <BoxWrapper title="Kendaraan Sedang Parkir">
          <Grid
            onSelect={setSelectedVehicle}
            vehicles={vehicles.filter((v) => v.isParking)}
          />
        </BoxWrapper>
      </div>
    </section>
  );
}
