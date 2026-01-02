import Header from "./components/Header";
import StatsGrid from "./components/Stats/StatsGrid";
import BoxWrapper from "../../../components/ui/BoxWrapper";
import { activities } from "./components/Card/activitiesDummy";
import ActivityCard from "./components/Card/ActivityCard";

export default function Dashboard() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <Header />
      <StatsGrid />
      <BoxWrapper title="Aktivitas Terakhir">
        {activities.map((item, index) => (
          <ActivityCard
            key={item.id}
            data={item}
            isLast={index === activities.length - 1}
          />
        ))}
      </BoxWrapper>
    </section>
  );
}
