export default function TableRowHistory({ data, index, isLast }) {
  const { date, plate, name, checkIn, checkOut, duration, status } = data;
  return (
    <tr
      key={index}
      className={!isLast ? "border-b-2 border-[rgba(147,163,182,0.8)]" : ""}
    >
      <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">
        {index + 1}
      </td>
      <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">{date}</td>
      <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">{plate}</td>
      <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">{name}</td>
      <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">{checkIn}</td>
      <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">{checkOut}</td>
      <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">{duration}</td>
      <td className="p-2 text-[14px] text-[#FFEC78] font-medium">
        <span
          className={`rounded-sm px-1 py-0.5 ${
            status === "Selesai"
              ? "bg-[#4B4141]"
              : "bg-[#FFEC78] text-[#4B4141]"
          }`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
}
