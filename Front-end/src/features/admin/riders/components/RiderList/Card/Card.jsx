import Actions from "./Actions";
import Profile from "./Profile";

export default function Card({ rider, handleToggleActive, setIsModalOpen }) {
  return (
    <div className="bg-[#130F40] border border-[rgba(255,236,120,0.5)] px-6 py-4 rounded-sm flex items-center justify-between">
      <Profile rider={rider} />
      <Actions
        rider={rider}
        handleToggleActive={handleToggleActive}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}
