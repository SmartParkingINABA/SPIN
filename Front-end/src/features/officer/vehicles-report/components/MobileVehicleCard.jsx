export function MobileVehicleCard({ data, index }) {
  const { plate, name, vehicle, checkIn, duration } = data;

  return (
    <div className="border border-[rgba(147,163,182,0.5)] rounded-md p-4 bg-[#130F40]">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-[#93A3B6] text-xs">Kendaraan #{index + 1}</p>

          <h3 className="text-[#D3CBD1] font-semibold text-sm">{plate}</h3>
        </div>

        <span
          className={`text-xs px-2 py-1 rounded-sm
            ${
              vehicle === "Mobil"
                ? "bg-[#FFEC78] text-[#4B4141]"
                : "bg-[#D3CBD1] text-[#4B4141]"
            }
          `}
        >
          {vehicle}
        </span>
      </div>

      {/* Body */}
      <div className="space-y-2 text-sm">
        <div>
          <p className="text-[#93A3B6] text-xs">Nama Pengendara</p>

          <p className="text-[#D3CBD1] font-medium">{name}</p>
        </div>

        <div className="flex justify-between">
          <div>
            <p className="text-[#93A3B6] text-xs">Waktu Masuk</p>

            <p className="text-[#D3CBD1]">{checkIn}</p>
          </div>

          <div className="text-right">
            <p className="text-[#93A3B6] text-xs">Durasi</p>

            <p className="text-[#D3CBD1]">{duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
