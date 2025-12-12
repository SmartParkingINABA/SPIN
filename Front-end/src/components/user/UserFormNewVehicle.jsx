import { IoClose } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";

export default function UserFormNewVehicle({ onClose }) {
  return (
    <div className="font-ubuntu flex justify-center items-center h-screen w-full bg-transparent fixed inset-0 z-50">
      <div className="border border-[rgba(255,236,120,0.5)] bg-[#130F40] rounded-md p-5 pt-6 w-2/5">
        <div className="flex items-center justify-between mb-6.5">
          <h1 className="text-[#FEF8FD] text-[18px] font-semibold">
            Tambah Kendaraan Baru
          </h1>
          <IoClose
            className="w-6 h-fit text-[#93A3B6] cursor-pointer"
            onClick={onClose}
          />
        </div>
        <form action="">
          <div className="flex flex-col gap-y-1 mb-2">
            <label htmlFor="noPlat" className="text-[#FEF8FD] font-medium">
              Plat Nomor
            </label>
            <input
              type="text"
              placeholder="Z 2728 XNX"
              className="bg-[#F5E79E] outline-0 py-2 px-3 rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-y-1 mb-2">
            <label htmlFor="noPlat" className="text-[#FEF8FD] font-medium">
              Merk
            </label>
            <input
              type="text"
              placeholder="Toyota Avanza / Honda Beat"
              className="bg-[#F5E79E] outline-0 py-2 px-3 rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-y-1 mb-2">
            <label htmlFor="noPlat" className="text-[#FEF8FD] font-medium">
              Jenis
            </label>
            <input
              type="text"
              placeholder="Mobil / Motor"
              className="bg-[#F5E79E] outline-0 py-2 px-3 rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-y-1 mb-2">
            <label htmlFor="noPlat" className="text-[#FEF8FD] font-medium">
              Warna
            </label>
            <input
              type="text"
              placeholder="Hitam / Putih"
              className="bg-[#F5E79E] outline-0 py-2 px-3 rounded-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-4 mb-2">
            <div className="flex flex-col gap-y-1">
              <label htmlFor="noPlat" className="text-[#FEF8FD] font-medium">
                Tahun Keluaran
              </label>
              <input
                type="text"
                placeholder="2009"
                className="bg-[#F5E79E] outline-0 py-2 px-3 rounded-sm"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="noPlat" className="text-[#FEF8FD] font-medium">
                CC
              </label>
              <input
                type="text"
                placeholder="150"
                className="bg-[#F5E79E] outline-0 py-2 px-3 rounded-sm"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-1 relative">
            <label htmlFor="noPlat" className="text-[#FEF8FD] font-medium">
              Masa Berlaku
            </label>
            <input
              type="text"
              placeholder="DD/MM/YYYY"
              className="bg-[#F5E79E] outline-0 py-2 px-3 rounded-sm"
            />
            <MdOutlineDateRange className="w-5 h-fit absolute top-[38px] left-35 text-[#48515b]" />
          </div>
          <div className="grid grid-cols-2 gap-x-4 mt-8">
            <button className="border-0 bg-[#FFDB58] py-2 rounded-sm font-medium cursor-pointer transition opacity-100 hover:opacity-80">
              Batal
            </button>
            <button className="border-0 bg-[#FFDB58] py-2 rounded-sm font-medium cursor-pointer transition opacity-100 hover:opacity-80">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
