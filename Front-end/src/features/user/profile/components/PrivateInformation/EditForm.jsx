import { CiLocationOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

export default function EditForm({
  isEditing,
  setIsEditing,
  fullName,
  setFullName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  address,
  setAddress,
  handleSave,
}) {
  return (
    <form className="mt-3.5 w-1/2" noValidate>
      <div className="mb-2.5">
        <label htmlFor="fullName" className="flex items-center gap-x-2.5">
          <FaRegUser className="h-fit w-3.5 text-[#93A3B6]" />
          <p className="text-[#FEF8FD] text-[15px]">Name Lengkap</p>
        </label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          disabled={!isEditing}
          onChange={(e) => setFullName(e.target.value)}
          className={`mt-1 w-full outline-0 rounded-sm px-3 py-1 ${
            isEditing
              ? "bg-[#F5E79E] cursor-text text-[#130F40]"
              : "bg-transparent cursor-context-menu text-[#93A3B6]"
          }`}
        />
      </div>
      <div className="mb-2.5">
        <label htmlFor="email" className="flex items-center gap-x-2.5">
          <MdOutlineMail className="h-fit w-3.5 text-[#93A3B6]" />
          <p className="text-[#FEF8FD] text-[15px]">Email</p>
        </label>
        <input
          type="email"
          id="email"
          disabled={!isEditing}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`mt-1 w-full outline-0 rounded-sm px-3 py-1 ${
            isEditing
              ? "bg-[#F5E79E] cursor-text text-[#130F40]"
              : "bg-transparent cursor-context-menu text-[#93A3B6]"
          }`}
        />
      </div>
      <div className="mb-2.5">
        <label htmlFor="phoneNumber" className="flex items-center gap-x-2.5">
          <LuPhone className="h-fit w-3.5 text-[#93A3B6]" />
          <p className="text-[#FEF8FD] text-[15px]">Nomor Telepon</p>
        </label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          disabled={!isEditing}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className={`mt-1 w-full outline-0 rounded-sm px-3 py-1 ${
            isEditing
              ? "bg-[#F5E79E] cursor-text text-[#130F40]"
              : "bg-transparent cursor-context-menu text-[#93A3B6]"
          }`}
        />
      </div>
      <div className="">
        <label htmlFor="address" className="flex items-center gap-x-2.5">
          <CiLocationOn className="h-fit w-3.5 text-[#93A3B6]" />
          <p className="text-[#FEF8FD] text-[15px]">Alamat</p>
        </label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          disabled={!isEditing}
          className={`mt-1 w-full outline-0 rounded-sm px-3 py-1 ${
            isEditing
              ? "bg-[#F5E79E] cursor-text text-[#130F40]"
              : "bg-transparent cursor-context-menu text-[#93A3B6]"
          }`}
        />
      </div>
      {isEditing && (
        <div className="mt-6.5 grid grid-cols-2 gap-x-4.5">
          <button
            type="button"
            className="bg-[#FFDB58] rounded-sm py-1.5 font-medium text-[#130F40] transition opacity-100 hover:opacity-80 cursor-pointer"
            onClick={() => setIsEditing(false)}
          >
            Batal
          </button>
          <button
            type="button"
            className="bg-[#FFDB58] rounded-sm py-1.5 font-medium text-[#130F40] transition opacity-100 hover:opacity-80 cursor-pointer"
            onClick={handleSave}
          >
            Simpan
          </button>
        </div>
      )}
    </form>
  );
}
