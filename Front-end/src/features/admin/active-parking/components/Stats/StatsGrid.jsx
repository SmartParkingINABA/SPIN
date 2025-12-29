import StatsCard from "./StatsCard";

export default function StatsGrid() {
  return (
    <div className="mt-6 grid grid-cols-4 gap-x-6">
      <StatsCard title="Total Parkir Aktif" value="3" />
      <StatsCard title="Motor Parkir" value="1" />
      <StatsCard title="Mobil Parkir" value="2" />
      <StatsCard title="Durasi Rata-rata" value="9313j 25m" />
    </div>
  );
}
