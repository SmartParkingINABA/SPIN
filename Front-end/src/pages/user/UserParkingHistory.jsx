import UserDropdown from "../../components/user/UserDropdown";
import UserHeader from "../../components/user/UserHeader";
import UserSidebar from "../../components/user/UserSidebar";

import ClocklIcon from "../../assets/images/user/clockIcon.svg?react";
import WaitlIcon from "../../assets/images/user/waitIcon.svg?react";

export default function UserParkingHistory() {
  return (
    <main className="flex font-ubuntu box-border">
      <UserSidebar />
      <div className="w-[83%] ml-auto">
        <UserHeader />
        <section className="bg-[#130F40] px-5 py-7 mt-16  h-[calc(100vh-64px)] overflow-y-auto">
          <h1 className="text-[#FEF8FD] text-2xl font-bold">Riwayat Parkir</h1>
          <p className="text-[#93A3B6] font-medium mt-1">
            Catatan aktivitas parkir kendaraan anda
          </p>
          <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md grid grid-cols-2 gap-x-7 py-5 px-6 mt-6">
            <div>
              <p className="text-[#93A3B6] font-medium mb-2">Filter Status</p>
              <UserDropdown selectedOption={"Semua Status"} />
            </div>
            <div>
              <p className="text-[#93A3B6] font-medium mb-2">Filter Status</p>
              <UserDropdown selectedOption={"Semua Kendaraan"} />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-7 mt-7">
            <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] flex items-center gap-x-4.5 rounded-md py-5 px-6">
              <div className="p-2 bg-[#4B4141] rounded-sm">
                <ClocklIcon className="h-fit w-6 text-[#FFEC78]" />
              </div>
              <div className="text-center">
                <p className="text-[#93A3B6]">Total Parkir</p>
                <p className="text-[#FEF8FD]">6 Kali</p>
              </div>
            </div>
            <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] flex items-center gap-x-4.5 rounded-md py-5 px-6">
              <div className="p-2 bg-[#4B4141] rounded-sm">
                <ClocklIcon className="h-fit w-6 text-[#FFEC78]" />
              </div>
              <div className="text-center">
                <p className="text-[#93A3B6]">Total Durasi</p>
                <p className="text-[#FEF8FD]">42 Jam</p>
              </div>
            </div>
            <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] flex items-center gap-x-4.5 rounded-md py-5 px-6">
              <div className="p-2 bg-[#4B4141] rounded-sm">
                <WaitlIcon className="h-fit w-6 text-[#FFEC78]" />
              </div>
              <div className="text-center">
                <p className="text-[#93A3B6]">Sedang Parkir</p>
                <p className="text-[#FEF8FD]">1 Kendaraan</p>
              </div>
            </div>
          </div>
          <div className="mt-7 bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md h-3/4 py-5 px-6">
            <h2 className="text-[#93A3B6] font-bold mb-2">Daftar Riwayat</h2>
            <p className="text-[#FEF8FD] text-[14px] font-semibold">
              D 1234 XYZ
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
