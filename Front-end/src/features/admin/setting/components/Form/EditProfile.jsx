import { FaRegUser } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

export default function EditProfile({
  valueName,
  setValueName,
  valuePhoneNumber,
  setValuePhoneNumber,
}) {
  return (
    <form className="mt-3.5" noValidate>
      <div className="mb-2.5">
        <label htmlFor="fullName" className="flex items-center gap-x-2.5">
          <FaRegUser className="h-fit w-3.5 text-[#93A3B6]" />
          <p className="text-[#FEF8FD] text-[15px]">Name Lengkap</p>
        </label>
        <input
          type="text"
          id="fullName"
          placeholder="John Doe"
          value={valueName}
          onChange={(e) => setValueName(e.target.value)}
          className="mt-1 w-full outline-0 rounded-sm py-2 px-3 bg-[#F5E79E] cursor-text text-[#130F40]"
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
          value="johndoe@mail.com"
          readOnly
          className="mt-1 w-full outline-0 rounded-sm py-2 px-3 bg-[#F5E79E] cursor-text text-[rgba(19,15,64,0.5)]"
        />
        <p className="text-[#93A3B6] text-[12px] mt-0.5">
          Email tidak dapat diubah
        </p>
      </div>
      <div className="">
        <label htmlFor="phoneNumber" className="flex items-center gap-x-2.5">
          <LuPhone className="h-fit w-3.5 text-[#93A3B6]" />
          <p className="text-[#FEF8FD] text-[15px]">Nomor Telepon</p>
        </label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="089908992200"
          value={valuePhoneNumber}
          onChange={(e) => setValuePhoneNumber(e.target.value)}
          className="mt-1 w-full outline-0 rounded-sm py-2 px-3 bg-[#F5E79E] cursor-text text-[#130F40]"
        />
      </div>
      <button
        type="button"
        className="bg-[#FFDB58] mt-9 w-full rounded-sm py-2 font-medium text-[#130F40] transition opacity-100 hover:opacity-80 cursor-pointer"
      >
        Simpan
      </button>
    </form>
  );
}
