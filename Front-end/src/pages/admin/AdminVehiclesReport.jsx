import AdminFooter from "../../components/admin/AdminFooter";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSidebar from "../../components/admin/AdminSidebar";

export default function AdminVehiclesReport() {
  return (
    <main className="w-full h-screen font-ubuntu bg-[#e3e4e0] overflow-hidden">
      <AdminHeader />
      <AdminSidebar />
      <section className="ml-[17%] mt-[60px] w-[83%] bg-[#e3e4e0] p-4 border-2 h-[calc(100vh-60px)] overflow-y-auto">
        <div className="bg-[#F4F3F1] w-full rounded-md px-4 py-3">
          <p className="text-[#9CA3AF] text-[12px] font-semibold">
            / Laporan Kendaraan
          </p>
          <h1 className="font-bold text-3xl mt-1 text-[#111827]">
            Laporan Kendaraan
          </h1>
          <p className="text-white text-[14px] rounded-sm py-2 px-3 mt-3 mb-2 font-semibold bg-[#3B82F6]">
            📄 Menampilkan Laporan Dari <span>2023-06-24</span> ke
            <span> 2023-07-12</span>
          </p>

          <div className="border-2 border-[#e3e4e0] rounded-sm p-3">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="border-2 border-[#e3e4e0] p-2 text-[14px] text-start">
                    No
                  </th>
                  <th className="border-2 border-[#e3e4e0] p-2 text-[14px] text-start">
                    Nomor Kendaraan
                  </th>
                  <th className="border-2 border-[#e3e4e0] p-2 text-[14px] text-start">
                    Nama Kendaraan
                  </th>
                  <th className="border-2 border-[#e3e4e0] p-2 text-[14px] text-start">
                    Jenis Kendaraan
                  </th>
                  <th className="border-2 border-[#e3e4e0] p-2 text-[14px] text-start">
                    Warna Kendraan
                  </th>
                  <th className="border-2 border-[#e3e4e0] p-2 text-[14px] text-start">
                    Tahun Keluaran
                  </th>
                  <th className="border-2 border-[#e3e4e0] p-2 text-[14px] text-start">
                    CC Kendaraan
                  </th>
                  <th className="border-2 border-[#e3e4e0] p-2 text-[14px] text-start">
                    Masa Berlaku
                  </th>
                  <th className="border-2 border-[#e3e4e0] p-2 text-[14px] text-start">
                    Nama Pemilik Kendaraan
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 100 }).map((_, i) => (
                  <tr key={i}>
                    <td className="border-2 border-[#e3e4e0] p-2 text-[14px] text-[#374151] text-start font-semibold">
                      {i + 1}
                    </td>
                    <td className="border-2 border-[#e3e4e0] p-2 text-[14px] text-[#374151] text-start font-semibold">
                      A 8993 AB
                    </td>
                    <td className="border-2 border-[#e3e4e0] p-2 text-[14px] text-[#374151] text-start font-semibold">
                      Yamaha NMAX
                    </td>
                    <td className="border-2 border-[#e3e4e0] p-2 text-[14px] text-[#374151] text-start font-semibold">
                      Motor
                    </td>
                    <td className="border-2 border-[#e3e4e0] p-2 text-[14px] text-[#374151] text-start font-semibold">
                      Putih
                    </td>
                    <td className="border-2 border-[#e3e4e0] p-2 text-[14px] text-[#374151] text-start font-semibold">
                      2020
                    </td>
                    <td className="border-2 border-[#e3e4e0] p-2 text-[14px] text-[#374151] text-start font-semibold">
                      150
                    </td>
                    <td className="border-2 border-[#e3e4e0] p-2 text-[14px] text-[#374151] text-start font-semibold">
                      2025
                    </td>
                    <td className="border-2 border-[#e3e4e0] p-2 text-[14px] text-[#374151] text-start font-semibold">
                      Yono
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <AdminFooter />
      </section>
    </main>
  );
}
