export default function StatsCard({ title, value, icon }) {
  const Icon = icon;

  return (
    <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] flex items-center gap-x-4 sm:gap-x-4.5 rounded-md p-5 sm:p-6">
      <div className="p-2.5 sm:p-3 bg-[#4B4141] rounded-sm">
        <Icon className="h-fit w-5 sm:w-6 text-[#FFEC78]" />
      </div>
      <div className="text-start">
        <p className="text-[#93A3B6] text-[14px] sm:text-[16px]">{title}</p>
        <p className="text-[#FEF8FD] text-[14px] sm:text-[16px]">{value}</p>
      </div>
    </div>
  );
}
