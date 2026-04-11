import Header from "./components/Header";
import Search from "./components/Search";
import TableWrapper from "./components/VehiclesTable/TableWrapper";
import TableHeader from "./components/VehiclesTable/TableHeader";
import TableRow from "./components/VehiclesTable/TableRow";
import { useVehiclesReport } from "../../../hooks/officer/useVehiclesReport";

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

  if (loading) return <p className="p-5">Loading...</p>;

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <Header />
      <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
        <Search search={search} setSearch={setSearch} total={data.length} />
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
        <Pagination pagination={pagination} setPagination={setPagination} />
      </div>
    </section>
  );
}
