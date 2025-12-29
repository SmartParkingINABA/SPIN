import { IoSearch } from "react-icons/io5";

export default function Search() {
  return (
    <div className="flex gap-x-3 mt-3.5">
      <input
        type="text"
        className="bg-[#F5E79E] h-10 px-3 rounded-sm outline-0 w-full"
        placeholder="Masukan no plat kendaraan..."
      />
      <button className="h-10 px-3 bg-[#FFDB58] text-[#130F40] rounded-sm opacity-100 hover:opacity-80 transition cursor-pointer">
        <IoSearch className="h-fit w-5 text-[#130F40]" />
      </button>
    </div>
  );
}
