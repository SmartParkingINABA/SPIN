export default function TableRow({ data, index, isLast }) {
  const { plate, name, vehicle, checkIn, duration } = data;

  return (
    <tr className={!isLast ? "border-b-2 border-[rgba(147,163,182,0.8)]" : ""}>
      <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">
        {index + 1}
      </td>
      <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">{plate}</td>
      <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">{name}</td>
      <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">
        <span
          className={`${
            vehicle === "Mobil" ? "bg-[#FFEC78]" : "bg-[#D3CBD1]"
          } text-[#4B4141] py-1 px-2 rounded-sm`}
        >
          {vehicle}
        </span>
      </td>
      <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">{checkIn}</td>
      <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">{duration}</td>
    </tr>
  );
}
