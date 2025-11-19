import { useState } from "react";

import UserHeader from "../../components/user/UserHeader";
import UserSidebar from "../../components/user/UserSidebar";

import PlusIcon from "../../assets/images/user/plusIcon.svg?react";
import CarIcon from "../../assets/images/user/carIcon.svg?react";
import MotorIcon from "../../assets/images/user/motorIcon.svg?react";
import EditIcon from "../../assets/images/user/editIcon.svg?react";
import RemoveIcon from "../../assets/images/user/removeIcon.svg?react";
import BarIcon from "../../assets/images/user/barIcon.svg?react";
import QRCodeIcon from "../../assets/images/user/qrIcon.svg?react";
import UserFormNewVehicle from "../../components/user/UserFormNewVehicle";

export default function UserVehiclesReport() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="flex font-ubuntu box-border">
      <UserSidebar />
      <div className="w-[83%] ml-auto">
        <UserHeader />
        <section className="bg-[#130F40] px-5 py-7 mt-16  h-[calc(100vh-64px)] overflow-y-auto">
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
              className="bg-[#FFEC78] flex items-center gap-x-3 rounded-md px-3 py-2 cursor-pointer"
            >
              <PlusIcon className="w-5.5 h-fit" />
              <p className="text-[#1E1633] font-semibold">Tambah Kendaraan</p>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-x-5 mt-7">
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] rounded-md p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                  <div className="bg-[#4B4141] rounded-sm p-3">
                    <CarIcon className="text-[#FFEC78] w-6 h-fit" />
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
                  <EditIcon className="w-5 h-fit text-[#93A3B6] transition duration-300 ease-in-out hover:text-[#FFEC78]" />
                  <RemoveIcon className="w-5 h-fit text-[#B90404] transition duration-300 ease-in-out hover:text-[#FFEC78]" />
                </div>
              </div>
              <div className="grid grid-cols-2 mt-5">
                <div className="flex flex-col gap-y-3">
                  <div>
                    <p className="text-[#93A3B6] text-[12px] font-medium">
                      Merk
                    </p>
                    <p className="text-[#FEF8FD] text-[14px] font-medium">
                      Toyota Avanza
                    </p>
                  </div>
                  <div>
                    <p className="text-[#93A3B6] text-[12px] font-medium">CC</p>
                    <p className="text-[#FEF8FD] text-[14px] font-medium">
                      150
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <div>
                    <p className="text-[#93A3B6] text-[12px] font-medium">
                      Tahun
                    </p>
                    <p className="text-[#FEF8FD] text-[14px] font-medium">
                      2022
                    </p>
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
                  <QRCodeIcon className="text-[#FFEC78] w-4 h-fit" />
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
                  <div className="bg-[#4B4141] rounded-sm px-3 py-2">
                    <MotorIcon className="text-[#FFEC78] w-6 h-fit" />
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
                  <EditIcon className="w-5 h-fit text-[#93A3B6] transition duration-300 ease-in-out hover:text-[#FFEC78]" />
                  <RemoveIcon className="w-5 h-fit text-[#B90404] transition duration-300 ease-in-out hover:text-[#FFEC78]" />
                </div>
              </div>
              <div className="grid grid-cols-2 mt-5">
                <div className="flex flex-col gap-y-3">
                  <div>
                    <p className="text-[#93A3B6] text-[12px] font-medium">
                      Merk
                    </p>
                    <p className="text-[#FEF8FD] text-[14px] font-medium">
                      Honda Beat
                    </p>
                  </div>
                  <div>
                    <p className="text-[#93A3B6] text-[12px] font-medium">CC</p>
                    <p className="text-[#FEF8FD] text-[14px] font-medium">
                      125
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <div>
                    <p className="text-[#93A3B6] text-[12px] font-medium">
                      Tahun
                    </p>
                    <p className="text-[#FEF8FD] text-[14px] font-medium">
                      2009
                    </p>
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
                  <QRCodeIcon className="text-[#FFEC78] w-4 h-fit" />
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
      </div>
      {isModalOpen && <UserFormNewVehicle onClose={handleCloseModal} />}
    </main>
  );
}
