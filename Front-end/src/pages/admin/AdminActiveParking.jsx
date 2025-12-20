import { FaRegClock } from "react-icons/fa";
import { LuCar } from "react-icons/lu";
import AdminDropdownKindParking from "../../components/admin/AdminDropdownKindParking";
import AdminDropdownLatestEntry from "../../components/admin/AdminDropdownLatestEntry";

export default function AdminActiveParking() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <h1 className="text-[#FEF8FD] text-2xl font-bold">Parkir Aktif</h1>
      <p className="text-[#93A3B6] font-medium mt-1">
        Daftar kendaraan yang sedang parkir saat ini
      </p>
      <div className="mt-6 grid grid-cols-4 gap-x-6">
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-10 px-6 py-4 rounded-md">
          <p className="text-[#FEF8FD] font-medium">Total Parkir Aktif</p>
          <p className="text-[#93A3B6] font-medium">3</p>
        </div>
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-10 px-6 py-4 rounded-md">
          <p className="text-[#FEF8FD] font-medium">Motor Parkir</p>
          <p className="text-[#93A3B6] font-medium">1</p>
        </div>
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-10 px-6 py-4 rounded-md">
          <p className="text-[#FEF8FD] font-medium">Mobil Parkir</p>
          <p className="text-[#93A3B6] font-medium">2</p>
        </div>
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-10 px-6 py-4 rounded-md">
          <p className="text-[#FEF8FD] font-medium">Durasi Rata-rata</p>
          <p className="text-[#93A3B6] font-medium">9313j 25m</p>
        </div>
      </div>
      <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md grid grid-cols-6 items-center gap-x-3.5">
        <div className="col-span-2">
          <input
            type="text"
            className="bg-[#F5E79E] h-10 px-3 rounded-sm outline-0 w-full"
            placeholder="Cari no. plat, merk atau pemilik..."
          />
        </div>
        <div className="">
          <AdminDropdownKindParking selectedOption="Semua Jenis" />
        </div>
        <div className="">
          <AdminDropdownLatestEntry selectedOption="Terbaru Masuk" />
        </div>
        <div className="col-span-2">
          <p className="text-[#93A3B6] font-medium">Ditemukan 3 kendaraan</p>
        </div>
      </div>
      <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
        <p className="text-[#FEF8FD] font-medium">
          Daftar Kendaraan Parkir Aktif
        </p>
        <div className="mt-3.5 flex flex-col gap-y-3.5">
          <div className="bg-[#130F40] border border-[rgba(255,236,120,0.5)] px-6 py-4 rounded-sm flex items-start justify-between">
            <div className="flex items-start gap-x-3.5">
              <div className="bg-blue-100 rounded-sm p-2.5 mt-1">
                <LuCar className="text-blue-600 w-6.5 h-fit" />
              </div>
              <div className="">
                <div className="flex items-center gap-x-2">
                  <p className="text-[#FEF8FD] font-medium">D 7890 JKL</p>
                  <p className="text-[#130F40] bg-yellow-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                    Mobil
                  </p>
                </div>
                <p className="text-[#93A3B6] text-[14px]">Mitsubishi Xpander</p>
                <p className="text-[#93A3B6] text-[14px]">
                  Pengendara: Siti Nurhaliza
                </p>
                <div className="flex items-center gap-x-3.5 mt-1">
                  <p className="flex items-center gap-x-1.5">
                    <FaRegClock className="text-[#93A3B6] h-fit w-3" />{" "}
                    <span className="text-[#93A3B6] text-[12px]">
                      Masuk: 09.15.00
                    </span>
                  </p>
                  <p className="text-[#93A3B6] text-[12px]">
                    Petugas: Rina Susanti
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-1.5">
              <p className="text-[#FEF8FD] bg-orange-400 rounded-sm px-2.5 py-0.5 w-fit text-[12px]">
                9276j 11m
              </p>
              <p className="text-[#93A3B6] text-[12px] text-end">27/04/2025</p>
            </div>
          </div>
          <div className="bg-[#130F40] border border-[rgba(255,236,120,0.5)] px-6 py-4 rounded-sm flex items-start justify-between">
            <div className="flex items-start gap-x-3.5">
              <div className="bg-blue-100 rounded-sm p-2.5 mt-1">
                <LuCar className="text-blue-600 w-6.5 h-fit" />
              </div>
              <div className="">
                <div className="flex items-center gap-x-2">
                  <p className="text-[#FEF8FD] font-medium">D 7890 JKL</p>
                  <p className="text-[#130F40] bg-yellow-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                    Mobil
                  </p>
                </div>
                <p className="text-[#93A3B6] text-[14px]">Mitsubishi Xpander</p>
                <p className="text-[#93A3B6] text-[14px]">
                  Pengendara: Siti Nurhaliza
                </p>
                <div className="flex items-center gap-x-3.5 mt-1">
                  <p className="flex items-center gap-x-1.5">
                    <FaRegClock className="text-[#93A3B6] h-fit w-3" />{" "}
                    <span className="text-[#93A3B6] text-[12px]">
                      Masuk: 09.15.00
                    </span>
                  </p>
                  <p className="text-[#93A3B6] text-[12px]">
                    Petugas: Rina Susanti
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-1.5">
              <p className="text-[#FEF8FD] bg-orange-400 rounded-sm px-2.5 py-0.5 w-fit text-[12px]">
                9276j 11m
              </p>
              <p className="text-[#93A3B6] text-[12px] text-end">27/04/2025</p>
            </div>
          </div>
          <div className="bg-[#130F40] border border-[rgba(255,236,120,0.5)] px-6 py-4 rounded-sm flex items-start justify-between">
            <div className="flex items-start gap-x-3.5">
              <div className="bg-blue-100 rounded-sm p-2.5 mt-1">
                <LuCar className="text-blue-600 w-6.5 h-fit" />
              </div>
              <div className="">
                <div className="flex items-center gap-x-2">
                  <p className="text-[#FEF8FD] font-medium">D 7890 JKL</p>
                  <p className="text-[#130F40] bg-green-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                    Motor
                  </p>
                </div>
                <p className="text-[#93A3B6] text-[14px]">Mitsubishi Xpander</p>
                <p className="text-[#93A3B6] text-[14px]">
                  Pengendara: Siti Nurhaliza
                </p>
                <div className="flex items-center gap-x-3.5 mt-1">
                  <p className="flex items-center gap-x-1.5">
                    <FaRegClock className="text-[#93A3B6] h-fit w-3" />{" "}
                    <span className="text-[#93A3B6] text-[12px]">
                      Masuk: 09.15.00
                    </span>
                  </p>
                  <p className="text-[#93A3B6] text-[12px]">
                    Petugas: Rina Susanti
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-1.5">
              <p className="text-[#FEF8FD] bg-orange-400 rounded-sm px-2.5 py-0.5 w-fit text-[12px]">
                9276j 11m
              </p>
              <p className="text-[#93A3B6] text-[12px] text-end">27/04/2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
