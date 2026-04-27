import VehicleItem from "./VehicleItem";

export default function Vehicles({ vehicles }) {
  if (!vehicles.length) return null;

  return (
    <>
      <p className="text-[#FEF8FD] font-medium mb-3.5">Kendaraan Terdaftar</p>
      <div className="mb-6 flex flex-col gap-y-3">
        {vehicles.map((vehicle, index) => (
          <VehicleItem key={index} vehicle={vehicle} />
        ))}
      </div>
    </>
  );
}
