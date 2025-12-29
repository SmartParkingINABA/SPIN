import { IoClose } from "react-icons/io5";

export default function AddForm({ onClose }) {
  return (
    <div className="font-ubuntu flex justify-center items-center h-screen w-full fixed inset-0 z-50 bg-[rgba(0,0,0,0.54)]">
      <div className="border border-[rgba(255,236,120,0.5)] bg-[#130F40] rounded-md p-5 pt-6 w-1/3">
        <div className="flex items-center justify-between">
          <h1 className="text-[#FEF8FD] text-[18px] font-semibold">
            Tambah Kendaraan Baru
          </h1>
          <IoClose
            className="w-6 h-fit text-[#93A3B6] cursor-pointer"
            onClick={onClose}
          />
        </div>
        <p className="text-[#93A3B6] mb-6 mt-1">
          Isi form di bawah untuk menambahkan kendaraan
        </p>
        <form action="">
          <div className="flex flex-col gap-y-1 mb-2">
            <label htmlFor="plat-number" className="text-[#FEF8FD] font-medium">
              No. Plat
            </label>
            <input
              id="plat-number"
              type="text"
              placeholder="Z 2020 AH"
              className="bg-[#F5E79E] outline-0 py-2 px-3 rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-y-1 mb-2">
            <label htmlFor="brand" className="text-[#FEF8FD] font-medium">
              Merk / Model
            </label>
            <input
              id="brand"
              type="text"
              placeholder="Honda Beat"
              className="bg-[#F5E79E] outline-0 py-2 px-3 rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-y-1 mb-2">
            <label htmlFor="type" className="text-[#FEF8FD] font-medium">
              Jenis Kendaraan
            </label>
            <input
              id="type"
              type="text"
              placeholder="Motor / Mobil"
              className="bg-[#F5E79E] outline-0 py-2 px-3 rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-y-1 mb-2">
            <label htmlFor="full-name" className="text-[#FEF8FD] font-medium">
              Nama Lengkap
            </label>
            <input
              id="full-name"
              type="text"
              placeholder="John Doe"
              className="bg-[#F5E79E] outline-0 py-2 px-3 rounded-sm"
            />
          </div>
          <button className="mt-8 border-0 bg-[#FFDB58] py-2 rounded-sm font-medium cursor-pointer transition opacity-100 hover:opacity-80 w-full">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
}
