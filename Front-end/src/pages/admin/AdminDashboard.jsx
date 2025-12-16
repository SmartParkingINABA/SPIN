import { LuCar, LuCircleParking, LuUserCog } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { PiChartLineDownLight, PiChartLineUpLight } from "react-icons/pi";
import AdminChartDaily from "../../components/admin/AdminChartDaily";
import AdminChartInOut from "../../components/admin/AdminChartInOut";
import AdminChartDuration from "../../components/admin/AdminChartDuration";

export default function AdminDashboard() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <h1 className="text-[#FEF8FD] text-2xl font-bold">Dashboard Utama</h1>
      <p className="text-[#93A3B6] font-medium mt-1">
        Ringkasan statistik dan aktivitas parkir real-time
      </p>
      <div className="mt-6 grid grid-cols-4 gap-x-6">
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-8 px-6 py-4 rounded-md">
          <div className="flex items-center justify-between">
            <p className="text-[#FEF8FD] font-medium">Total Kendaraan</p>
            <LuCar className="h-fit w-5 text-blue-500" />
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="flex gap-x-2.5">
              <p className="text-[#FEF8FD]">5</p>
              <p className="text-green-500 flex items-center gap-x-0.5">
                <PiChartLineUpLight className="h-fit w-4" />{" "}
                <span className="text-[10px]">+12%</span>
              </p>
            </div>
            <p className="text-[#93A3B6] text-[15px]">Kendaraan terdaftar</p>
          </div>
        </div>
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-8 px-6 py-4 rounded-md">
          <div className="flex items-center justify-between">
            <p className="text-[#FEF8FD] font-medium">Sedang Parkir</p>
            <LuCircleParking className="h-fit w-5 text-green-500" />
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="flex gap-x-2.5">
              <p className="text-[#FEF8FD]">2</p>
              <p className="text-red-500 flex items-center gap-x-0.5">
                <PiChartLineDownLight className="h-fit w-4" />{" "}
                <span className="text-[10px]">-3%</span>
              </p>
            </div>
            <p className="text-[#93A3B6] text-[15px]">Kendaraan aktif parkir</p>
          </div>
        </div>
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-8 px-6 py-4 rounded-md">
          <div className="flex items-center justify-between">
            <p className="text-[#FEF8FD] font-medium">Total Pengendara</p>
            <FiUsers className="h-fit w-5 text-purple-500" />
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="flex gap-x-2.5">
              <p className="text-[#FEF8FD]">6</p>
              <p className="text-green-500 flex items-center gap-x-0.5">
                <PiChartLineUpLight className="h-fit w-4" />{" "}
                <span className="text-[10px]">+3%</span>
              </p>
            </div>
            <p className="text-[#93A3B6] text-[15px]">Pengendara terdaftar</p>
          </div>
        </div>
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-8 px-6 py-4 rounded-md">
          <div className="flex items-center justify-between">
            <p className="text-[#FEF8FD] font-medium">Petugas Aktif</p>
            <LuUserCog className="h-fit w-5 text-yellow-500" />
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="flex gap-x-2.5">
              <p className="text-[#FEF8FD]">2/3</p>
            </div>
            <p className="text-[#93A3B6] text-[15px]">Petugas online</p>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-x-6">
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col px-6 py-4 rounded-md">
          <p className="text-[#FEF8FD] font-medium">
            Parkir Per Hari (7 Hari Terakhir)
          </p>
          <AdminChartDaily />
        </div>
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col px-6 py-4 rounded-md">
          <p className="text-[#FEF8FD] font-medium">
            Kendaraan Masuk vs Keluar
          </p>
          <AdminChartInOut />
        </div>
      </div>
      <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
        <p className="text-[#FEF8FD] font-medium">
          Durasi Parkir Rata-rata (Menit)
        </p>
        <AdminChartDuration />
      </div>
      <div className="mt-6 grid grid-cols-2 gap-x-6">
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col px-6 py-4 rounded-md">
          <p className="text-[#FEF8FD] font-medium">Aktivitas Terbaru</p>
          <div className="">
            <div className="flex items-start gap-x-3 py-3.5 border-b border-b-[rgba(255,236,120,0.5)]">
              <div className="bg-green-100 rounded-sm p-1.5 mt-1">
                <PiChartLineUpLight className="text-green-600 w-5 h-fit" />
              </div>
              <div className="">
                <p className="text-[#FEF8FD] font-medium">Masuk: B 1234 XYZ</p>
                <p className="text-[#93A3B6] text-[13px] font-medium">
                  Ahmad Fauzi
                </p>
                <p className="text-[#93A3B6] text-[13px] font-medium">
                  27/11/2024, 08.30.00
                </p>
              </div>
            </div>
            <div className="flex items-start gap-x-3 py-3.5 border-b border-b-[rgba(255,236,120,0.5)]">
              <div className="bg-green-100 rounded-sm p-1.5 mt-1">
                <PiChartLineUpLight className="text-green-600 w-5 h-fit" />
              </div>
              <div className="">
                <p className="text-[#FEF8FD] font-medium">Masuk: B 1234 XYZ</p>
                <p className="text-[#93A3B6] text-[13px] font-medium">
                  Ahmad Fauzi
                </p>
                <p className="text-[#93A3B6] text-[13px] font-medium">
                  27/11/2024, 08.30.00
                </p>
              </div>
            </div>
            <div className="flex items-start gap-x-3 py-3.5 border-b border-b-[rgba(255,236,120,0.5)]">
              <div className="bg-green-100 rounded-sm p-1.5 mt-1">
                <PiChartLineUpLight className="text-green-600 w-5 h-fit" />
              </div>
              <div className="">
                <p className="text-[#FEF8FD] font-medium">Masuk: B 1234 XYZ</p>
                <p className="text-[#93A3B6] text-[13px] font-medium">
                  Ahmad Fauzi
                </p>
                <p className="text-[#93A3B6] text-[13px] font-medium">
                  27/11/2024, 08.30.00
                </p>
              </div>
            </div>
            <div className="flex items-start justify-between py-3.5 border-b border-b-[rgba(255,236,120,0.5)]">
              <div className="flex items-start gap-x-3">
                <div className="bg-red-100 rounded-sm p-1.5 mt-1">
                  <PiChartLineDownLight className="text-red-600 w-5 h-fit" />
                </div>
                <div className="">
                  <p className="text-[#FEF8FD] font-medium">
                    Keluar: B 1234 XYZ
                  </p>
                  <p className="text-[#93A3B6] text-[13px] font-medium">
                    Ahmad Fauzi
                  </p>
                  <p className="text-[#93A3B6] text-[13px] font-medium">
                    27/11/2024, 08.30.00
                  </p>
                </div>
              </div>
              <p className="text-[#93A3B6] text-[14px]">3j 30m</p>
            </div>
            <div className="flex items-start justify-between py-3.5">
              <div className="flex items-start gap-x-3">
                <div className="bg-red-100 rounded-sm p-1.5 mt-1">
                  <PiChartLineDownLight className="text-red-600 w-5 h-fit" />
                </div>
                <div className="">
                  <p className="text-[#FEF8FD] font-medium">
                    Keluar: B 1234 XYZ
                  </p>
                  <p className="text-[#93A3B6] text-[13px] font-medium">
                    Ahmad Fauzi
                  </p>
                  <p className="text-[#93A3B6] text-[13px] font-medium">
                    27/11/2024, 08.30.00
                  </p>
                </div>
              </div>
              <p className="text-[#93A3B6] text-[14px]">3j 30m</p>
            </div>
          </div>
        </div>
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col px-6 py-4 rounded-md">
          <p className="text-[#FEF8FD] font-medium">
            Pengendara Baru Terdaftar
          </p>
          <div>
            <div className="flex items-start justify-between py-3.5 border-b border-b-[rgba(255,236,120,0.5)]">
              <div className="flex items-start gap-x-3">
                <div className="bg-blue-100 rounded-sm p-1.5 mt-1">
                  <FiUsers className="text-blue-600 w-5 h-fit" />
                </div>
                <div className="">
                  <p className="text-[#FEF8FD] font-medium">Ahmad Fauzi</p>
                  <p className="text-[#93A3B6] text-[13px] font-medium">
                    ahmad.fauzi@email.com
                  </p>
                  <p className="text-[#93A3B6] text-[13px] font-medium">
                    081234567890
                  </p>
                </div>
              </div>
              <p className="text-[#93A3B6] text-[14px]">15/1/2024</p>
            </div>
            <div className="flex items-start justify-between py-3.5 border-b border-b-[rgba(255,236,120,0.5)]">
              <div className="flex items-start gap-x-3">
                <div className="bg-blue-100 rounded-sm p-1.5 mt-1">
                  <FiUsers className="text-blue-600 w-5 h-fit" />
                </div>
                <div className="">
                  <p className="text-[#FEF8FD] font-medium">Ahmad Fauzi</p>
                  <p className="text-[#93A3B6] text-[13px] font-medium">
                    ahmad.fauzi@email.com
                  </p>
                  <p className="text-[#93A3B6] text-[13px] font-medium">
                    081234567890
                  </p>
                </div>
              </div>
              <p className="text-[#93A3B6] text-[14px]">15/1/2024</p>
            </div>
            <div className="flex items-start justify-between py-3.5">
              <div className="flex items-start gap-x-3">
                <div className="bg-blue-100 rounded-sm p-1.5 mt-1">
                  <FiUsers className="text-blue-600 w-5 h-fit" />
                </div>
                <div className="">
                  <p className="text-[#FEF8FD] font-medium">Ahmad Fauzi</p>
                  <p className="text-[#93A3B6] text-[13px] font-medium">
                    ahmad.fauzi@email.com
                  </p>
                  <p className="text-[#93A3B6] text-[13px] font-medium">
                    081234567890
                  </p>
                </div>
              </div>
              <p className="text-[#93A3B6] text-[14px]">15/1/2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
