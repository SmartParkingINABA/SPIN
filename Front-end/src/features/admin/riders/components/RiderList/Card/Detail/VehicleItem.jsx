export default function VehicleItem({ vehicle }) {
  return (
    <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] rounded-sm py-2 px-4 flex items-center justify-between">
      <div>
        <p className="text-[#FEF8FD]">{vehicle.plate}</p>
        <p className="text-[#93A3B6] text-[14px]">
          {vehicle.type} - {vehicle.category}
        </p>
      </div>
      {vehicle.isParking && (
        <p className="text-green-600 bg-green-200 rounded-sm px-2.5 py-0.5 w-fit text-[13px]">
          Sedang Parkir
        </p>
      )}
    </div>
  );
}
