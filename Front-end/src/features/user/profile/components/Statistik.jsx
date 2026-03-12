export default function Statistik({ statistik }) {
  return (
    <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
      <p className="text-[#FEF8FD] font-medium">Statistik</p>
      <div className="mt-3.5 flex flex-col gap-y-3.5">
        <div className="pb-3 border-b border-b-[rgba(255,236,120,0.5)]">
          <p className="text-[14px] text-[#93A3B6]">Total Kendaraan</p>
          <p className="text-[#FEF8FD]">
            {statistik.total_kendaraan} kendaraan
          </p>
        </div>
        <div className="pb-3 border-b border-b-[rgba(255,236,120,0.5)]">
          <p className="text-[14px] text-[#93A3B6]">Total Parkir</p>
          <p className="text-[#FEF8FD]">{statistik.total_parkir} Kali</p>
        </div>
        <div className="">
          <p className="text-[14px] text-[#93A3B6]">Bergabung Sejak</p>
          <p className="text-[#FEF8FD]">{statistik.bergabung_sejak}</p>
        </div>
      </div>
    </div>
  );
}
