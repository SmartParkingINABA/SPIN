export default function ReportTabs({ createMode, setCreateMode }) {
  return (
    <div className="mt-6 grid grid-cols-3 gap-x-2 bg-[#93A3B6] p-1 rounded-md">
      <button
        className={`${
          createMode === "laporan parkir" ? "bg-[#FFDB58]" : "bg-transparent"
        } text-[#130F40] font-medium rounded-sm px-2 py-0.5 cursor-pointer`}
        onClick={() => setCreateMode("laporan parkir")}
      >
        Laporan Parkir
      </button>
      <button
        className={`${
          createMode === "laporan pengendara"
            ? "bg-[#FFDB58]"
            : "bg-transparent"
        } text-[#130F40] font-medium rounded-sm px-2 py-0.5 cursor-pointer`}
        onClick={() => setCreateMode("laporan pengendara")}
      >
        Laporan Pengendara
      </button>
      <button
        className={`${
          createMode === "laporan petugas" ? "bg-[#FFDB58]" : "bg-transparent"
        } text-[#130F40] font-medium rounded-sm px-2 py-0.5 cursor-pointer`}
        onClick={() => setCreateMode("laporan petugas")}
      >
        Laporan Petugas
      </button>
    </div>
  );
}
