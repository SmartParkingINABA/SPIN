export default function IncomingVehicle({ rows }) {
  return (
    <div className="border-2 border-[#D3CBD1] rounded-md mt-3.5">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-b-[#D3CBD1]">
            <th className="text-[#FFEC78] p-2 text-[14px] text-start">No</th>
            <th className="text-[#FFEC78] p-2 text-[14px] text-start">
              Tanggal
            </th>
            <th className="text-[#FFEC78] p-2 text-[14px] text-start">
              No. Plat
            </th>
            <th className="text-[#FFEC78] p-2 text-[14px] text-start">
              Pengendara
            </th>
            <th className="text-[#FFEC78] p-2 text-[14px] text-start">
              Waktu Masuk
            </th>
            <th className="text-[#FFEC78] p-2 text-[14px] text-start">
              Petugas
            </th>
          </tr>
        </thead>
        <tbody>
          {/* border-2 border-[#D3CBD1] */}
          {rows.map((_, i) => (
            <tr
              key={i}
              className={`${
                i !== rows.length - 1 ? "border-b-2 border-[#D3CBD1]" : ""
              }`}
            >
              <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">
                {i + 1}
              </td>
              <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">
                27/11/2024
              </td>
              <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">
                B 1234 XYZ
              </td>
              <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">
                Ahmad Fauzi
              </td>
              <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">
                08.30.00
              </td>
              <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">
                Joko Widodo
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
