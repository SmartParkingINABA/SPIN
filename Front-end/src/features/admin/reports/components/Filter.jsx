import { MdOutlineDateRange } from "react-icons/md";

export default function Filter() {
  return (
    <button className="bg-[#FFDB58] flex items-center gap-x-2.5 rounded-md px-3 py-2 cursor-pointer transition opacity-100 hover:opacity-80">
      <MdOutlineDateRange className="h-fit w-5" />
      <p className="text-[#130F40] font-medium">Filter</p>
    </button>
  );
}
