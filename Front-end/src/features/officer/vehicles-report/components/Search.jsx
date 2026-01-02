import { IoIosSearch } from "react-icons/io";

export default function Search() {
  return (
    <div className="flex items-center justify-between mb-4.5">
      <p className="text-[#FEF8FD] font-semibold">Kendaraan Aktif (6)</p>
      <div className="flex items-center gap-x-2 bg-[#F5E79E] py-2 px-3 rounded-sm">
        <IoIosSearch className="w-5 h-fit cursor-pointer" />
        <input
          type="text"
          placeholder="Cari plat nomor atau nama..."
          className="outline-0 bg-transparent"
        />
      </div>
    </div>
  );
}
