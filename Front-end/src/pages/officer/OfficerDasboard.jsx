import OfficerHeader from "../../components/officer/OfficerHeader.jsx";
import OfficeSidebar from "../../components/officer/OfficerSidebar.jsx";

import { FaArrowDownLong, FaArrowUp, FaRegClock } from "react-icons/fa6";

export default function OfficerDashboard() {
  return (
    <main className="flex font-ubuntu box-border">
      <OfficeSidebar />
      <div className="w-[83%] ml-auto bg-[#130F40] min-h-screen">
        <OfficerHeader />
        <section className="px-5 py-7 mt-14">
          <div className="grid grid-cols-3 gap-x-5 mt-3 mb-6">
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
              <div className="flex justify-between items-center mb-5">
                <p className="font-medium text-[#FEF8FD]">Kendaraan Masuk</p>
                <FaArrowDownLong className="text-green-500" />
              </div>
              <p className="text-green-500 text-2xl">48</p>
              <p className="text-[#93A3B6]">Hari ini</p>
            </div>
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
              <div className="flex justify-between items-center mb-5">
                <p className="font-medium text-[#FEF8FD]">Kendaraan Keluar</p>
                <FaArrowUp className="text-red-500" />
              </div>
              <p className="text-red-500 text-2xl">48</p>
              <p className="text-[#93A3B6]">Hari ini</p>
            </div>
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
              <div className="flex justify-between items-center mb-5">
                <p className="font-medium text-[#FEF8FD]">Sedang Parkir</p>
                <FaRegClock className="text-blue-500" />
              </div>
              <p className="text-blue-500 text-2xl">48</p>
              <p className="text-[#93A3B6]">Hari ini</p>
            </div>
          </div>
          <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md px-6 py-4">
            <p className="text-[#FEF8FD] text-[18px] font-medium ml-2">
              Aktifitas Terakhir
            </p>
            <div className="mt-2 px-6 py-4 rounded-md bg-[#130F40] flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <p className="text-green-500 text-4xl">•</p>
                <div className="">
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    B 1234 ABC - <span>Masuk</span>
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    Rizky Pratama
                  </p>
                </div>
              </div>
              <p className="text-[#FFEC78] bg-[#4B4141] text-[14px] px-3 py-1 rounded-sm font-medium">
                10:45 WIB
              </p>
            </div>
            <div className="mt-2 px-6 py-4 rounded-md bg-[#130F40] flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <p className="text-blue-500 text-4xl">•</p>
                <div className="">
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    B 1234 ABC - <span>Masuk</span>
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    Rizky Pratama
                  </p>
                </div>
              </div>
              <p className="text-[#FFEC78] bg-[#4B4141] text-[14px] px-3 py-1 rounded-sm font-medium">
                10:45 WIB
              </p>
            </div>
            <div className="mt-2 px-6 py-4 rounded-md bg-[#130F40] flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <p className="text-green-500 text-4xl">•</p>
                <div className="">
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    B 1234 ABC - <span>Masuk</span>
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    Rizky Pratama
                  </p>
                </div>
              </div>
              <p className="text-[#FFEC78] bg-[#4B4141] text-[14px] px-3 py-1 rounded-sm font-medium">
                10:45 WIB
              </p>
            </div>
            <div className="mt-2 px-6 py-4 rounded-md bg-[#130F40] flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <p className="text-blue-500 text-4xl">•</p>
                <div className="">
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    B 1234 ABC - <span>Masuk</span>
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    Rizky Pratama
                  </p>
                </div>
              </div>
              <p className="text-[#FFEC78] bg-[#4B4141] text-[14px] px-3 py-1 rounded-sm font-medium">
                10:45 WIB
              </p>
            </div>
            <div className="mt-2 px-6 py-4 rounded-md bg-[#130F40] flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <p className="text-green-500 text-4xl">•</p>
                <div className="">
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    B 1234 ABC - <span>Masuk</span>
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    Rizky Pratama
                  </p>
                </div>
              </div>
              <p className="text-[#FFEC78] bg-[#4B4141] text-[14px] px-3 py-1 rounded-sm font-medium">
                10:45 WIB
              </p>
            </div>
            <div className="mt-2 px-6 py-4 rounded-md bg-[#130F40] flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <p className="text-blue-500 text-4xl">•</p>
                <div className="">
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    B 1234 ABC - <span>Masuk</span>
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    Rizky Pratama
                  </p>
                </div>
              </div>
              <p className="text-[#FFEC78] bg-[#4B4141] text-[14px] px-3 py-1 rounded-sm font-medium">
                10:45 WIB
              </p>
            </div>
            <div className="mt-2 px-6 py-4 rounded-md bg-[#130F40] flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <p className="text-green-500 text-4xl">•</p>
                <div className="">
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    B 1234 ABC - <span>Masuk</span>
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    Rizky Pratama
                  </p>
                </div>
              </div>
              <p className="text-[#FFEC78] bg-[#4B4141] text-[14px] px-3 py-1 rounded-sm font-medium">
                10:45 WIB
              </p>
            </div>
            <div className="mt-2 px-6 py-4 rounded-md bg-[#130F40] flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <p className="text-blue-500 text-4xl">•</p>
                <div className="">
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    B 1234 ABC - <span>Masuk</span>
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    Rizky Pratama
                  </p>
                </div>
              </div>
              <p className="text-[#FFEC78] bg-[#4B4141] text-[14px] px-3 py-1 rounded-sm font-medium">
                10:45 WIB
              </p>
            </div>
            <div className="mt-2 px-6 py-4 rounded-md bg-[#130F40] flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <p className="text-green-500 text-4xl">•</p>
                <div className="">
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    B 1234 ABC - <span>Masuk</span>
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    Rizky Pratama
                  </p>
                </div>
              </div>
              <p className="text-[#FFEC78] bg-[#4B4141] text-[14px] px-3 py-1 rounded-sm font-medium">
                10:45 WIB
              </p>
            </div>
            <div className="mt-2 px-6 py-4 rounded-md bg-[#130F40] flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <p className="text-blue-500 text-4xl">•</p>
                <div className="">
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    B 1234 ABC - <span>Masuk</span>
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    Rizky Pratama
                  </p>
                </div>
              </div>
              <p className="text-[#FFEC78] bg-[#4B4141] text-[14px] px-3 py-1 rounded-sm font-medium">
                10:45 WIB
              </p>
            </div>
            <div className="mt-2 px-6 py-4 rounded-md bg-[#130F40] flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <p className="text-green-500 text-4xl">•</p>
                <div className="">
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    B 1234 ABC - <span>Masuk</span>
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    Rizky Pratama
                  </p>
                </div>
              </div>
              <p className="text-[#FFEC78] bg-[#4B4141] text-[14px] px-3 py-1 rounded-sm font-medium">
                10:45 WIB
              </p>
            </div>
            <div className="mt-2 px-6 py-4 rounded-md bg-[#130F40] flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <p className="text-blue-500 text-4xl">•</p>
                <div className="">
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    B 1234 ABC - <span>Masuk</span>
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    Rizky Pratama
                  </p>
                </div>
              </div>
              <p className="text-[#FFEC78] bg-[#4B4141] text-[14px] px-3 py-1 rounded-sm font-medium">
                10:45 WIB
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
