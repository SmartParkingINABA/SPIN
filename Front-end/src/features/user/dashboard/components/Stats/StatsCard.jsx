export default function StatsCard({ title, value, icon }) {
  const Icon = icon;
  return (
    <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex items-center justify-between px-13 py-7 rounded-md">
      <div className="text-center">
        <p className="text-[#93A3B6]">{title}</p>
        <p className="text-[#FEF8FD]">{value}</p>
      </div>
      <div className="bg-[#4B4141] rounded-full p-3 flex justify-center items-center">
        <Icon className="text-[#FFEC78] w-6 h-fit" />
      </div>
    </div>
  );
}
