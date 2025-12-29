import Info from "./Info";
import Actions from "./Actions";

export default function Card({ officer, onToggleActive, setIsModalOpenEdit }) {
  return (
    <div className="bg-[#130F40] border border-[rgba(255,236,120,0.5)] px-6 py-4 rounded-sm flex items-center justify-between">
      <Info officer={officer} />
      <Actions
        officer={officer}
        onToggleActive={onToggleActive}
        setIsModalOpenEdit={setIsModalOpenEdit}
      />
    </div>
  );
}
