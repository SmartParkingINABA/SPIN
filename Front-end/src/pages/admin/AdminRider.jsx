import { useState } from "react";
import AdminDetailRider from "../../components/admin/AdminDetailRider";
import { FaRegEye } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuCar } from "react-icons/lu";
import { MdDoNotDisturb } from "react-icons/md";

export default function AdminRider() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
        <h1 className="text-[#FEF8FD] text-2xl font-bold">
          Manajemen Pengendara
        </h1>
        <p className="text-[#93A3B6] font-medium mt-1">
          Lihat dan kelola data pengendara terdaftar
        </p>
        <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex items-center gap-x-3 px-6 py-4 rounded-md">
          <input
            type="text"
            className="bg-[#F5E79E] py-1.5 px-3 rounded-sm outline-0 w-1/3"
            placeholder="Cari pengendara (nama, email atau no. hp)"
          />
          <p className="text-[#93A3B6] font-medium">Ditemukan 3 pengendara</p>
        </div>
        <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
          <p className="text-[#FEF8FD] font-medium">Daftar Pengendara</p>
          <div className="mt-3.5 flex flex-col gap-y-3.5">
            <div className="bg-[#130F40] border border-[rgba(255,236,120,0.5)] px-6 py-4 rounded-sm flex items-center justify-between">
              <div className="flex items-center gap-x-3.5">
                <div className="bg-blue-100 rounded-sm p-2.5">
                  <FiUsers className="text-blue-600 w-6.5 h-fit" />
                </div>
                <div className="">
                  <div className="flex items-center gap-x-2">
                    <p className="text-[#FEF8FD] font-medium">Joko Widodo</p>
                    <div className="flex items-center gap-x-0.5 bg-green-200 rounded-sm px-2 py-0.5">
                      <IoIosCheckmarkCircleOutline className="text-green-500 w-3.5 h-fit" />
                      <p className="text-green-500 font-medium text-[12px]">
                        Aktif
                      </p>
                    </div>
                  </div>
                  <div className="text-[14px]">
                    <p className="text-[#93A3B6]">joko.w@parking.com</p>
                    <p className="text-[#93A3B6]">081234111222</p>
                  </div>
                  <div className="flex items-center gap-x-1.5 mt-1">
                    <div className="flex items-center gap-x-1.5 bg-yellow-200 rounded-sm px-2 py-0.5 font-medium">
                      <LuCar className="h-fit w-4 text-[#130F40" />
                      <p className="text-[#130F40 text-[12px]">2 Kendaraan</p>
                    </div>
                    <p className="text-[#93A3B6] text-[13px]">
                      Terdaftar: 15/1/2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-3">
                <button
                  className="bg-[#FEF8FD] font-medium text-[14px] rounded-sm px-2 py-1 cursor-pointer opacity-100 hover:opacity-80 transition flex items-center gap-x-1.5"
                  onClick={() => setIsModalOpen(true)}
                >
                  <FaRegEye className="h-fit w-4 text-[#130F40]" />
                  <p className="font-medium text-[#130F40]">Detail</p>
                </button>
                <button className="bg-[#FEF8FD] font-medium rounded-sm px-2 py-1 opacity-100 hover:opacity-80 transition cursor-pointer flex items-center gap-x-1.5">
                  <MdDoNotDisturb className="h-fit w-4 text-red-500" />
                  <p className="font-medium text-red-500">Nonaktifkan</p>
                </button>
              </div>
            </div>
            <div className="bg-[#130F40] border border-[rgba(255,236,120,0.5)] px-6 py-4 rounded-sm flex items-center justify-between">
              <div className="flex items-center gap-x-3.5">
                <div className="bg-blue-100 rounded-sm p-2.5">
                  <FiUsers className="text-blue-600 w-6.5 h-fit" />
                </div>
                <div className="">
                  <div className="flex items-center gap-x-2">
                    <p className="text-[#FEF8FD] font-medium">Joko Widodo</p>
                    <div className="flex items-center gap-x-0.5 bg-green-200 rounded-sm px-2 py-0.5">
                      <IoIosCheckmarkCircleOutline className="text-green-500 w-3.5 h-fit" />
                      <p className="text-green-500 font-medium text-[12px]">
                        Aktif
                      </p>
                    </div>
                  </div>
                  <div className="text-[14px]">
                    <p className="text-[#93A3B6]">joko.w@parking.com</p>
                    <p className="text-[#93A3B6]">081234111222</p>
                  </div>
                  <div className="flex items-center gap-x-1.5 mt-1">
                    <div className="flex items-center gap-x-1.5 bg-yellow-200 rounded-sm px-2 py-0.5 font-medium">
                      <LuCar className="h-fit w-4 text-[#130F40" />
                      <p className="text-[#130F40 text-[12px]">2 Kendaraan</p>
                    </div>
                    <p className="text-[#93A3B6] text-[13px]">
                      Terdaftar: 15/1/2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-3">
                <button
                  className="bg-[#FEF8FD] font-medium text-[14px] rounded-sm px-2 py-1 cursor-pointer opacity-100 hover:opacity-80 transition flex items-center gap-x-1.5"
                  onClick={() => setIsModalOpen(true)}
                >
                  <FaRegEye className="h-fit w-4 text-[#130F40]" />
                  <p className="font-medium text-[#130F40]">Detail</p>
                </button>
                <button className="bg-[#FEF8FD] font-medium rounded-sm px-2 py-1 opacity-100 hover:opacity-80 transition cursor-pointer flex items-center gap-x-1.5">
                  <MdDoNotDisturb className="h-fit w-4 text-red-500" />
                  <p className="font-medium text-red-500">Nonaktifkan</p>
                </button>
              </div>
            </div>
            <div className="bg-[#130F40] border border-[rgba(255,236,120,0.5)] px-6 py-4 rounded-sm flex items-center justify-between">
              <div className="flex items-center gap-x-3.5">
                <div className="bg-blue-100 rounded-sm p-2.5">
                  <FiUsers className="text-blue-600 w-6.5 h-fit" />
                </div>
                <div className="">
                  <div className="flex items-center gap-x-2">
                    <p className="text-[#FEF8FD] font-medium">Joko Widodo</p>
                    <div className="flex items-center gap-x-0.5 bg-green-200 rounded-sm px-2 py-0.5">
                      <IoIosCheckmarkCircleOutline className="text-green-500 w-3.5 h-fit" />
                      <p className="text-green-500 font-medium text-[12px]">
                        Aktif
                      </p>
                    </div>
                  </div>
                  <div className="text-[14px]">
                    <p className="text-[#93A3B6]">joko.w@parking.com</p>
                    <p className="text-[#93A3B6]">081234111222</p>
                  </div>
                  <div className="flex items-center gap-x-1.5 mt-1">
                    <div className="flex items-center gap-x-1.5 bg-yellow-200 rounded-sm px-2 py-0.5 font-medium">
                      <LuCar className="h-fit w-4 text-[#130F40" />
                      <p className="text-[#130F40 text-[12px]">2 Kendaraan</p>
                    </div>
                    <p className="text-[#93A3B6] text-[13px]">
                      Terdaftar: 15/1/2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-3">
                <button
                  className="bg-[#FEF8FD] font-medium text-[14px] rounded-sm px-2 py-1 cursor-pointer opacity-100 hover:opacity-80 transition flex items-center gap-x-1.5"
                  onClick={() => setIsModalOpen(true)}
                >
                  <FaRegEye className="h-fit w-4 text-[#130F40]" />
                  <p className="font-medium text-[#130F40]">Detail</p>
                </button>
                <button className="bg-[#FEF8FD] font-medium rounded-sm px-2 py-1 opacity-100 hover:opacity-80 transition cursor-pointer flex items-center gap-x-1.5">
                  <MdDoNotDisturb className="h-fit w-4 text-red-500" />
                  <p className="font-medium text-red-500">Nonaktifkan</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <AdminDetailRider onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
