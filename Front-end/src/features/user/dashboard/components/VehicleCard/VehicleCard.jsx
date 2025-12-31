export default function VehicleCard({ vehicle }) {
  const Icon = vehicle.icon;
  return (
    <div className="mt-3.5 px-6 py-4 rounded-md bg-[#130F40] flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <div className="bg-[#4B4141] rounded-sm p-3">
          <Icon className="text-[#FFEC78] w-6 h-fit" />
        </div>
        <div className="">
          <p className="text-[#FEF8FD] font-medium">{vehicle.plate}</p>
          <p className="text-[#93A3B6] text-[14px] font-medium">
            {vehicle.type} • {vehicle.category}
          </p>
        </div>
      </div>
      <p className="text-[#FFEC78] bg-[#4B4141] text-[14px] px-3 py-1 rounded-sm font-medium">
        Aktif
      </p>
    </div>
  );
}
