export default function StatsCard({ title, value }) {
  return (
    <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-10 px-6 py-4 rounded-md">
      <p className="text-[#FEF8FD] font-medium">{title}</p>
      <p className="text-[#93A3B6] font-medium">{value}</p>
    </div>
  );
}
