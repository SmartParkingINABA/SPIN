export default function StatsCard({ title, value, icon }) {
  const Icon = icon;

  return (
    <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] flex items-center gap-x-4.5 rounded-md py-5 px-6">
      <div className="p-3 bg-[#4B4141] rounded-sm">
        <Icon className="h-fit w-6 text-[#FFEC78]" />
      </div>
      <div className="text-center">
        <p className="text-[#93A3B6]">{title}</p>
        <p className="text-[#FEF8FD]">{value}</p>
      </div>
    </div>
  );
}
