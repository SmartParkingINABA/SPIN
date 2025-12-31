import VehicleCard from "./VehicleCard";

export default function VehicleGrid({ vehicles }) {
  return (
    <>
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </>
  );
}
