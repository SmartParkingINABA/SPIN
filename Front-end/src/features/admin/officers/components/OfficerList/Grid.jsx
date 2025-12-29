import Card from "./Card/Card";

export default function Grid({ officers, onToggleActive, setIsModalOpenEdit }) {
  return (
    <div className="mt-3.5 flex flex-col gap-y-3.5">
      {officers.map((officer) => (
        <Card
          key={officer.id}
          officer={officer}
          onToggleActive={() => onToggleActive(officer.id)}
          setIsModalOpenEdit={setIsModalOpenEdit}
        />
      ))}
    </div>
  );
}
