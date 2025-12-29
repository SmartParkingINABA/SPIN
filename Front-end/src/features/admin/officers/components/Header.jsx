import { FaPlus } from "react-icons/fa6";

export default function Header({ setIsModalOpenAdd }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-[#FEF8FD] text-2xl font-bold">Petugas Parkir</h1>
        <p className="text-[#93A3B6] font-medium mt-1">
          Kelola petugas parkir dan shift kerja
        </p>
      </div>
      <button
        className="bg-[#FFDB58] flex items-center gap-x-2.5 rounded-md px-3 py-2 cursor-pointer transition opacity-100 hover:opacity-80"
        onClick={setIsModalOpenAdd}
      >
        <FaPlus className="h-fit w-5" />
        <p className="text-[#130F40] font-medium">Tambah Petugas</p>
      </button>
    </div>
  );
}
