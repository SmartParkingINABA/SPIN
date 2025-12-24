import { FaRegClock } from "react-icons/fa6";
import { IoQrCode, IoSearch } from "react-icons/io5";
import { LuCar } from "react-icons/lu";

export default function AdminIncomingVehicle() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <h1 className="text-[#FEF8FD] text-2xl font-bold">Kendaraan Masuk</h1>
      <p className="text-[#93A3B6] font-medium mt-1">
        Proses check-in kendaraan yang akan parkir
      </p>
      <div className="mt-6 grid grid-cols-3 gap-x-6">
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-10 px-6 py-4 rounded-md">
          <p className="text-[#FEF8FD] font-medium">Total Parkir Hari Ini</p>
          <p className="text-[#93A3B6] font-medium">5</p>
        </div>
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-10 px-6 py-4 rounded-md">
          <p className="text-[#FEF8FD] font-medium">Sedang Parkir</p>
          <p className="text-[#93A3B6] font-medium">3</p>
        </div>
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-10 px-6 py-4 rounded-md">
          <p className="text-[#FEF8FD] font-medium">Waktu Real-time</p>
          <p className="text-[#93A3B6] font-medium flex items-center gap-x-2">
            <FaRegClock className="h-fit w-3.5" /> 22.01.10
          </p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-x-6">
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col px-6 py-4 rounded-md">
          <p className="text-[#FEF8FD] font-medium">Check-in Kendaraan</p>
          <div className="flex gap-x-3 mt-3.5">
            <input
              type="text"
              className="bg-[#F5E79E] h-10 px-3 rounded-sm outline-0 w-full"
              placeholder="Masukan no plat kendaraan..."
            />
            <button className="h-10 px-3 bg-[#FFDB58] text-[#130F40] rounded-sm opacity-100 hover:opacity-80 transition cursor-pointer">
              <IoSearch className="h-fit w-5 text-[#130F40]" />
            </button>
          </div>
        </div>
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col px-6 py-4 rounded-md">
          <p className="text-[#FEF8FD] font-medium mb-3.5">
            Kendaraan Sedang Parkir
          </p>
          <div className="flex flex-col gap-y-3.5">
            <div className="border border-[rgba(255,236,120,0.5)] px-5 py-2.5 rounded-sm bg-[#130F40] flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <div className="bg-blue-100 rounded-sm p-2.5">
                  <LuCar className="text-blue-600 w-6.5 h-fit" />
                </div>
                <div className="">
                  <p className="text-[#FEF8FD] font-medium">D 1234 XYZ</p>
                  <p className="text-[#93A3B6] text-[14px] font-medium">
                    Ahmad Fauzi
                  </p>
                  <p className="text-[#93A3B6] text-[14px] font-medium">
                    Masuk: 08.30.00
                  </p>
                </div>
              </div>
              <p className="text-[#130F40] bg-gray-200 rounded-sm px-2.5 py-0.5 w-fit text-[12px]">
                Parkir
              </p>
            </div>
            <div className="border border-[rgba(255,236,120,0.5)] px-5 py-2.5 rounded-sm bg-[#130F40] flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <div className="bg-blue-100 rounded-sm p-2.5">
                  <LuCar className="text-blue-600 w-6.5 h-fit" />
                </div>
                <div className="">
                  <p className="text-[#FEF8FD] font-medium">D 1234 XYZ</p>
                  <p className="text-[#93A3B6] text-[14px] font-medium">
                    Ahmad Fauzi
                  </p>
                  <p className="text-[#93A3B6] text-[14px] font-medium">
                    Masuk: 08.30.00
                  </p>
                </div>
              </div>
              <p className="text-[#130F40] bg-gray-200 rounded-sm px-2.5 py-0.5 w-fit text-[12px]">
                Parkir
              </p>
            </div>
            <div className="border border-[rgba(255,236,120,0.5)] px-5 py-2.5 rounded-sm bg-[#130F40] flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <div className="bg-blue-100 rounded-sm p-2.5">
                  <LuCar className="text-blue-600 w-6.5 h-fit" />
                </div>
                <div className="">
                  <p className="text-[#FEF8FD] font-medium">D 1234 XYZ</p>
                  <p className="text-[#93A3B6] text-[14px] font-medium">
                    Ahmad Fauzi
                  </p>
                  <p className="text-[#93A3B6] text-[14px] font-medium">
                    Masuk: 08.30.00
                  </p>
                </div>
              </div>
              <p className="text-[#130F40] bg-gray-200 rounded-sm px-2.5 py-0.5 w-fit text-[12px]">
                Parkir
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
