import Card from "./Card";

export default function Grid({ vehicles }) {
  if (!vehicles.length) {
    return (
      <p className="text-[#93A3B6] text-sm mt-3.5">
        Tidak ada kendaraan sedang parkir
      </p>
    );
  }
  return (
    <div className="flex flex-col gap-y-3.5 mt-3.5">
      {vehicles.map((vehicle) => (
        <Card key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
}
