import Actions from "./Actions";
import Profile from "./Profile";

export default function Card({ vehicle, openModalDetail, openModalEdit }) {
  return (
    <div className="bg-[#130F40] border border-[rgba(255,236,120,0.5)] px-6 py-4 rounded-sm flex items-center justify-between">
      <Profile vehicle={vehicle} />
      <Actions
        openModalDetail={openModalDetail}
        openModalEdit={openModalEdit}
      />
    </div>
  );
}
