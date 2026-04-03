import VehicleCard from "./VehicleCard";

export default function VehicleGrid({ vehicles, onUpdate, onDelete }) {
  return (
    <>
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </>
  );
}
