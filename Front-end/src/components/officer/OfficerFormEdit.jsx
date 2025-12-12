import { IoClose } from "react-icons/io5";
import { IoIosStar, IoIosInformationCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { LuSave } from "react-icons/lu";

export default function OfficerFormEdit({ onClose }) {
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
        <form action="">
          <div className="flex flex-col gap-y-1.5 mb-3">
            <label
              htmlFor="name"
              className="text-[#FEF8FD] font-medium flex items-start gap-x-1.5"
            >
              Nama Lengkap{" "}
              <IoIosStar className="h-fit w-2 mt-1.5 text-red-500" />
            </label>
            <input
              type="text"
              id="name"
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
              type="text"
              id="phone-number"
              placeholder="+62 89383897866"
              className="bg-[#F5E79E] outline-0 py-2 px-3 rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-y-1.5">
            <label
              htmlFor="email"
              className="text-[#FEF8FD] font-medium flex items-start gap-x-1.5"
            >
              Email <IoIosStar className="h-fit w-2 mt-1.5 text-red-500" />
            </label>
            <input
              type="text"
              id="email"
              placeholder="johndie@mail.com"
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
          <div className="grid grid-cols-2 gap-x-4 mt-8">
            <button className="border-0 bg-[#FFDB58] py-2 rounded-sm font-medium cursor-pointer transition opacity-100 hover:opacity-80">
              <div className="w-fit mx-auto flex items-center gap-x-2">
                <IoClose className="h-fit w-5" />
                Batal
              </div>
            </button>
            <button className="border-0 bg-[#FFDB58] py-2 rounded-sm font-medium cursor-pointer transition opacity-100 hover:opacity-80">
              <div className="w-fit mx-auto flex items-center gap-x-2">
                <LuSave className="h-fit w-5" />
                Simpan
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
