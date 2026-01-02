export default function StatsCard({ title, value, label, icon, color }) {
  const Icon = icon;

  return (
    <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-8 px-6 py-4 rounded-md">
      <div className="flex items-center justify-between w-full">
        <p className="text-[#93A3B6] font-medium">{title}</p>
        <Icon className={`${color} w-4 h-fit`} />
      </div>
      <div>
        <p className={`${color} font-semibold`}>{value}</p>
        <p className="text-[#93A3B6] text-[14px]">{label}</p>
      </div>
    </div>
  );
}
