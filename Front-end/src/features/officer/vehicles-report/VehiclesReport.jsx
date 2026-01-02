import Header from "./components/Header";
import Search from "./components/Search";
import TableWrapper from "./components/VehiclesTable/TableWrapper";
import TableHeader from "./components/VehiclesTable/TableHeader";
import TableRow from "./components/VehiclesTable/TableRow";

export default function VehiclesReport() {
  const columns = [
    "No",
    "Plat Nomor",
    "Nama Pengendara",
    "Jenis Kendaraan",
    "Waktu Masuk",
    "Durasi",
  ];

  const rows = [
    {
      plate: "A 8993 AB",
      name: "Yono Bakrie",
      vehicle: "Mobil",
      checkIn: "12:00 WIB",
      duration: "1 hari 24 jam",
    },
    {
      plate: "A 8993 AB",
      name: "Yono Bakrie",
      vehicle: "Mobil",
      checkIn: "12:00 WIB",
      duration: "1 hari 24 jam",
    },
    {
      plate: "A 8993 AB",
      name: "Yono Bakrie",
      vehicle: "Mobil",
      checkIn: "12:00 WIB",
      duration: "1 hari 24 jam",
    },
    {
      plate: "A 8993 AB",
      name: "Yono Bakrie",
      vehicle: "Motor",
      checkIn: "12:00 WIB",
      duration: "1 hari 24 jam",
    },
    {
      plate: "A 8993 AB",
      name: "Yono Bakrie",
      vehicle: "Mobil",
      checkIn: "12:00 WIB",
      duration: "1 hari 24 jam",
    },
  ];

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <Header />
      <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
        <Search />
        <TableWrapper>
          <TableHeader columns={columns} />
          <tbody>
            {rows.map((row, i) => (
              <TableRow
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
