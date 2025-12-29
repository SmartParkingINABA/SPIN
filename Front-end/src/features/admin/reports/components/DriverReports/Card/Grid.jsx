import Card from "./Card";

export default function Grid({ drivers }) {
  return (
    <div className="flex flex-col gap-y-3.5 mt-3.5">
      {drivers.map((driver) => (
        <Card key={driver.id} driver={driver} />
      ))}
    </div>
  );
}
