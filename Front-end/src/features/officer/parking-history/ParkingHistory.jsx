import Pagination from "../../../components/ui/Pagination";
import { useParkingHistory } from "../../../hooks/officer/useParkingHistory";
import Header from "./components/Header";
import TableHead from "./components/HistoryTable/TableHead";
import TableRowHistory from "./components/HistoryTable/TableRowHistory";
import TableWrapper from "./components/HistoryTable/TableWrapper";
import ParkingHistorySkeleton from "./components/ParkingHistorySkeleton";
import Search from "./components/Search";

export default function ParkingHistory() {
  const { data, loading, search, setSearch, pagination, setPagination } =
    useParkingHistory();
  const columns = [
    "No",
    "Tanggal",
    "Plat Nomor",
    "Nama Pengendara",
    "Jam Masuk",
    "Jam Keluar",
    "Durasi",
    "Status",
  ];

  if (loading) return <ParkingHistorySkeleton />;

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <Header />
      <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
        <Search total={data.length} search={search} setSearch={setSearch} />
        <TableWrapper>
          <TableHead columns={columns} />
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center text-[#93A3B6] p-4">
                  Data tidak tersedia
                </td>
              </tr>
            ) : (
              data.map((row, i) => (
                <TableRowHistory
                  key={i}
                  data={row}
                  index={(pagination.page - 1) * pagination.limit + i}
                  isLast={i === data.length - 1}
                />
              ))
            )}
          </tbody>
        </TableWrapper>
        <Pagination pagination={pagination} setPagination={setPagination} />
      </div>
    </section>
  );
}
