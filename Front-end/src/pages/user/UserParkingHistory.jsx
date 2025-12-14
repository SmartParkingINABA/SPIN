import UserDropdownHistory from "../../components/user/UserDropdownHistory";

import { RxLapTimer, RxTimer } from "react-icons/rx";
import { LuRepeat2 } from "react-icons/lu";

export default function UserParkingHistory() {
  const rows = [
    {
      tanggal: "18 Nov 2025",
      plat: "A 8993 AB",
      jamMasuk: "10:00 WIB",
      jamKeluar: "12:00 WIB",
      durasi: "2 jam",
    },
    {
      tanggal: "18 Nov 2025",
      plat: "B 1234 CD",
      jamMasuk: "11:30 WIB",
      jamKeluar: null, // 👈 masih parkir
      durasi: "-",
    },
    {
      tanggal: "18 Nov 2025",
      plat: "A 8993 AB",
      jamMasuk: "10:00 WIB",
      jamKeluar: "12:00 WIB",
      durasi: "2 jam",
    },
    {
      tanggal: "18 Nov 2025",
      plat: "B 1234 CD",
      jamMasuk: "11:30 WIB",
      jamKeluar: null, // 👈 masih parkir
      durasi: "-",
    },
    {
      tanggal: "18 Nov 2025",
      plat: "A 8993 AB",
      jamMasuk: "10:00 WIB",
      jamKeluar: "12:00 WIB",
      durasi: "2 jam",
    },
    {
      tanggal: "18 Nov 2025",
      plat: "B 1234 CD",
      jamMasuk: "11:30 WIB",
      jamKeluar: null, // 👈 masih parkir
      durasi: "-",
    },
  ];

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <h1 className="text-[#FEF8FD] text-2xl font-bold">Riwayat Parkir</h1>
      <p className="text-[#93A3B6] font-medium mt-1">
        Catatan aktivitas parkir kendaraan anda
      </p>
      <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md grid grid-cols-2 gap-x-7 py-5 px-6 mt-6">
        <div>
          <p className="text-[#93A3B6] font-medium mb-2">Filter Status</p>
          <UserDropdownHistory selectedOption={"Semua Status"} />
        </div>
        <div>
          <p className="text-[#93A3B6] font-medium mb-2">Filter Kendaraan</p>
          <UserDropdownHistory selectedOption={"Semua Kendaraan"} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-7 mt-6">
        <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] flex items-center gap-x-4.5 rounded-md py-5 px-6">
          <div className="p-3 bg-[#4B4141] rounded-sm">
            <LuRepeat2 className="h-fit w-6 text-[#FFEC78]" />
          </div>
          <div className="text-center">
            <p className="text-[#93A3B6]">Total Parkir</p>
            <p className="text-[#FEF8FD]">6 Kali</p>
          </div>
        </div>
        <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] flex items-center gap-x-4.5 rounded-md py-5 px-6">
          <div className="p-3 bg-[#4B4141] rounded-sm">
            <RxTimer className="h-fit w-6 text-[#FFEC78]" />
          </div>
          <div className="text-center">
            <p className="text-[#93A3B6]">Total Durasi</p>
            <p className="text-[#FEF8FD]">42 Jam</p>
          </div>
        </div>
        <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] flex items-center gap-x-4.5 rounded-md py-5 px-6">
          <div className="p-3 bg-[#4B4141] rounded-sm">
            <RxLapTimer className="h-fit w-6 text-[#FFEC78]" />
          </div>
          <div className="text-center">
            <p className="text-[#93A3B6]">Sedang Parkir</p>
            <p className="text-[#FEF8FD]">1 Kendaraan</p>
          </div>
        </div>
      </div>
      <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md py-5 px-6 mt-6">
        <h2 className="text-[#93A3B6] font-bold mb-4">Daftar Riwayat</h2>
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
              {rows.map((row, i) => {
                const isParked = !row.jamKeluar;

                return (
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
                      {row.tanggal}
                    </td>

                    <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">
                      {row.plat}
                    </td>

                    <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">
                      {row.jamMasuk}
                    </td>

                    <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">
                      {row.jamKeluar ?? "-"}
                    </td>

                    <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">
                      {row.durasi}
                    </td>

                    {/* STATUS */}
                    <td className="p-2 text-[14px] font-medium">
                      {isParked ? (
                        <span className="bg-[#FFEC78] text-[#4B4141] rounded-sm px-2 py-1">
                          Sedang Parkir
                        </span>
                      ) : (
                        <span className="bg-[#4B4141] text-[#FFEC78] rounded-sm px-2 py-1">
                          Selesai
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
