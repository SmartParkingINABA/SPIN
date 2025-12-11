import { IoIosSearch } from "react-icons/io";
import { MdDateRange } from "react-icons/md";

export default function OfficerParkingHistory() {
  const rows = Array.from({ length: 10 });

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <h1 className="text-[#FEF8FD] text-2xl font-bold">Riwayat Parkir</h1>
      <p className="text-[#93A3B6] font-medium mt-1">
        Log kendaraan yang masuk dan keluar
      </p>
      <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
        <div className="flex items-center justify-between mb-6">
          <p className="text-[#FEF8FD] font-semibold flex items-center gap-x-2">
            <MdDateRange className="w-5 h-fit" />
            Riwayat Parkir (8 record)
          </p>
          <div className="flex items-center gap-x-2 bg-[#F5E79E] py-2 px-3 rounded-sm">
            <IoIosSearch className="w-5 h-fit cursor-pointer" />
            <input
              type="text"
              placeholder="Cari plat nomor atau nama..."
              className="outline-0 bg-transparent"
            />
          </div>
        </div>
        <div className="border-2 border-[#D3CBD1] rounded-md">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-b-[#D3CBD1]">
                <th className="text-[#FFEC78] p-2 text-[14px] text-start">
                  No
                </th>
                <th className="text-[#FFEC78] p-2 text-[14px] text-start">
                  Tanggal
                </th>
                <th className="text-[#FFEC78] p-2 text-[14px] text-start">
                  Plat Nomor
                </th>
                <th className="text-[#FFEC78] p-2 text-[14px] text-start">
                  Nama Pengendara
                </th>
                <th className="text-[#FFEC78] p-2 text-[14px] text-start">
                  Jam Masuk
                </th>
                <th className="text-[#FFEC78] p-2 text-[14px] text-start">
                  Jam Keluar
                </th>
                <th className="text-[#FFEC78] p-2 text-[14px] text-start">
                  Durasi
                </th>
                <th className="text-[#FFEC78] p-2 text-[14px] text-start">
                  Status
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
                  <td className="p-2 text-[14px] text-[#D3CBD1] text-start font-medium">
                    {i + 1}
                  </td>
                  <td className="p-2 text-[14px] text-[#D3CBD1] text-start font-medium">
                    18 Nov 2025
                  </td>
                  <td className="p-2 text-[14px] text-[#D3CBD1] text-start font-medium">
                    A 8993 AB
                  </td>
                  <td className="p-2 text-[14px] text-[#D3CBD1] text-start font-medium">
                    Yono Bakrie
                  </td>
                  <td className="p-2 text-[14px] text-[#D3CBD1] text-start font-medium">
                    10:00 WIB
                  </td>
                  <td className="p-2 text-[14px] text-[#D3CBD1] text-start font-medium">
                    12:00 WIB
                  </td>
                  <td className="p-2 text-[14px] text-[#D3CBD1] text-start font-medium">
                    1 hari 24 jam
                  </td>
                  <td className="p-2 text-[14px] text-green-600 text-start font-medium">
                    <span className="bg-green-50 border border-green-500 rounded-sm px-1 py-0.5">
                      Selesai
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
