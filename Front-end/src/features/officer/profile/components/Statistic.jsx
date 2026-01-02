export default function Statistic() {
  return (
    <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md w-1/3">
      <p className="text-[#FEF8FD] font-medium">Statistik Hari Ini</p>
      <div className="mt-3.5 flex flex-col gap-y-3.5">
        <div className="bg-green-100 rounded-sm px-3 py-1.5">
          <p className="text-[14px] text-[#48515b]">Kendaraan Masuk</p>
          <p className="text-green-500">24 kendaraan</p>
        </div>
        <div className="bg-blue-100 rounded-sm px-3 py-1.5">
          <p className="text-[14px] text-[#48515b]">Kendaraan Keluar</p>
          <p className="text-blue-500">18 kendaraan</p>
        </div>
        <div className="bg-orange-100 rounded-sm px-3 py-1.5">
          <p className="text-[14px] text-[#48515b]">Waktu Kerja</p>
          <p className="text-orange-500">3 jam 45 menit</p>
        </div>
      </div>
    </div>
  );
}
