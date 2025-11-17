import UserHeader from "../../components/user/UserHeader";
import UserSidebar from "../../components/user/UserSidebar";

import CarIcon from "../../assets/images/user/carIcon.svg?react";
import MotorIcon from "../../assets/images/user/motorIcon.svg?react";
import BellIcon from "../../assets/images/user/bellIcon.svg?react";
import ClockIcon from "../../assets/images/user/clockIcon.svg?react";
import CheckIcon from "../../assets/images/user/checkIcon.svg?react";
import DotIcon from "../../assets/images/user/dotIcon.svg?react";

export default function UserDashboard() {
  return (
    <main className="flex font-ubuntu box-border">
      <UserSidebar />
      <div className="w-[83%] ml-auto">
        <UserHeader />
        <section className="bg-[#130F40] px-5 py-7 mt-16">
          <h1 className="text-[#FEF8FD] text-3xl font-bold">Dashboard</h1>
          <p className="text-[#93A3B6] font-medium mt-1">
            Ringkasan aktivitas parkir anda
          </p>
          <div className="grid grid-cols-4 gap-x-5 mt-3 mb-6">
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex items-center justify-between px-13 py-7 rounded-md">
              <div className="text-center">
                <p className="text-[#93A3B6]">Total Kendaraan</p>
                <p className="text-[#FEF8FD]">2</p>
              </div>
              <div className="bg-[#4B4141] rounded-full px-3 py-3.5 flex justify-center items-center">
                <CarIcon className="text-[#FFEC78] w-6 h-fit" />
              </div>
            </div>
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex items-center justify-between px-13 py-7 rounded-md">
              <div className="text-center">
                <p className="text-[#93A3B6]">Total Parkir</p>
                <p className="text-[#FEF8FD]">
                  <span>3</span> Kali
                </p>
              </div>
              <div className="bg-[#4B4141] rounded-full px-3 py-[9px] flex justify-center items-center">
                <CheckIcon className="text-[#FFEC78] w-6 h-fit" />
              </div>
            </div>
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex items-center justify-between px-13 py-7 rounded-md">
              <div className="text-center">
                <p className="text-[#93A3B6]">Total Durasi</p>
                <p className="text-[#FEF8FD]">
                  <span>48</span> Jam
                </p>
              </div>
              <div className="bg-[#4B4141] rounded-full px-[11px] py-2.5 flex justify-center items-center">
                <ClockIcon className="text-[#FFEC78] w-6 h-fit" />
              </div>
            </div>
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex items-center justify-between px-13 py-7 rounded-md">
              <div className="text-center">
                <p className="text-[#93A3B6]">Notifikasi Baru</p>
                <p className="text-[#FEF8FD]">2</p>
              </div>
              <div className="bg-[#4B4141] rounded-full px-[13px] py-2.5 flex justify-center items-center">
                <BellIcon className="text-[#FFEC78] w-4 h-fit" />
              </div>
            </div>
          </div>
          <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md px-6 py-4">
            <p className="text-[#FEF8FD] text-[18px] font-medium ml-2">
              Kendaraan Aktif
            </p>
            <div className="mt-2 px-6 py-4 rounded-md bg-[#130F40] flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <div className="bg-[#4B4141] rounded-sm p-3">
                  <CarIcon className="text-[#FFEC78] w-6 h-fit" />
                </div>
                <div className="">
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    D 1234 XYZ <span></span>
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    Toyota Avanza • Mobil
                  </p>
                </div>
              </div>
              <p className="text-[#FFEC78] bg-[#4B4141] text-[14px] px-3 py-1 rounded-sm font-medium">
                Aktif
              </p>
            </div>
            <div className="mt-2 px-6 py-4 rounded-md bg-[#130F40] flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <div className="bg-[#4B4141] rounded-sm px-3 py-2">
                  <MotorIcon className="text-[#FFEC78] w-6 h-fit" />
                </div>
                <div className="">
                  <p className="text-[#FEF8FD] text-[14px] font-medium flex items-center gap-x-2.5">
                    D 1234 XYZ{" "}
                    <span className="text-[10px] text-[#1E1633] bg-[#FFEC78] font-medium px-2 rounded-sm">
                      keluar
                    </span>
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    Honda Beat • Motor
                  </p>
                </div>
              </div>
              <p className="text-[#FFEC78] bg-[#4B4141] text-[14px] px-3 py-1 rounded-sm font-medium">
                Aktif
              </p>
            </div>
          </div>
          <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md px-6 py-4 mt-4">
            <p className="text-[#FEF8FD] text-[18px] font-medium ml-2">
              Status Parkir Terakhir
            </p>
            <div className="mt-3 px-6 py-4 rounded-md bg-[#130F40]">
              <div className="flex items-center gap-x-3">
                <div className="bg-[#4B4141] rounded-sm px-3 py-2.5">
                  <CheckIcon className="text-[#FFEC78] w-6 h-fit" />
                </div>
                <div className="">
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    D 1234 XYZ <span></span>
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    09 November 2025 • 16:00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md px-6 py-4 mt-4">
            <p className="text-[#FEF8FD] text-[18px] font-medium ml-2">
              Notifikasi Terbaru
            </p>
            <div className="mt-3 px-6 py-4 rounded-md bg-[#4B4141]">
              <div className="flex gap-x-2.5">
                <DotIcon className="text-[#FFEC78] w-1.5 mt-1.5 h-fit" />
                <div className="">
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    Kendaraan D 1234 XYZ keluar area parkir
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    2 jam lalu
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-3 px-6 py-4 rounded-md bg-[#4B4141]">
              <div className="flex gap-x-2.5">
                <DotIcon className="text-[#FFEC78] w-1.5 mt-1.5 h-fit" />
                <div className="">
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    Kendaraan D 1234 XYZ keluar area parkir
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    2 jam lalu
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-3 px-6 py-4 rounded-md bg-[#130F40]">
              <div className="flex gap-x-2.5">
                <DotIcon className="text-[#FEF8FD] w-1.5 mt-1.5 h-fit" />
                <div className="">
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    QR Code berhasil dibuat untuk kendaraan dengan Nopol D 1234
                    XYZ
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    1 hari lalu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
