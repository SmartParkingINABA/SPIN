import InOutChart from "./components/Charts/InOutChart";
import DailyChart from "./components/Charts/DailyChart";
import DurationChart from "./components/Charts/DurationChart";
import Header from "./components/Header";
import StatsGrid from "./components/Stats/StatsGrid";
import ActivityList from "./components/Activity/ActivityList";
import NewRiderList from "./components/Riders/NewRiderList";
import BoxWrapper from "../../../components/ui/BoxWrapper";

export default function Dasboard() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <Header />
      <StatsGrid />
      <div className="mt-6 grid grid-cols-2 gap-x-6">
        <BoxWrapper title="Parkir Per Hari (7 Hari Terakhir)">
          <DailyChart />
        </BoxWrapper>
        <BoxWrapper title="Kendaraan Masuk vs Keluar">
          <InOutChart />
        </BoxWrapper>
      </div>
      <div className="mt-6">
        <BoxWrapper title="Durasi Parkir Rata-rata (Menit)">
          <DurationChart />
        </BoxWrapper>
      </div>
      <div className="mt-6 grid grid-cols-2 items-start gap-x-6">
        <BoxWrapper title="Aktivitas Terbaru">
          <ActivityList />
        </BoxWrapper>
        <BoxWrapper title="Pengendara Baru Terdaftar">
          <NewRiderList />
        </BoxWrapper>
      </div>
    </section>
  );
}
