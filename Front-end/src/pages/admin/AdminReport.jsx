import { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineFileDownload, MdOutlineDateRange } from "react-icons/md";
import { PiChartLineDownLight, PiChartLineUpLight } from "react-icons/pi";
import AdminBoxChartReportRider from "../../components/admin/AdminBoxChartReportRider";
import { LuUserCog, LuUsers } from "react-icons/lu";
import AdminDateInput from "../../components/admin/AdminDateInput";
import AdminPieChartRider from "../../components/admin/AdminPieChartReportRider";
import AdminBoxChartReportOfficer from "../../components/admin/AdminBoxChartReportOfficer";

export default function AdminReport() {
  const [createMode, setCreateMode] = useState("laporan parkir");
  const rows = Array.from({ length: 10 });

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#FEF8FD] text-2xl font-bold">Laporan</h1>
          <p className="text-[#93A3B6] font-medium mt-1">
            Analisis dan laporan data parkir
          </p>
        </div>
        <div className="flex items-center gap-x-3.5">
          <button className="bg-[#FFDB58] flex items-center gap-x-2.5 rounded-md px-3 py-2 cursor-pointer transition opacity-100 hover:opacity-80">
            <MdOutlineFileDownload className="h-fit w-5" />
            <p className="text-[#130F40] font-medium">Expoort PDF</p>
          </button>
          <button className="bg-[#FFDB58] flex items-center gap-x-2.5 rounded-md px-3 py-2 cursor-pointer transition opacity-100 hover:opacity-80">
            <MdOutlineFileDownload className="h-fit w-5" />
            <p className="text-[#130F40] font-medium">Expoort Excel</p>
          </button>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-[5.5fr_5.5fr_1fr] gap-x-6 items-end border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
        <AdminDateInput label="Tanggal Mulai" />
        <AdminDateInput label="Tanggal Akhir" />
        <button className="bg-[#FFDB58] flex items-center gap-x-2.5 rounded-md px-3 py-2 cursor-pointer transition opacity-100 hover:opacity-80">
          <MdOutlineDateRange className="h-fit w-5" />
          <p className="text-[#130F40] font-medium">Filter</p>
        </button>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-x-2 bg-[#93A3B6] p-1 rounded-md">
        <button
          className={`${
            createMode === "laporan parkir" ? "bg-[#FFDB58]" : "bg-transparent"
          } text-[#130F40] font-medium rounded-sm px-2 py-0.5 cursor-pointer`}
          onClick={() => setCreateMode("laporan parkir")}
        >
          Laporan Parkir
        </button>
        <button
          className={`${
            createMode === "laporan pengendara"
              ? "bg-[#FFDB58]"
              : "bg-transparent"
          } text-[#130F40] font-medium rounded-sm px-2 py-0.5 cursor-pointer`}
          onClick={() => setCreateMode("laporan pengendara")}
        >
          Laporan Pengendara
        </button>
        <button
          className={`${
            createMode === "laporan petugas" ? "bg-[#FFDB58]" : "bg-transparent"
          } text-[#130F40] font-medium rounded-sm px-2 py-0.5 cursor-pointer`}
          onClick={() => setCreateMode("laporan petugas")}
        >
          Laporan Petugas
        </button>
      </div>
      {createMode === "laporan parkir" && (
        <>
          <div className="mt-6 grid grid-cols-3 gap-x-6">
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-10 px-6 py-4 rounded-md">
              <p className="text-[#FEF8FD] font-medium text-[15px]">
                Total Kendaraan Masuk
              </p>
              <div className="flex items-center gap-x-2">
                <PiChartLineUpLight className="h-fit w-7 text-green-500" />
                <p className="text-[#93A3B6] font-medium">5</p>
              </div>
            </div>
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-10 px-6 py-4 rounded-md">
              <p className="text-[#FEF8FD] font-medium text-[15px]">
                Total Kendaraan Keluar
              </p>
              <div className="flex items-center gap-x-2">
                <PiChartLineDownLight className="h-fit w-8 text-red-500" />
                <p className="text-[#93A3B6] font-medium">2</p>
              </div>
            </div>
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-10 px-6 py-4 rounded-md">
              <p className="text-[#FEF8FD] font-medium text-[15px]">
                Durasi Rata-rata
              </p>
              <div className="flex items-center gap-x-2">
                <FaRegClock className="h-fit w-6 text-blue-500" />
                <p className="text-[#93A3B6] font-medium">6j 45m</p>
              </div>
            </div>
          </div>
          <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
            <p className="text-[#FEF8FD] font-semibold">Kendaraan Masuk</p>
            <div className="border-2 border-[#D3CBD1] rounded-md mt-3.5">
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
                        i !== rows.length - 1
                          ? "border-b-2 border-[#D3CBD1]"
                          : ""
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
          </div>
          <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
            <p className="text-[#FEF8FD] font-semibold">Kendaraan Keluar</p>
            <div className="border-2 border-[#D3CBD1] rounded-md mt-3.5">
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
                      No. Plat
                    </th>
                    <th className="text-[#FFEC78] p-2 text-[14px] text-start">
                      Pengendara
                    </th>
                    <th className="text-[#FFEC78] p-2 text-[14px] text-start">
                      Waktu Masuk
                    </th>
                    <th className="text-[#FFEC78] p-2 text-[14px] text-start">
                      Waktu Keluar
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
                        i !== rows.length - 1
                          ? "border-b-2 border-[#D3CBD1]"
                          : ""
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
                        17.30.00
                      </td>
                      <td className="p-2 text-[14px] text-[#D3CBD1] font-medium">
                        Joko Widodo
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {createMode === "laporan pengendara" && (
        <>
          <div className="mt-6 grid grid-cols-2 gap-x-6">
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col px-6 py-4 rounded-md">
              <p className="text-[#FEF8FD] font-medium">
                Pengendara Paling Sering Parkir
              </p>
              <AdminBoxChartReportRider />
            </div>
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col px-6 py-4 rounded-md">
              <p className="text-[#FEF8FD] font-medium">
                Distribusi Parkir per Pengendara
              </p>
              <AdminPieChartRider />
            </div>
          </div>
          <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col px-6 py-4 rounded-md">
            <p className="text-[#FEF8FD] font-medium">
              Pengendara Baru Terdaftar
            </p>
            <div className="flex flex-col gap-y-3.5 mt-3.5">
              <div className="border border-[rgba(255,236,120,0.5)] px-5 py-2.5 rounded-sm bg-[#130F40] flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                  <div className="bg-blue-100 rounded-sm p-2">
                    <LuUsers className="text-blue-600 w-6 h-fit" />
                  </div>
                  <div className="">
                    <p className="text-[#FEF8FD] font-medium">Budi Santoso</p>
                    <p className="text-[#93A3B6] text-[14px] font-medium">
                      budi.santoso@email.com
                    </p>
                  </div>
                </div>
                <p className="text-[#FEF8FD] text-[14px]">10/3/2024</p>
              </div>
              <div className="border border-[rgba(255,236,120,0.5)] px-5 py-2.5 rounded-sm bg-[#130F40] flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                  <div className="bg-blue-100 rounded-sm p-2">
                    <LuUsers className="text-blue-600 w-6 h-fit" />
                  </div>
                  <div className="">
                    <p className="text-[#FEF8FD] font-medium">Budi Santoso</p>
                    <p className="text-[#93A3B6] text-[14px] font-medium">
                      budi.santoso@email.com
                    </p>
                  </div>
                </div>
                <p className="text-[#FEF8FD] text-[14px]">10/3/2024</p>
              </div>
              <div className="border border-[rgba(255,236,120,0.5)] px-5 py-2.5 rounded-sm bg-[#130F40] flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                  <div className="bg-blue-100 rounded-sm p-2">
                    <LuUsers className="text-blue-600 w-6 h-fit" />
                  </div>
                  <div className="">
                    <p className="text-[#FEF8FD] font-medium">Budi Santoso</p>
                    <p className="text-[#93A3B6] text-[14px] font-medium">
                      budi.santoso@email.com
                    </p>
                  </div>
                </div>
                <p className="text-[#FEF8FD] text-[14px]">10/3/2024</p>
              </div>
            </div>
          </div>
        </>
      )}

      {createMode === "laporan petugas" && (
        <>
          <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
            <p className="text-[#FEF8FD] font-medium">Petugas Paling Aktif</p>
            <AdminBoxChartReportOfficer />
          </div>
          <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col px-6 py-4 rounded-md">
            <p className="text-[#FEF8FD] font-medium">
              Detail Aktivitas Petugas
            </p>
            <div className="flex flex-col gap-y-3.5 mt-3.5">
              <div className="border border-[rgba(255,236,120,0.5)] px-5 py-2.5 rounded-sm bg-[#130F40] flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                  <div className="bg-green-100 rounded-sm p-2">
                    <LuUserCog className="text-green-600 w-6 h-fit" />
                  </div>
                  <div className="">
                    <p className="text-[#FEF8FD] font-medium">Joko Widodo</p>
                    <p className="text-[#93A3B6] text-[14px] font-medium">
                      Menangani 3 kendaraan masuk/keluar
                    </p>
                  </div>
                </div>
                <p className="text-[#FEF8FD] bg-green-500 rounded-sm px-2.5 py-0.5 w-fit text-[14px]">
                  3 Transaksi
                </p>
              </div>
              <div className="border border-[rgba(255,236,120,0.5)] px-5 py-2.5 rounded-sm bg-[#130F40] flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                  <div className="bg-green-100 rounded-sm p-2">
                    <LuUserCog className="text-green-600 w-6 h-fit" />
                  </div>
                  <div className="">
                    <p className="text-[#FEF8FD] font-medium">Joko Widodo</p>
                    <p className="text-[#93A3B6] text-[14px] font-medium">
                      Menangani 3 kendaraan masuk/keluar
                    </p>
                  </div>
                </div>
                <p className="text-[#FEF8FD] bg-green-500 rounded-sm px-2.5 py-0.5 w-fit text-[14px]">
                  3 Transaksi
                </p>
              </div>
              <div className="border border-[rgba(255,236,120,0.5)] px-5 py-2.5 rounded-sm bg-[#130F40] flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                  <div className="bg-green-100 rounded-sm p-2">
                    <LuUserCog className="text-green-600 w-6 h-fit" />
                  </div>
                  <div className="">
                    <p className="text-[#FEF8FD] font-medium">Joko Widodo</p>
                    <p className="text-[#93A3B6] text-[14px] font-medium">
                      Menangani 3 kendaraan masuk/keluar
                    </p>
                  </div>
                </div>
                <p className="text-[#FEF8FD] bg-green-500 rounded-sm px-2.5 py-0.5 w-fit text-[14px]">
                  3 Transaksi
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
