import StatusBadge from "./StatusBadge";

export default function MobileHistoryCard({ row, index }) {
  const isParked = !row.jam_keluar;

  return (
    <div className="bg-[#130F40] border border-[rgba(147,163,182,0.5)] rounded-md p-4">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-xs text-[#93A3B6]">Riwayat #{index + 1}</p>
          <h3 className="text-sm font-semibold text-[#D3CBD1]">{row.plat}</h3>
          <p className="text-xs text-[#93A3B6] mt-1">{row.tanggal}</p>
        </div>
        <StatusBadge isParked={isParked} />
      </div>

      {/* Body */}
      <div className="space-y-3 text-sm">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-[#93A3B6]">Jam Masuk</p>
            <p className="text-[#D3CBD1]">{row.jam_masuk}</p>
          </div>

          <div>
            <p className="text-xs text-[#93A3B6]">Jam Keluar</p>
            <p className="text-[#D3CBD1]">{row.jam_keluar ?? "-"}</p>
          </div>
        </div>

        <div>
          <p className="text-xs text-[#93A3B6]">Durasi</p>
          <p className="text-[#D3CBD1]">{row.durasi ?? "-"}</p>
        </div>
      </div>
    </div>
  );
}
