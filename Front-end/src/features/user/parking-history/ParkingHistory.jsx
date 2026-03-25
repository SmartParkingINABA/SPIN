import Header from "./components/Header";
import Dropdown from "./components/Dropdown/Dropdown";
import StatsGrid from "./components/Stats/StatsGrid";
import HistoryList from "./components/HIstoryList/HistoryList";
import { useParkingHistory } from "../../../hooks/user/useParkingHistory";
import { useOutletContext } from "react-router-dom";

export default function ParkingHistory() {
  const { data, loading, filters, setFilters, handleExport } =
    useParkingHistory();

  const { profileData } = useOutletContext();
  const userVehicles = profileData?.kendaraan?.map((v) => v.plat_nomor || []);

  const filteredRows = data.history.filter((row) => {
    const matchStatus =
      filters.status === "Semua Status" || row.status === filters.status;
    const matchVehicle =
      filters.vehicle === "Semua Kendaraan" || row.plat === filters.vehicle;
    return matchStatus && matchVehicle;
  });

  if (loading) return <div className="text-black">Sedang Loading...</div>;

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <Header onExport={handleExport} />
      <Dropdown
        filters={filters}
        setFilters={setFilters}
        vehicleOptions={["Semua Kendaraan", ...userVehicles]}
      />
      <StatsGrid stats={data.stats} />
      <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md py-5 px-6 mt-6">
        <h2 className="text-[#93A3B6] font-semibold mb-3.5">Daftar Riwayat</h2>
        {filteredRows.length > 0 ? (
          <HistoryList rows={filteredRows} />
        ) : (
          <p className="text-[#93A3B6]">Belum ada riwayat parkir.</p>
        )}
      </div>
    </section>
  );
}
