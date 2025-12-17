import { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { FaPlus, FaRegEye, FaTrashCan } from "react-icons/fa6";
import { LuCar } from "react-icons/lu";
import AdminDropdownKind from "../../components/admin/AdminDropdownKind";
import AdminDropdownStatus from "../../components/admin/AdminDropdownStatus";
import AdminAddVehicle from "../../components/admin/AdminAddVehicle";
import AdminDetailVehicle from "../../components/admin/AdminDetailVehicle";
import AdminEditVehicle from "../../components/admin/AdminEditVehicle";

export default function AdminVehicles() {
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [isModalOpenDetail, setIsModalOpenDetail] = useState(false);

  const handleOpenModalAdd = () => {
    setIsModalOpenAdd(true);
  };

  const handleCloseModalAdd = () => {
    setIsModalOpenAdd(false);
  };

  const handleOpenModalDetail = () => {
    setIsModalOpenDetail(true);
  };

  const handleCloseModalDetail = () => {
    setIsModalOpenDetail(false);
  };

  const handleOpenModalEdit = () => {
    setIsModalOpenEdit(true);
  };

  const handleCloseModalEdit = () => {
    setIsModalOpenEdit(false);
  };

  return (
    <>
      <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[#FEF8FD] text-2xl font-bold">
              Manajemen Kendaraan
            </h1>
            <p className="text-[#93A3B6] font-medium mt-1">
              Kelola data kendaraan terdaftar
            </p>
          </div>
          <button
            className="bg-[#FFDB58] flex items-center gap-x-2.5 rounded-md px-3 py-2 cursor-pointer transition opacity-100 hover:opacity-80"
            onClick={handleOpenModalAdd}
          >
            <FaPlus className="h-fit w-5" />
            <p className="text-[#130F40] font-medium">Tambah Kendaraan</p>
          </button>
        </div>
        <div className="mt-6 grid grid-cols-4 gap-x-6">
          <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-10 px-6 py-4 rounded-md">
            <p className="text-[#FEF8FD] font-medium">Total Kendaraan</p>
            <p className="text-[#93A3B6] font-medium">5</p>
          </div>
          <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-10 px-6 py-4 rounded-md">
            <p className="text-[#FEF8FD] font-medium">Sedang Parkir</p>
            <p className="text-[#93A3B6] font-medium">3</p>
          </div>
          <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-10 px-6 py-4 rounded-md">
            <p className="text-[#FEF8FD] font-medium">Motor</p>
            <p className="text-[#93A3B6] font-medium">3</p>
          </div>
          <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-10 px-6 py-4 rounded-md">
            <p className="text-[#FEF8FD] font-medium">Mobil</p>
            <p className="text-[#93A3B6] font-medium">2</p>
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
            <AdminDropdownKind selectedOption="Semua Jenis" />
          </div>
          <div className="">
            <AdminDropdownStatus selectedOption="Semua Status" />
          </div>
          <div className="col-span-2">
            <p className="text-[#93A3B6] font-medium">Ditemukan 5 kendaraan</p>
          </div>
        </div>
        <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
          <p className="text-[#FEF8FD] font-medium">Daftar Kendaraan</p>
          <div className="mt-3.5 flex flex-col gap-y-3.5">
            <div className="bg-[#130F40] border border-[rgba(255,236,120,0.5)] px-6 py-4 rounded-sm flex items-center justify-between">
              <div className="flex items-center gap-x-3.5">
                <div className="bg-blue-100 rounded-sm p-2.5">
                  <LuCar className="text-blue-600 w-6.5 h-fit" />
                </div>
                <div className="">
                  <div className="flex items-center gap-x-2">
                    <p className="text-[#FEF8FD] font-medium">Joko Widodo</p>
                    <div className="flex items-center gap-x-1.5 mt-1">
                      <p className="text-[#130F40] bg-yellow-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                        Motor
                      </p>
                      <p className="text-[#130F40] bg-blue-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                        Sedang Parkir
                      </p>
                    </div>
                  </div>
                  <div className="text-[14px]">
                    <p className="text-[#93A3B6]">Honda Beat</p>
                    <p className="text-[#93A3B6]">Pemilik: Ahmad Fauzi</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-3">
                <button
                  className="bg-[#FEF8FD] font-medium text-[14px] rounded-sm px-2 py-1 cursor-pointer opacity-100 hover:opacity-80 transition flex items-center gap-x-1.5"
                  onClickCapture={handleOpenModalDetail}
                >
                  <FaRegEye className="h-fit w-4 text-[#130F40]" />
                  <p className="font-medium text-[#130F40]">Detail</p>
                </button>
                <button
                  className="bg-[#FEF8FD] font-medium rounded-sm px-2 py-1 opacity-100 hover:opacity-80 transition cursor-pointer"
                  onClick={handleOpenModalEdit}
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
                  <LuCar className="text-blue-600 w-6.5 h-fit" />
                </div>
                <div className="">
                  <div className="flex items-center gap-x-2">
                    <p className="text-[#FEF8FD] font-medium">Joko Widodo</p>
                    <div className="flex items-center gap-x-1.5 mt-1">
                      <p className="text-[#130F40] bg-red-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                        Mobil
                      </p>
                      <p className="text-[#130F40] bg-blue-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                        Sedang Parkir
                      </p>
                    </div>
                  </div>
                  <div className="text-[14px]">
                    <p className="text-[#93A3B6]">Honda Beat</p>
                    <p className="text-[#93A3B6]">Pemilik: Ahmad Fauzi</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-3">
                <button
                  className="bg-[#FEF8FD] font-medium text-[14px] rounded-sm px-2 py-1 cursor-pointer opacity-100 hover:opacity-80 transition flex items-center gap-x-1.5"
                  onClickCapture={handleOpenModalDetail}
                >
                  <FaRegEye className="h-fit w-4 text-[#130F40]" />
                  <p className="font-medium text-[#130F40]">Detail</p>
                </button>
                <button
                  className="bg-[#FEF8FD] font-medium rounded-sm px-2 py-1 opacity-100 hover:opacity-80 transition cursor-pointer"
                  onClick={handleOpenModalEdit}
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
                  <LuCar className="text-blue-600 w-6.5 h-fit" />
                </div>
                <div className="">
                  <div className="flex items-center gap-x-2">
                    <p className="text-[#FEF8FD] font-medium">Joko Widodo</p>
                    <div className="flex items-center gap-x-1.5 mt-1">
                      <p className="text-[#130F40] bg-yellow-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                        Motor
                      </p>
                      {/* <p className="text-[#130F40] bg-blue-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                        Sedang Parkir
                      </p> */}
                    </div>
                  </div>
                  <div className="text-[14px]">
                    <p className="text-[#93A3B6]">Honda Beat</p>
                    <p className="text-[#93A3B6]">Pemilik: Ahmad Fauzi</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-3">
                <button
                  className="bg-[#FEF8FD] font-medium text-[14px] rounded-sm px-2 py-1 cursor-pointer opacity-100 hover:opacity-80 transition flex items-center gap-x-1.5"
                  onClickCapture={handleOpenModalDetail}
                >
                  <FaRegEye className="h-fit w-4 text-[#130F40]" />
                  <p className="font-medium text-[#130F40]">Detail</p>
                </button>
                <button
                  className="bg-[#FEF8FD] font-medium rounded-sm px-2 py-1 opacity-100 hover:opacity-80 transition cursor-pointer"
                  onClick={handleOpenModalEdit}
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
                  <LuCar className="text-blue-600 w-6.5 h-fit" />
                </div>
                <div className="">
                  <div className="flex items-center gap-x-2">
                    <p className="text-[#FEF8FD] font-medium">Joko Widodo</p>
                    <div className="flex items-center gap-x-1.5 mt-1">
                      <p className="text-[#130F40] bg-yellow-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                        Motor
                      </p>
                      {/* <p className="text-[#130F40] bg-blue-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                        Sedang Parkir
                      </p> */}
                    </div>
                  </div>
                  <div className="text-[14px]">
                    <p className="text-[#93A3B6]">Honda Beat</p>
                    <p className="text-[#93A3B6]">Pemilik: Ahmad Fauzi</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-3">
                <button
                  className="bg-[#FEF8FD] font-medium text-[14px] rounded-sm px-2 py-1 cursor-pointer opacity-100 hover:opacity-80 transition flex items-center gap-x-1.5"
                  onClickCapture={handleOpenModalDetail}
                >
                  <FaRegEye className="h-fit w-4 text-[#130F40]" />
                  <p className="font-medium text-[#130F40]">Detail</p>
                </button>
                <button
                  className="bg-[#FEF8FD] font-medium rounded-sm px-2 py-1 opacity-100 hover:opacity-80 transition cursor-pointer"
                  onClick={handleOpenModalEdit}
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
                  <LuCar className="text-blue-600 w-6.5 h-fit" />
                </div>
                <div className="">
                  <div className="flex items-center gap-x-2">
                    <p className="text-[#FEF8FD] font-medium">Joko Widodo</p>
                    <div className="flex items-center gap-x-1.5 mt-1">
                      <p className="text-[#130F40] bg-red-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                        Mobil
                      </p>
                      <p className="text-[#130F40] bg-blue-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                        Sedang Parkir
                      </p>
                    </div>
                  </div>
                  <div className="text-[14px]">
                    <p className="text-[#93A3B6]">Honda Beat</p>
                    <p className="text-[#93A3B6]">Pemilik: Ahmad Fauzi</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-3">
                <button
                  className="bg-[#FEF8FD] font-medium text-[14px] rounded-sm px-2 py-1 cursor-pointer opacity-100 hover:opacity-80 transition flex items-center gap-x-1.5"
                  onClickCapture={handleOpenModalDetail}
                >
                  <FaRegEye className="h-fit w-4 text-[#130F40]" />
                  <p className="font-medium text-[#130F40]">Detail</p>
                </button>
                <button
                  className="bg-[#FEF8FD] font-medium rounded-sm px-2 py-1 opacity-100 hover:opacity-80 transition cursor-pointer"
                  onClick={handleOpenModalEdit}
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
      {isModalOpenAdd && <AdminAddVehicle onClose={handleCloseModalAdd} />}
      {isModalOpenDetail && (
        <AdminDetailVehicle onClose={handleCloseModalDetail} />
      )}
      {isModalOpenEdit && <AdminEditVehicle onClose={handleCloseModalEdit} />}
    </>
  );
}
