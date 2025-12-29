import ParkingHistoryItem from "./ParkingHistoryItem";

export default function ParkingHistory({ history }) {
  return (
    <>
      <p className="text-[#FEF8FD] font-medium mb-3.5">Riwayat Parkir</p>
      <div className="flex flex-col gap-y-3">
        {history.map((item, index) => (
          <ParkingHistoryItem key={index} item={item} />
        ))}
      </div>
    </>
  );
}
