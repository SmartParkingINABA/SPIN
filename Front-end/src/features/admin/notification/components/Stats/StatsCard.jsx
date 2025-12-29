export default function StatsCard({ title, value, icon, iconColor }) {
  const Icon = icon;
  return (
    <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex items-center justify-between px-6 py-4 rounded-md">
      <div className="flex flex-col gap-y-1.5">
        <p className="text-[#93A3B6] font-medium">{title}</p>
        <p className="text-[#FEF8FD] font-medium">{value}</p>
      </div>
      <div className="bg-blue-100 rounded-sm p-2.5 mt-1">
        <Icon className={`${iconColor} w-6.5 h-fit`} />
      </div>
    </div>
  );
}
