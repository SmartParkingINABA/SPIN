import { useState } from "react";

import UserFormNewVehicle from "../../components/user/UserFormNewVehicle";

import BarIcon from "../../assets/images/user/barIcon.svg?react";
import { FaCarSide, FaMotorcycle, FaPlus, FaTrashCan } from "react-icons/fa6";
import { BiSolidEdit } from "react-icons/bi";
import { IoQrCode } from "react-icons/io5";

export default function UserVehiclesReport() {
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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[#FEF8FD] text-2xl font-bold">
              Data Kendaraan
            </h1>
            <p className="text-[#93A3B6] font-medium mt-1">
              Kelola kendaraan yang terdaftar
            </p>
          </div>
          <button
            onClick={handleOpenModal}
            className="bg-[#FFDB58] flex items-center gap-x-2.5 rounded-md px-3 py-2 cursor-pointer transition opacity-100 hover:opacity-80"
          >
            <FaPlus className="w-6 h-fit" />
            <p className="text-[#1E1633] font-medium">Tambah Kendaraan</p>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-x-5 mt-7">
          <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] rounded-md p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <div className="bg-[#4B4141] rounded-sm p-3">
                  <FaCarSide className="text-[#FFEC78] w-6 h-fit" />
                </div>
                <div className="">
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    D 1234 XYZ <span></span>
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    Mobil
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <BiSolidEdit className="w-6 h-fit text-[#93A3B6] transition duration-300 ease-in-out hover:text-[#FFEC78]" />
                <FaTrashCan className="w-5 h-fit text-[#B90404] transition duration-300 ease-in-out hover:text-[#FFEC78]" />
              </div>
            </div>
            <div className="grid grid-cols-2 mt-5">
              <div className="flex flex-col gap-y-3">
                <div>
                  <p className="text-[#93A3B6] text-[12px] font-medium">Merk</p>
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    Toyota Avanza
                  </p>
                </div>
                <div>
                  <p className="text-[#93A3B6] text-[12px] font-medium">CC</p>
                  <p className="text-[#FEF8FD] text-[14px] font-medium">150</p>
                </div>
              </div>
              <div className="flex flex-col gap-y-3">
                <div>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    Tahun
                  </p>
                  <p className="text-[#FEF8FD] text-[14px] font-medium">2022</p>
                </div>
                <div>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    Berlaku Sampai
                  </p>
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    31/12/2029
                  </p>
                </div>
              </div>
            </div>
            <BarIcon className="w-full mt-5" />
            <div className="flex justify-between items-center mt-5">
              <div className="flex items-center gap-x-3">
                <IoQrCode className="text-[#FFEC78] w-5 h-fit" />
                <p className="text-[#FEF8FD] text-[14px] font-medium">
                  QR Code Tersedia
                </p>
              </div>
              <p className="text-[#FFEC78] bg-[#4B4141] text-[10px] px-3 py-1 rounded-sm font-medium">
                Aktif
              </p>
            </div>
          </div>
          <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] rounded-md p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <div className="bg-[#4B4141] rounded-sm p-3">
                  <FaMotorcycle className="text-[#FFEC78] w-6 h-fit" />
                </div>
                <div className="">
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    D 1234 XYZ <span></span>
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    Motor
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <BiSolidEdit className="w-6 h-fit text-[#93A3B6] transition duration-300 ease-in-out hover:text-[#FFEC78]" />
                <FaTrashCan className="w-5 h-fit text-[#B90404] transition duration-300 ease-in-out hover:text-[#FFEC78]" />
              </div>
            </div>
            <div className="grid grid-cols-2 mt-5">
              <div className="flex flex-col gap-y-3">
                <div>
                  <p className="text-[#93A3B6] text-[12px] font-medium">Merk</p>
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    Honda Beat
                  </p>
                </div>
                <div>
                  <p className="text-[#93A3B6] text-[12px] font-medium">CC</p>
                  <p className="text-[#FEF8FD] text-[14px] font-medium">125</p>
                </div>
              </div>
              <div className="flex flex-col gap-y-3">
                <div>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    Tahun
                  </p>
                  <p className="text-[#FEF8FD] text-[14px] font-medium">2009</p>
                </div>
                <div>
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    Berlaku Sampai
                  </p>
                  <p className="text-[#FEF8FD] text-[14px] font-medium">
                    31/12/2029
                  </p>
                </div>
              </div>
            </div>
            <BarIcon className="w-full mt-5" />
            <div className="flex justify-between items-center mt-5">
              <div className="flex items-center gap-x-3">
                <IoQrCode className="text-[#FFEC78] w-5 h-fit" />
                <p className="text-[#FEF8FD] text-[14px] font-medium">
                  QR Code Tersedia
                </p>
              </div>
              <p className="text-[#FFEC78] bg-[#4B4141] text-[10px] px-3 py-1 rounded-sm font-medium">
                Aktif
              </p>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && <UserFormNewVehicle onClose={handleCloseModal} />}
    </>
  );
}
