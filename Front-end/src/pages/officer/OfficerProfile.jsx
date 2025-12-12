import { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { MdOutlinePhone } from "react-icons/md";
import { CiUser, CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { PiNotePencilThin } from "react-icons/pi";
import { LuArrowRightFromLine } from "react-icons/lu";
import OfficerFormEdit from "../../components/officer/OfficerFormEdit";

export default function OfficerProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
        <h1 className="text-[#FEF8FD] text-2xl font-bold">Profil Petugas</h1>
        <p className="text-[#93A3B6] font-medium mt-1">
          Informasi data diri dan shift kerja
        </p>
        <div className="mt-6 flex flex-col gap-y-5">
          <div className="flex gap-x-5">
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md w-2/3">
              <p className="text-[#FEF8FD] font-medium">Informasi Pribadi</p>
              <div className="flex items-center gap-x-3 my-3.5">
                <RxAvatar className="h-fit w-22 text-[#93A3B6]" />
                <div>
                  <p className="text-[#FEF8FD] mb-1 flex gap-x-2.5">
                    Rian Priansyah{" "}
                    <span className="rounded-sm px-[7px] py-0.5 bg-[#FFEC78] text-[14px] text-[#130F40]">
                      Aktif
                    </span>
                  </p>
                  <p className="text-[#93A3B6] text-[14px]">
                    ID Petugas: <span>PTG-2024-001</span>
                  </p>
                  <p className="text-[#93A3B6] text-[14px]">
                    Bergabung sejak: <span>1 Januari 2024</span>
                  </p>
                </div>
              </div>
              <hr className="w-full h-0.5 bg-[rgba(255,236,120,0.5)]" />
              <div className="flex items-center gap-x-2 my-3.5">
                <MdOutlinePhone className="h-fit w-6.5 text-[#93A3B6]" />
                <div>
                  <p className="text-[#93A3B6] text-[14px]">No. Telepon</p>
                  <p className="text-[#FEF8FD]">0812-3456-7890</p>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <CiUser className="h-fit w-6.5 text-[#93A3B6]" />
                <div>
                  <p className="text-[#93A3B6] text-[14px]">Email</p>
                  <p className="text-[#FEF8FD]">ahmad.ridwan@kampus.ac.id</p>
                </div>
              </div>
            </div>
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md w-1/3">
              <p className="text-[#FEF8FD] font-medium">Statistik Hari Ini</p>
              <div className="mt-3.5 flex flex-col gap-y-3.5">
                <div className="bg-green-100 rounded-sm px-3 py-1.5">
                  <p className="text-[14px] text-[#48515b]">Kendaraan Masuk</p>
                  <p className="text-green-500">24 kendaraan</p>
                </div>
                <div className="bg-blue-100 rounded-sm px-3 py-1.5">
                  <p className="text-[14px] text-[#48515b]">Kendaraan Keluar</p>
                  <p className="text-blue-500">18 kendaraan</p>
                </div>
                <div className="bg-orange-100 rounded-sm px-3 py-1.5">
                  <p className="text-[14px] text-[#48515b]">Waktu Kerja</p>
                  <p className="text-orange-500">3 jam 45 menit</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-5">
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md w-2/3">
              <p className="text-[#FEF8FD] font-medium">Informasi Kerja</p>
              <div className="flex items-center gap-x-2 my-3.5">
                <IoTimeOutline className="h-fit w-6.5 text-[#93A3B6]" />
                <div>
                  <p className="text-[#93A3B6] text-[14px]">Shift Kerja</p>
                  <p className="text-[#FEF8FD]">Pagi (07:00 - 15:00)</p>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <CiLocationOn className="h-fit w-6.5 text-[#93A3B6]" />
                <div>
                  <p className="text-[#93A3B6] text-[14px]">Lokasi Kerja</p>
                  <p className="text-[#FEF8FD]">Gerbang Utama - Area A</p>
                </div>
              </div>
            </div>
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md w-1/3">
              <p className="text-[#FEF8FD] font-medium">Aksi</p>
              <div className="mt-3.5 flex flex-col gap-y-3">
                <button
                  onClick={handleOpenModal}
                  className="w-full flex items-center gap-x-3 bg-[#d3d3d3] rounded-sm py-1.5 px-3 cursor-pointer opacity-100 hover:opacity-80 transition"
                >
                  <PiNotePencilThin className="w-5 h-fit text-[#48515b]" />
                  <p className="text-[#48515b]">Edit Profile</p>
                  {/* TINGGAL ACTION EDIT */}
                </button>
                <button className="w-full flex items-center gap-x-3 bg-red-500 rounded-sm py-1.5 px-3 cursor-pointer opacity-100 hover:opacity-80 transition">
                  <LuArrowRightFromLine className="w-5 h-fit text-[#FEF8FD]" />
                  <p className="text-[#FEF8FD]">Logout</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && <OfficerFormEdit onClose={handleCloseModal} />}
    </>
  );
}
