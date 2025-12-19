import { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { FaPlus, FaTrashCan } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import AdminAddOfficer from "../../components/admin/AdminAddOfficer";
import AdminEditOfficer from "../../components/admin/AdminEditOfficer";

export default function AdminParkingAttendant() {
  const [isActive, setIsActive] = useState(false);
  const [isActiveTwo, setIsActiveTwo] = useState(false);
  const [isActiveThree, setIsActiveThree] = useState(false);

  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  const handleToggleActiveTwo = () => {
    setIsActiveTwo(!isActiveTwo);
  };

  const handleToggleActiveThree = () => {
    setIsActiveThree(!isActiveThree);
  };

  return (
    <>
      <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[#FEF8FD] text-2xl font-bold">
              Petugas Parkir
            </h1>
            <p className="text-[#93A3B6] font-medium mt-1">
              Kelola petugas parkir dan shift kerja
            </p>
          </div>
          <button
            className="bg-[#FFDB58] flex items-center gap-x-2.5 rounded-md px-3 py-2 cursor-pointer transition opacity-100 hover:opacity-80"
            onClick={() => setIsModalOpenAdd(true)}
          >
            <FaPlus className="h-fit w-5" />
            <p className="text-[#130F40] font-medium">Tambah Petugas</p>
          </button>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-x-6">
          <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-10 px-6 py-4 rounded-md">
            <p className="text-[#FEF8FD] font-medium">Total Petugas</p>
            <p className="text-[#93A3B6] font-medium">3</p>
          </div>
          <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-10 px-6 py-4 rounded-md">
            <p className="text-[#FEF8FD] font-medium">Petugas Online</p>
            <p className="text-[#93A3B6] font-medium">2</p>
          </div>
          <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-10 px-6 py-4 rounded-md">
            <p className="text-[#FEF8FD] font-medium">Petugas Aktif</p>
            <p className="text-[#93A3B6] font-medium">3</p>
          </div>
        </div>
        <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
          <p className="text-[#FEF8FD] font-medium">Daftar Petugas Parkir</p>
          <div className="mt-3.5 flex flex-col gap-y-3.5">
            <div className="bg-[#130F40] border border-[rgba(255,236,120,0.5)] px-6 py-4 rounded-sm flex items-center justify-between">
              <div className="flex items-center gap-x-3.5">
                <div className="bg-blue-100 rounded-sm p-2.5">
                  <FiUsers className="text-blue-600 w-6.5 h-fit" />
                </div>
                <div className="">
                  <div className="flex items-center gap-x-2">
                    <p className="text-[#FEF8FD] font-medium">Joko Widodo</p>
                    <div className="flex items-center gap-x-0.5">
                      <GoDotFill className="text-green-500 w-3 h-fit" />
                      <p className="text-[#93A3B6] font-medium text-[14px]">
                        Online
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-1 text-[14px]">
                    <p className="text-[#93A3B6]">joko.w@parking.com</p>
                    <GoDotFill className="text-[#93A3B6] w-1.5 h-fit" />
                    <p className="text-[#93A3B6]">081234111222</p>
                  </div>
                  <div className="flex items-center gap-x-1.5 mt-1">
                    <p className="text-[#130F40] bg-yellow-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                      Shift Pagi
                    </p>
                    <p className="text-[#130F40] bg-blue-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                      Area A
                    </p>
                    <p
                      className={`${
                        isActive
                          ? "border border-[rgba(255,236,120,0.5)] text-[#FFDB58]"
                          : "border border-transparent text-[#130F40] bg-gray-200"
                      } text-[12px] rounded-sm px-2 py-0.5 font-medium`}
                    >
                      {isActive ? "Aktif" : "Non-aktif"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-3">
                <button
                  className="text-[#130F40] bg-[#FEF8FD] font-medium text-[14px] rounded-sm px-2 py-1 cursor-pointer opacity-100 hover:opacity-80 transition"
                  onClick={handleToggleActive}
                >
                  {isActive ? "Nonaktifkan" : "Aktifkan"}
                </button>
                <button
                  className="bg-[#FEF8FD] font-medium rounded-sm px-2 py-1 opacity-100 hover:opacity-80 transition cursor-pointer"
                  onClick={() => setIsModalOpenEdit(true)}
                >
                  <BiSolidEdit className="w-5 h-fit text-[#130F40]" />
                </button>
                <button className="bg-[#FEF8FD] font-medium rounded-sm px-2 py-1 cursor-pointer opacity-100 hover:opacity-80 transition">
                  <FaTrashCan className="w-4 h-fit text-[#B90404]" />
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
                    <div className="flex items-center gap-x-0.5">
                      <GoDotFill className="text-green-500 w-3 h-fit" />
                      <p className="text-[#93A3B6] font-medium text-[14px]">
                        Online
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-1 text-[14px]">
                    <p className="text-[#93A3B6]">joko.w@parking.com</p>
                    <GoDotFill className="text-[#93A3B6] w-1.5 h-fit" />
                    <p className="text-[#93A3B6]">081234111222</p>
                  </div>
                  <div className="flex items-center gap-x-1.5 mt-1">
                    <p className="text-[#130F40] bg-yellow-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                      Shift Siang
                    </p>
                    <p className="text-[#130F40] bg-blue-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                      Area B
                    </p>
                    <p
                      className={`${
                        isActiveTwo
                          ? "border border-[rgba(255,236,120,0.5)] text-[#FFDB58]"
                          : "border border-transparent text-[#130F40] bg-gray-200"
                      } text-[12px] rounded-sm px-2 py-0.5 font-medium`}
                    >
                      {isActiveTwo ? "Aktif" : "Non-aktif"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-3">
                <button
                  className="text-[#130F40] bg-[#FEF8FD] font-medium text-[14px] rounded-sm px-2 py-1 cursor-pointer opacity-100 hover:opacity-80 transition"
                  onClick={handleToggleActiveTwo}
                >
                  {isActiveTwo ? "Nonaktifkan" : "Aktifkan"}
                </button>
                <button
                  className="bg-[#FEF8FD] font-medium rounded-sm px-2 py-1 opacity-100 hover:opacity-80 transition cursor-pointer"
                  onClick={() => setIsModalOpenEdit(true)}
                >
                  <BiSolidEdit className="w-5 h-fit text-[#130F40]" />
                </button>
                <button className="bg-[#FEF8FD] font-medium rounded-sm px-2 py-1 cursor-pointer opacity-100 hover:opacity-80 transition">
                  <FaTrashCan className="w-4 h-fit text-[#B90404]" />
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
                    <div className="flex items-center gap-x-0.5">
                      <GoDotFill className="text-gray-500 w-3 h-fit" />
                      <p className="text-[#93A3B6] font-medium text-[14px]">
                        Offline
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-1 text-[14px]">
                    <p className="text-[#93A3B6]">joko.w@parking.com</p>
                    <GoDotFill className="text-[#93A3B6] w-1.5 h-fit" />
                    <p className="text-[#93A3B6]">081234111222</p>
                  </div>
                  <div className="flex items-center gap-x-1.5 mt-1">
                    <p className="text-[#130F40] bg-yellow-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                      Shift Malam
                    </p>
                    <p className="text-[#130F40] bg-blue-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                      Area A
                    </p>
                    <p
                      className={`${
                        isActiveThree
                          ? "border border-[rgba(255,236,120,0.5)] text-[#FFDB58]"
                          : "border border-transparent text-[#130F40] bg-gray-200"
                      } text-[12px] rounded-sm px-2 py-0.5 font-medium`}
                    >
                      {isActiveThree ? "Aktif" : "Non-aktif"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-3">
                <button
                  className="text-[#130F40] bg-[#FEF8FD] font-medium text-[14px] rounded-sm px-2 py-1 cursor-pointer opacity-100 hover:opacity-80 transition"
                  onClick={handleToggleActiveThree}
                >
                  {isActiveThree ? "Nonaktifkan" : "Aktifkan"}
                </button>
                <button
                  className="bg-[#FEF8FD] font-medium rounded-sm px-2 py-1 opacity-100 hover:opacity-80 transition cursor-pointer"
                  onClick={() => setIsModalOpenEdit(true)}
                >
                  <BiSolidEdit className="w-5 h-fit text-[#130F40]" />
                </button>
                <button className="bg-[#FEF8FD] font-medium rounded-sm px-2 py-1 cursor-pointer opacity-100 hover:opacity-80 transition">
                  <FaTrashCan className="w-4 h-fit text-[#B90404]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isModalOpenAdd && (
        <AdminAddOfficer onClose={() => setIsModalOpenAdd(false)} />
      )}
      {isModalOpenEdit && (
        <AdminEditOfficer onClose={() => setIsModalOpenEdit(false)} />
      )}
    </>
  );
}
