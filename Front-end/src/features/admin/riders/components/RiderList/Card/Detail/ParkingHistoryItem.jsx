export default function ParkingHistoryItem({ item }) {
  return (
    <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] rounded-sm py-2 px-4 flex items-center justify-between">
      <div>
        <p className="text-[#FEF8FD]">{item.plate}</p>
        <p className="text-[#93A3B6] text-[14px]">Masuk: {item.entry}</p>
        <p className="text-[#93A3B6] text-[14px]">Keluar: {item.exit || "-"}</p>
      </div>
      {item.duration && (
        <p className="text-[#1E1633] bg-gray-200 rounded-sm px-2.5 py-0.5 w-fit text-[13px]">
          {item.duration}
        </p>
      )}
    </div>
  );
}
