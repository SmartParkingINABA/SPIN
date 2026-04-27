import MobileHistoryCard from "./MobileHistoryCard";
import TableRow from "./TableRow";

export default function HistoryList({ rows, pagination }) {
  return (
    <>
      {/* Mobile View */}
      <div className="block sm:hidden mt-4 space-y-4">
        {rows.map((row, i) => (
          <MobileHistoryCard
            key={row.id || i}
            row={row}
            index={(pagination.page - 1) * pagination.limit + i}
          />
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden sm:block border-2 border-[#D3CBD1] rounded-md mt-3.5">
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
                key={row.id || i}
                row={row}
                index={(pagination.page - 1) * pagination.limit + i}
                isLast={i === rows.length - 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
