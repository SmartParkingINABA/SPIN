import StatsCard from "./StatsCard";

export default function StatsGrid() {
  return (
    <div className="mt-6 grid grid-cols-3 gap-x-6">
      <StatsCard title="Total Petugas" value="3" />
      <StatsCard title="Petugas Online" value="2" />
      <StatsCard title="Petugas Aktif" value="3" />
    </div>
  );
}
