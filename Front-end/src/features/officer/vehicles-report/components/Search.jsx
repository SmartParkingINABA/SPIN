import { IoIosSearch } from "react-icons/io";

export default function Search({ search, setSearch, total }) {
  return (
    <div className="flex flex-col sm:items-center sm:justify-between mb-3.5 sm:mb-4.5">
      <p className="text-[#FEF8FD] font-semibold">Kendaraan Aktif ({total})</p>
      <div className="flex items-center gap-x-2 bg-[#F5E79E] py-2 px-3 rounded-sm">
        <IoIosSearch className="w-5 h-fit cursor-pointer" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari plat nomor atau nama..."
          className="outline-0 bg-transparent"
        />
      </div>
    </div>
  );
}
