import Header from "./components/Header";
import StatsGrid from "./components/Stats/StatsGrid";
import BoxWrapper from "../../../components/ui/BoxWrapper";
import ActivityCard from "./components/Card/ActivityCard";
import { useDashboard } from "../../../hooks/officer/useDashboard";
import DashboardSkeleton from "./components/DashboardSkeleton";
import { useAuth } from "../../../context/useAuth";

export default function Dashboard() {
  const { data, loading } = useDashboard();
  const { user } = useAuth();

  const activities = data?.aktivitas_terakhir || [];

  if (loading) return <DashboardSkeleton />;

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100dvh-60px)] overflow-y-auto">
      <Header user={user} />
      <StatsGrid summary={data?.summary} />
      <BoxWrapper title="Aktivitas Terakhir">
        {activities.map((item, index) => (
          <ActivityCard
            key={index}
            data={{
              plate: item.no_plat,
              activity: item.aktivitas,
              user: item.nama_pengendara,
              time: item.waktu,
              color:
                item.aktivitas === "Masuk"
                  ? "text-green-500"
                  : "text-yellow-500",
            }}
            isLast={index === activities.length - 1}
          />
        ))}
      </BoxWrapper>
    </section>
  );
}
