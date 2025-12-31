import { FaPlus } from "react-icons/fa6";

export default function Header({ setIsModalOpen }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-[#FEF8FD] text-2xl font-bold">Data Kendaraan</h1>
        <p className="text-[#93A3B6] font-medium mt-1">
          Kelola kendaraan yang terdaftar
        </p>
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#FFDB58] flex items-center gap-x-2.5 rounded-md px-3 py-2 cursor-pointer transition opacity-100 hover:opacity-80"
      >
        <FaPlus className="w-6 h-fit" />
        <p className="text-[#1E1633] font-medium">Tambah Kendaraan</p>
      </button>
    </div>
  );
}
