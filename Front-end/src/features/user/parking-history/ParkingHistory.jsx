import Header from "./components/Header";
import Dropdown from "./components/Dropdown/Dropdown";
import StatsGrid from "./components/Stats/StatsGrid";
import HistoryList from "./components/HIstoryList/HistoryList";
import { useParkingHistory } from "../../../hooks/user/useParkingHistory";
import HistorySkeleton from "./components/HistorySkeleton";
import Pagination from "../../../components/ui/Pagination";

export default function ParkingHistory() {
  const {
    data,
    loading,
    filters,
    setFilters,
    handleExport,
    pagination,
    setPagination,
  } = useParkingHistory();

  return (
    <>
      {loading ? (
        <HistorySkeleton />
      ) : (
        <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
          <Header
            onExport={handleExport}
            isExportDisabled={data.history.length === 0}
          />
          <Dropdown
            filters={filters}
            setFilters={setFilters}
            setPagination={setPagination}
            vehicleOptions={data.kendaraanList || []}
          />
          <StatsGrid stats={data.stats} />
          <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md py-5 px-6 mt-6">
            <h2 className="text-[#93A3B6] font-semibold mb-3.5">
              Daftar Riwayat
            </h2>
            {(data.history || []).length > 0 ? (
              <>
                <HistoryList rows={data.history} />
                <Pagination
                  pagination={pagination}
                  setPagination={setPagination}
                />
              </>
            ) : (
              <p className="text-[#93A3B6]">Belum ada riwayat parkir.</p>
            )}
          </div>
        </section>
      )}
    </>
  );
}
