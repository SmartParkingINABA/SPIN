import { IoClose } from "react-icons/io5";
import Expired from "./Expired";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddForm({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    plate: "",
    brand: "",
    category: "",
    color: "",
    year: "",
    cc: "",
    validUntil: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const result = await onSubmit(formData);
    if (result.success) {
      onClose();
    } else {
      toast.error("Gagal menambah kendaraan: " + result.error);
    }
  };

  return (
    <div className="font-ubuntu flex justify-center items-center h-dvh w-full bg-[rgba(0,0,0,0.54)] fixed inset-0 z-50">
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
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-y-1 mb-2">
            <label htmlFor="noPlat" className="text-[#FEF8FD] font-medium">
              Plat Nomor
            </label>
            <input
              type="text"
              name="plate"
              onChange={handleChange}
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
              onChange={handleChange}
              name="brand"
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
              name="category"
              onChange={handleChange}
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
              name="color"
              onChange={handleChange}
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
                name="year"
                onChange={handleChange}
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
                name="cc"
                onChange={handleChange}
                className="bg-[#F5E79E] outline-0 py-2 px-3 rounded-sm"
              />
            </div>
          </div>
          <Expired
            label="Masa Berlaku"
            name="validUntil"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="mt-8 w-full border-0 bg-[#FFDB58] py-2 rounded-sm font-medium cursor-pointer transition opacity-100 hover:opacity-80"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
}
