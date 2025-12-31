import StatusBadge from "./StatusBadge";

const tdClass = "p-2 text-[14px] text-[#D3CBD1] font-medium";

export default function TableRow({ row, index, isLast }) {
  const isParked = !row.jamKeluar;

  return (
    <tr className={!isLast ? "border-b-2 border-[#D3CBD1]" : ""}>
      <td className={tdClass}>{index + 1}</td>
      <td className={tdClass}>{row.tanggal}</td>
      <td className={tdClass}>{row.plat}</td>
      <td className={tdClass}>{row.jamMasuk}</td>
      <td className={tdClass}>{row.jamKeluar ?? "-"}</td>
      <td className={tdClass}>{row.durasi}</td>
      <td className="p-2 text-[14px] font-medium">
        <StatusBadge isParked={isParked} />
      </td>
    </tr>
  );
}
