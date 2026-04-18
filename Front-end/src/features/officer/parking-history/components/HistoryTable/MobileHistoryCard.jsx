export default function MobileHistoryCard({ data, index }) {
  const { date, plate, name, checkIn, checkOut, duration, status } = data;

  return (
    <div className="bg-[#130F40] border border-[rgba(147,163,182,0.5)] rounded-md p-4">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-xs text-[#93A3B6]">Riwayat #{index + 1}</p>
          <h3 className="text-sm font-semibold text-[#D3CBD1]">{plate}</h3>
          <p className="text-xs text-[#93A3B6] mt-1">{date}</p>
        </div>

        <span
          className={`text-xs px-2 py-1 rounded-sm
            ${
              status === "Selesai"
                ? "bg-[#4B4141] text-[#FFEC78]"
                : "bg-[#FFEC78] text-[#4B4141]"
            }
          `}
        >
          {status}
        </span>
      </div>

      {/* Body */}
      <div className="space-y-3 text-sm">
        <div>
          <p className="text-xs text-[#93A3B6]">Nama Pengendara</p>
          <p className="text-[#D3CBD1] font-medium">{name}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-[#93A3B6]">Jam Masuk</p>
            <p className="text-[#D3CBD1]">{checkIn}</p>
          </div>

          <div>
            <p className="text-xs text-[#93A3B6]">Jam Keluar</p>
            <p className="text-[#D3CBD1]">{checkOut}</p>
          </div>
        </div>

        <div>
          <p className="text-xs text-[#93A3B6]">Durasi</p>
          <p className="text-[#D3CBD1]">{duration}</p>
        </div>
      </div>
    </div>
  );
}
