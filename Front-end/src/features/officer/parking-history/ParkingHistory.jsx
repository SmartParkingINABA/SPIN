import Header from "./components/Header";
import TableHead from "./components/HistoryTable/TableHead";
import TableRowHistory from "./components/HistoryTable/TableRowHistory";
import TableWrapper from "./components/HistoryTable/TableWrapper";
import Search from "./components/Search";

export default function ParkingHistory() {
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

  const rows = [
    {
      date: "18 Nov 2025",
      plate: "A 8993 AB",
      name: "Yono Bakrie",
      checkIn: "10:00 WIB",
      checkOut: "12:00 WIB",
      duration: "1 hari 24 jam",
      status: "Selesai",
    },
  ];

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <Header />
      <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
        <Search />
        <TableWrapper>
          <TableHead columns={columns} />
          <tbody>
            {rows.map((row, i) => (
              <TableRowHistory
                key={i}
                data={row}
                index={i}
                isLast={i === rows.length - 1}
              />
            ))}
          </tbody>
        </TableWrapper>
      </div>
    </section>
  );
}
