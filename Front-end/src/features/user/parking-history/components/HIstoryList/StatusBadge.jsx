export default function StatusBadge({ isParked }) {
  return isParked ? (
    <span className="bg-[#FFEC78] text-[#4B4141] rounded-sm px-2 py-1">
      Sedang Parkir
    </span>
  ) : (
    <span className="bg-[#4B4141] text-[#FFEC78] rounded-sm px-2 py-1">
      Selesai
    </span>
  );
}
