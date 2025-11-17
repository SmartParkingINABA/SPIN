/* eslint-disable no-unused-vars */
import { useState } from "react";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminDiagramChart from "../../components/admin/AdminDiagramChart";
import AdminFooter from "../../components/admin/AdminFooter";

export default function AdminDashboard() {
  const [entry, setEntry] = useState(3);
  const [exit, setExit] = useState(2);
  const [totalParking, setTotalParking] = useState(5);
  const [leftAfterADay, setLeftAfterADay] = useState(1);

  return (
    <main className="w-full h-screen font-ubuntu overflow-hidden">
      <AdminHeader />
      <AdminSidebar />
      <div className="ml-[17%] mt-[60px] w-[83%] bg-[#e3e4e0] p-4 h-[calc(100vh-60px)] overflow-y-auto">
        <section className="bg-[#F4F3F1] w-full rounded-md px-4 py-3">
          <p className="text-[#9CA3AF] text-[12px] font-semibold">/ Beranda</p>
          <h1 className="font-bold text-3xl mt-1 text-[#111827]">
            Selamat datang di dashboard Admin,
          </h1>
          <div className="grid grid-cols-4 gap-x-5 mt-5">
            <div className="border-2 border-[#e3e4e0] rounded-sm p-3">
              <div className="flex items-center gap-x-2 mb-2">
                <p className="w-5 h-5 rounded-full bg-[#F59E0B]"></p>
                <p className="font-semibold text-2xl">{entry}</p>
              </div>
              <p className="text-center text-[#9CA3AF] text-[12px] font-semibold">
                KENDARAAN MASUK
              </p>
            </div>
            <div className="border-2 border-[#e3e4e0] rounded-sm p-3">
              <div className="flex items-center gap-x-2 mb-2">
                <p className="w-5 h-5 rounded-full bg-[#10B981]"></p>
                <p className="font-semibold text-2xl">{exit}</p>
              </div>
              <p className="text-center text-[#9CA3AF] text-[12px] font-semibold">
                KENDARAAN KELUAR
              </p>
            </div>
            <div className="border-2 border-[#e3e4e0] rounded-sm p-3">
              <div className="flex items-center gap-x-2 mb-2">
                <p className="w-5 h-5 rounded-full bg-[#3B82F6]"></p>
                <p className="font-semibold text-2xl">{totalParking}</p>
              </div>
              <p className="text-center text-[#9CA3AF] text-[12px] font-semibold">
                TOTAL KENDARAAN PARKIR
              </p>
            </div>
            <div className="border-2 border-[#e3e4e0] rounded-sm p-3">
              <div className="flex items-center gap-x-2 mb-2">
                <p className="w-5 h-5 rounded-full bg-[#EF4444]"></p>
                <p className="font-semibold text-2xl">{leftAfterADay}</p>
              </div>
              <p className="text-center text-[#9CA3AF] text-[12px] font-semibold">
                MENINGGALKAN PARKIR SETELAH 24 JAM
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-5 mt-5">
            <div className="">
              <p className="font-semibold text-[#374151] text-[12px] bg-[#e3e4e0] rounded-sm px-3 py-2.5">
                Tampilan - Masuk | Baru Keluar
              </p>
              <div className="border-2 border-[#e3e4e0] mt-3 flex justify-center items-center rounded-sm">
                <AdminDiagramChart
                  colors={["#F59E0B", "#10B981"]}
                  exitEntryDatas={[
                    { name: "Masuk", value: entry },
                    { name: "Keluar", value: exit },
                  ]}
                />
              </div>
            </div>
            <div className="">
              <p className="font-semibold text-[#374151] text-[12px] bg-[#e3e4e0] rounded-sm px-3 py-2.5">
                Tampilan - Total Parkir | Sudah Lama Keluar
              </p>
              <div className="border-2 border-[#e3e4e0] mt-3 flex justify-center items-center rounded-sm">
                <AdminDiagramChart
                  colors={["#3B82F6", "#EF4444"]}
                  exitEntryDatas={[
                    { name: "Total", value: totalParking },
                    { name: "Keluar Setelah 24 Jam", value: leftAfterADay },
                  ]}
                />
              </div>
            </div>
          </div>

          <p className="text-[#9CA3AF] text-[10px] font-semibold mt-3">
            Showing 1 to 6 of 6 entries
          </p>
        </section>

        <AdminFooter />
      </div>
    </main>
  );
}
