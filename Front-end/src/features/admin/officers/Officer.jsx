import { useState } from "react";
import EditForm from "./components/Form/EditForm";
import AddForm from "./components/Form/AddForm";
import Header from "./components/Header";
import StatsGrid from "./components/Stats/StatsGrid";
import Grid from "./components/OfficerList/Grid";
import BoxWrapper from "../../../components/ui/BoxWrapper";

export default function Officer() {
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);

  const [officers, setOfficers] = useState([
    {
      id: 1,
      name: "Petugas A",
      isActive: true,
      status: "Online",
      shift: "Shift Pagi",
      area: "Area A",
    },
    {
      id: 2,
      name: "Petugas B",
      isActive: true,
      status: "Online",
      shift: "Shift Siang",
      area: "Area B",
    },
    {
      id: 3,
      name: "Petugas C",
      isActive: false,
      status: "Offline",
      shift: "Shift Malam",
      area: "Area C",
    },
  ]);

  const handleToggleActive = (id) => {
    setOfficers((prev) =>
      prev.map((o) => (o.id === id ? { ...o, isActive: !o.isActive } : o))
    );
  };

  return (
    <>
      <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
        <Header setIsModalOpenAdd={() => setIsModalOpenAdd(true)} />
        <StatsGrid />
        <div className="mt-6">
          <BoxWrapper title="Daftar Petugas Parkir">
            <Grid
              officers={officers}
              onToggleActive={handleToggleActive}
              setIsModalOpenEdit={() => setIsModalOpenEdit(true)}
            />
          </BoxWrapper>
        </div>
      </section>
      {isModalOpenAdd && <AddForm onClose={() => setIsModalOpenAdd(false)} />}
      {isModalOpenEdit && (
        <EditForm onClose={() => setIsModalOpenEdit(false)} />
      )}
    </>
  );
}
