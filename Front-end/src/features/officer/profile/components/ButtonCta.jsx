import { PiNotePencilThin } from "react-icons/pi";

export default function ButtonCta({ setIsModalOpen }) {
  return (
    <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md w-1/3">
      <p className="text-[#FEF8FD] font-medium">Aksi</p>
      <div className="mt-3.5 flex flex-col gap-y-3">
        <button
          onClick={setIsModalOpen}
          className="w-full flex items-center gap-x-3 bg-[#d3d3d3] rounded-sm py-1.5 px-3 cursor-pointer opacity-100 hover:opacity-80 transition"
        >
          <PiNotePencilThin className="w-5 h-fit text-[#48515b]" />
          <p className="text-[#48515b]">Edit Profile</p>
        </button>
      </div>
    </div>
  );
}
