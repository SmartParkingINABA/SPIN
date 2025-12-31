import TableRow from "./TableRow";

export default function HistoryList({ rows }) {
  return (
    <div className="border-2 border-[#D3CBD1] rounded-md">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-[#D3CBD1]">
            {[
              "No",
              "Tanggal",
              "Plat Nomor",
              "Jam Masuk",
              "Jam Keluar",
              "Durasi",
              "Status",
            ].map((head) => (
              <th
                key={head}
                className="text-[#FFEC78] p-2 text-[14px] text-start"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              row={row}
              index={i}
              isLast={i === rows.length - 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
