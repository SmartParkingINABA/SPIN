import Card from "./Card";

export default function Grid({ vehicles }) {
  return (
    <div className="mt-3.5 flex flex-col gap-y-3.5">
      {vehicles.map((vehicle) => (
        <Card key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
}
