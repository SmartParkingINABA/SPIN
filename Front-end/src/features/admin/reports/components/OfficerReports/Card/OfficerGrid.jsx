import OfficerCard from "./OfficerCard";

export default function OfficerGrid({ officers }) {
  return (
    <div className="flex flex-col gap-y-3.5 mt-3.5">
      {officers.map((officer) => (
        <OfficerCard key={officer.id} officer={officer} />
      ))}
    </div>
  );
}
