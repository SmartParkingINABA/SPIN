import { useState } from "react";
import Detail from "./components/RiderList/Card/Detail/Detail";
import Header from "./components/Header";
import Search from "./components/Search";
import Grid from "./components/RiderList/Grid";
import BoxWrapper from "../../../components/ui/BoxWrapper";

export default function Rider() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [riders, setRiders] = useState([
    {
      id: 1,
      name: "Pengendara A",
      isActive: true,
      status: "Aktif",
    },
    {
      id: 2,
      name: "Pengendara B",
      isActive: true,
      status: "Aktif",
    },
    {
      id: 3,
      name: "Pengendara C",
      isActive: false,
      status: "Offline",
    },
  ]);

  const handleToggleActive = (id) => {
    setRiders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, isActive: !o.isActive } : o))
    );
  };

  return (
    <>
      <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
        <Header />
        <Search />
        <div className="mt-6">
          <BoxWrapper title="Daftar Pengendara">
            <Grid
              riders={riders}
              handleToggleActive={handleToggleActive}
              setIsModalOpen={() => setIsModalOpen(true)}
            />
          </BoxWrapper>
        </div>
      </section>
      {isModalOpen && <Detail onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
