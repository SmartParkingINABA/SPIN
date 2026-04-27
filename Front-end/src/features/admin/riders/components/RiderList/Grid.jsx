import Card from "./Card/Card";

export default function Grid({ riders, handleToggleActive, setIsModalOpen }) {
  return (
    <div className="mt-3.5 flex flex-col gap-y-3.5">
      {riders.map((rider) => (
        <Card
          key={rider.id}
          rider={rider}
          handleToggleActive={() => handleToggleActive(rider.id)}
          setIsModalOpen={setIsModalOpen}
        />
      ))}
    </div>
  );
}
