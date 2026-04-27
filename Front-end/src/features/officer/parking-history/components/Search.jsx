import { IoIosSearch } from "react-icons/io";
import { MdDateRange } from "react-icons/md";

export default function Search({ total, search, setSearch }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3.5 sm:mb-4.5">
      <p className="text-[#FEF8FD] font-semibold flex items-center gap-x-2">
        <MdDateRange className="w-5 h-fit" />
        Riwayat Parkir ({total} record)
      </p>
      <div className="flex items-center gap-x-2 bg-[#F5E79E] py-2 px-3 rounded-sm mt-2 sm:mt-0">
        <IoIosSearch className="w-5 h-fit cursor-pointer" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari plat nomor atau nama..."
          className="outline-0 bg-transparent placeholder:text-[14px] sm:placeholder:text-[16px]"
        />
      </div>
    </div>
  );
}
