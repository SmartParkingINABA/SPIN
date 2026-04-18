import Header from "./components/Header";
import Search from "./components/Search";
import TableWrapper from "./components/VehiclesTable/TableWrapper";
import TableHeader from "./components/VehiclesTable/TableHeader";
import TableRow from "./components/VehiclesTable/TableRow";
import { useVehiclesReport } from "../../../hooks/officer/useVehiclesReport";
import Pagination from "../../../components/ui/Pagination";
import VehiclesReportSkeleton from "./components/VehiclesReportSkeleton";
import { MobileVehicleCard } from "./components/MobileVehicleCard";

export default function VehiclesReport() {
  const { data, loading, search, setSearch, pagination, setPagination } =
    useVehiclesReport();

  const columns = [
    "No",
    "Plat Nomor",
    "Nama Pengendara",
    "Jenis Kendaraan",
    "Waktu Masuk",
    "Durasi",
  ];

  if (loading) return <VehiclesReportSkeleton />;

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <Header />
      <div className="mt-4 sm:mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
        <Search search={search} setSearch={setSearch} total={data.length} />

        {/* Mobile View */}
        <div className="block sm:hidden mt-4 space-y-4">
          {data.length === 0 ? (
            <div className="text-center text-[#93A3B6] py-8">
              Data tidak tersedia
            </div>
          ) : (
            data.map((row, i) => (
              <MobileVehicleCard key={i} data={row} index={i} />
            ))
          )}
        </div>

        {/* Desktop View */}
        <div className="hidden sm:block mt-4">
          <TableWrapper>
            <TableHeader columns={columns} />
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center text-[#93A3B6] p-4">
                    Data tidak tersedia
                  </td>
                </tr>
              ) : (
                data.map((row, i) => (
                  <TableRow
                    key={i}
                    data={row}
                    index={i}
                    isLast={i === data.length - 1}
                  />
                ))
              )}
            </tbody>
          </TableWrapper>
        </div>
        <Pagination pagination={pagination} setPagination={setPagination} />
      </div>
    </section>
  );
}
