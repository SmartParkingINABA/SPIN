import { useState } from "react";
import Header from "./components/Header";
import VehicleGrid from "./components/VehicleCard/VehicleGrid";
import AddForm from "./components/Form/AddForm";

export default function VehiclesReport() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const vehicles = [
    {
      id: 1,
      plate: "D 1234 XYZ",
      category: "Mobil",
      brand: "Toyota Avanza",
      cc: 150,
      year: 2022,
      validUntil: "31/12/2029",
      status: "Aktif",
      hasQr: true,
      iconType: "car",
    },
    {
      id: 2,
      plate: "D 1234 XYZ",
      category: "Motor",
      brand: "Honda Beat",
      cc: 125,
      year: 2009,
      validUntil: "31/12/2029",
      status: "Aktif",
      hasQr: true,
      iconType: "motor",
    },
  ];

  return (
    <>
      <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
        <Header setIsModalOpen={setIsModalOpen} />
        <div className="grid grid-cols-2 gap-6 mt-7">
          <VehicleGrid vehicles={vehicles} />
        </div>
      </section>
      {isModalOpen && <AddForm onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
