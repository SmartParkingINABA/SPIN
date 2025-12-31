import { RxLapTimer, RxTimer } from "react-icons/rx";
import { LuRepeat2 } from "react-icons/lu";
import Header from "./components/Header";
import Dropdown from "./components/Dropdown/Dropdown";
import StatsGrid from "./components/Stats/StatsGrid";
import HistoryList from "./components/HIstoryList/HistoryList";

export default function ParkingHistory() {
  const rows = [
    {
      tanggal: "18 Nov 2025",
      plat: "A 8993 AB",
      jamMasuk: "10:00 WIB",
      jamKeluar: "12:00 WIB",
      durasi: "2 jam",
    },
    {
      tanggal: "18 Nov 2025",
      plat: "B 1234 CD",
      jamMasuk: "11:30 WIB",
      jamKeluar: null, // 👈 masih parkir
      durasi: "-",
    },
    {
      tanggal: "18 Nov 2025",
      plat: "A 8993 AB",
      jamMasuk: "10:00 WIB",
      jamKeluar: "12:00 WIB",
      durasi: "2 jam",
    },
    {
      tanggal: "18 Nov 2025",
      plat: "B 1234 CD",
      jamMasuk: "11:30 WIB",
      jamKeluar: null, // 👈 masih parkir
      durasi: "-",
    },
    {
      tanggal: "18 Nov 2025",
      plat: "A 8993 AB",
      jamMasuk: "10:00 WIB",
      jamKeluar: "12:00 WIB",
      durasi: "2 jam",
    },
    {
      tanggal: "18 Nov 2025",
      plat: "B 1234 CD",
      jamMasuk: "11:30 WIB",
      jamKeluar: null, // 👈 masih parkir
      durasi: "-",
    },
  ];

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <Header />
      <Dropdown />
      <StatsGrid />
      <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md py-5 px-6 mt-6">
        <h2 className="text-[#93A3B6] font-semibold mb-3.5">Daftar Riwayat</h2>
        <HistoryList rows={rows} />
      </div>
    </section>
  );
}
