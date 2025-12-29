import { useState } from "react";
import Header from "./components/Header";
import AddForm from "./components/Form/AddForm";
import EditForm from "./components/Form/EditForm";
import Detail from "./components/VehicleList/Card/Detail/Detail";
import StatsGrid from "./components/Stats/StatsGrid";
import Filter from "./components/Filter";
import Grid from "./components/VehicleList/Grid";

export default function Vehicles() {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDetail, setOpenModalDetail] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      name: "Pengguna A",
      plate: "B 1234 XYZ",
      type: "Honda Beat",
      category: "Motor",
      isParking: true,
    },
    {
      id: 2,
      name: "Pengguna B",
      plate: "B 1234 XYZ",
      type: "Honda Pajero",
      category: "Mobil",
      isParking: false,
    },
    {
      id: 3,
      name: "Pengguna C",
      plate: "B 1234 XYZ",
      type: "Honda Fortuner",
      category: "Mobil",
      isParking: false,
    },
  ]);

  return (
    <>
      <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
        <Header openModalAdd={() => setOpenModalAdd(true)} />
        <StatsGrid />
        <Filter />
        <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
          <p className="text-[#FEF8FD] font-medium">Daftar Kendaraan</p>
          <Grid
            vehicles={vehicles}
            openModalDetail={() => setOpenModalDetail(true)}
            openModalEdit={() => setOpenModalEdit(true)}
          />
        </div>
      </section>
      {openModalAdd && <AddForm onClose={() => setOpenModalAdd(false)} />}
      {openModalDetail && <Detail onClose={() => setOpenModalDetail(false)} />}
      {openModalEdit && <EditForm onClose={() => setOpenModalEdit(false)} />}
    </>
  );
}
