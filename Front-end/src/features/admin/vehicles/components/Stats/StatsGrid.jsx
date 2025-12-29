import StatsCard from "./StatsCard";

export default function StatsGrid() {
  return (
    <div className="mt-6 grid grid-cols-4 gap-x-6">
      <StatsCard title="Total Kendaraan" value="5" />
      <StatsCard title="Sedang Parkir" value="3" />
      <StatsCard title="Motor" value="3" />
      <StatsCard title="Mobil" value="2" />
    </div>
  );
}
