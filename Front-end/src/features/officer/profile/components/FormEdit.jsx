import { IoClose } from "react-icons/io5";
import { IoIosStar, IoIosInformationCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { LuSave } from "react-icons/lu";
import { useState } from "react";
import LoadingSpinner from "../../../../components/ui/LoadingSpinner";

export default function FormEdit({ onClose, data, onSubmit, loading }) {
  const [form, setForm] = useState({
    nama_petugas: data.nama_petugas,
    no_telp: data.no_telp,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    onClose();
  };

  return (
    <div className="font-ubuntu flex justify-center items-center h-screen w-full fixed inset-0 z-50 bg-[rgba(0,0,0,0.54)]">
      <div className="border border-[rgba(255,236,120,0.5)] bg-[#130F40] rounded-md p-5 pt-6 w-2/5">
        <div className="flex items-center justify-between mb-6.5">
          <h1 className="text-[#FEF8FD] text-[18px] font-semibold flex items-center gap-x-2.5">
            <CiEdit className="h-fit w-7" />
            Edit Profile
          </h1>
          <IoClose
            className="w-6 h-fit text-[#93A3B6] cursor-pointer"
            onClick={onClose}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-1.5 mb-3">
            <label
              htmlFor="name"
              className="text-[#FEF8FD] font-medium flex items-start gap-x-1.5"
            >
              Nama Lengkap{" "}
              <IoIosStar className="h-fit w-2 mt-1.5 text-red-500" />
            </label>
            <input
              id="nama_petugas"
              value={form.nama_petugas}
              onChange={handleChange}
              placeholder="John Die"
              className="bg-[#F5E79E] outline-0 py-2 px-3 rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-y-1.5 mb-3">
            <label
              htmlFor="phone-number"
              className="text-[#FEF8FD] font-medium flex items-start gap-x-1.5"
            >
              Nomor Telepon{" "}
              <IoIosStar className="h-fit w-2 mt-1.5 text-red-500" />
            </label>
            <input
              id="no_telp"
              value={form.no_telp}
              onChange={handleChange}
              placeholder="0898 9889 8899"
              className="bg-[#F5E79E] outline-0 py-2 px-3 rounded-sm"
            />
          </div>
          <div className="bg-blue-100 rounded-sm p-3 mt-6">
            <div className="flex items-center gap-x-1.5">
              <IoIosInformationCircleOutline className="h-fit w-5 text-blue-500" />
              <p className="text-blue-400">Informasi:</p>
            </div>
            <p className="text-blue-400">
              Data shift kerja dan lokasi kerja hanya dapat diubah oleh admin.
            </p>
          </div>
          <button
            className="mt-8 w-full border-0 bg-[#FFDB58] py-2 rounded-sm font-medium cursor-pointer transition opacity-100 hover:opacity-80"
            type="submit"
          >
            <div className="w-fit mx-auto flex items-center gap-x-2">
              <LuSave className="h-fit w-5" />
              {loading ? (
                <LoadingSpinner size={18} color="#1e1633" />
              ) : (
                "Simpan"
              )}
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
