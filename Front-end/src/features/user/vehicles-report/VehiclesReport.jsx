import { useState } from "react";
import Header from "./components/Header";
import VehicleGrid from "./components/VehicleCard/VehicleGrid";
import AddForm from "./components/Form/AddForm";
import { useVehiclesReport } from "../../../hooks/user/useVehiclesReport";
import VehiclesReportSkeleton from "./components/VehiclesReportSkeleton";

export default function VehiclesReport() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { vehicles, loading, addVehicle, updateVehicle, deleteVehicle } =
    useVehiclesReport();

  if (loading) return <VehiclesReportSkeleton />;

  return (
    <>
      <section className="bg-[#130F40] px-5 py-7 h-[calc(100dvh-60px)] overflow-y-auto">
        <Header setIsModalOpen={setIsModalOpen} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
          {vehicles.length > 0 ? (
            <VehicleGrid
              vehicles={vehicles}
              onDelete={deleteVehicle}
              onUpdate={updateVehicle}
            />
          ) : (
            <p className="text-[#93A3B6]">Belum ada data kendaraan.</p>
          )}
        </div>
      </section>

      {isModalOpen && (
        <AddForm onClose={() => setIsModalOpen(false)} onSubmit={addVehicle} />
      )}
    </>
  );
}
