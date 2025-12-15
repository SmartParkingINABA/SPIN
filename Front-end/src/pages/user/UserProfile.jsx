import { CiLocationOn, CiLock } from "react-icons/ci";
import { LuArrowRightFromLine, LuPhone } from "react-icons/lu";
import { PiNotePencilThin } from "react-icons/pi";
import { FaRegEye, FaRegEyeSlash, FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useState } from "react";

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@mail.com");
  const [phoneNumber, setPhoneNumber] = useState("+18975650566");
  const [address, setAddress] = useState("jl. karapitan no. 12");

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => setIsEditing(false);
  const handleSave = () => {
    // logic
    setIsEditing(false);
  };

  return (
    <>
      <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
        <h1 className="text-[#FEF8FD] text-2xl font-bold">Profil Pengendara</h1>
        <p className="text-[#93A3B6] font-medium mt-1">
          Kelola informasi data diri anda
        </p>
        <div className="mt-6 flex flex-col gap-y-5">
          <div className="flex gap-x-5">
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md w-2/3">
              <div className="flex items-center justify-between">
                <p className="text-[#FEF8FD] font-medium">Informasi Pribadi</p>
                {!isEditing && (
                  <button
                    onClick={handleEdit}
                    className="text-[#FEF8FD] bg-[#130F40] border border-[#93A3B6] px-2 py-1 rounded-sm text-[14px] cursor-pointer opacity-100 hover:opacity-85"
                  >
                    Edit Profil
                  </button>
                )}
              </div>
              <form className="mt-3.5 w-1/2" noValidate>
                <div className="mb-2.5">
                  <label
                    htmlFor="fullName"
                    className="flex items-center gap-x-2.5"
                  >
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
                  <label
                    htmlFor="email"
                    className="flex items-center gap-x-2.5"
                  >
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
                  <label
                    htmlFor="phoneNumber"
                    className="flex items-center gap-x-2.5"
                  >
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
                  <label
                    htmlFor="address"
                    className="flex items-center gap-x-2.5"
                  >
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
                      onClick={handleCancel}
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
            </div>
            <div className="w-1/3 flex flex-col gap-y-5">
              <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
                <p className="text-[#FEF8FD] font-medium mb-6">Foto Profil</p>
                {/* kalau ada image*/}
                {/* <img src={PP} alt="" className="w-13.5 rounded-full" /> */}
                {/* kalau tidak ada image*/}
                <p className="w-30 h-30 rounded-full bg-[rgba(255,236,120,0.5)] flex items-center justify-center mx-auto text-3xl text-[#FFDB58] font-semibold">
                  JS
                </p>
                <p className="text-[#FEF8FD] text-center mt-4">John Smith</p>
                <p className="text-[#93A3B6] text-center text-[14px]">
                  john.smith@email.com
                </p>
                <button
                  type="button"
                  className="bg-[#FFDB58] rounded-sm py-1.5 font-medium w-full mt-3.5 text-[#130F40] transition opacity-100 hover:opacity-80 cursor-pointer"
                >
                  Ubah Foto
                </button>
              </div>
              <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
                <p className="text-[#FEF8FD] font-medium">Statistik</p>
                <div className="mt-3.5 flex flex-col gap-y-3.5">
                  <div className="pb-3 border-b border-b-[rgba(255,236,120,0.5)]">
                    <p className="text-[14px] text-[#93A3B6]">
                      Total Kendaraan
                    </p>
                    <p className="text-[#FEF8FD]">2 kendaraan</p>
                  </div>
                  <div className="pb-3 border-b border-b-[rgba(255,236,120,0.5)]">
                    <p className="text-[14px] text-[#93A3B6]">Total Parkir</p>
                    <p className="text-[#FEF8FD]">6 Kali</p>
                  </div>
                  <div className="">
                    <p className="text-[14px] text-[#93A3B6]">
                      Bergabung Sejak
                    </p>
                    <p className="text-[#FEF8FD]">24 November 2055</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-5">
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md w-2/3">
              <p className="text-[#FEF8FD] font-medium">Ubah Password</p>
              <form className="w-1/2 mt-3.5" noValidate>
                <div className="mb-2.5">
                  <label
                    htmlFor="currently-password"
                    className="flex items-center gap-x-2.5"
                  >
                    <CiLock className="h-fit w-3.5 text-[#93A3B6]" />
                    <p className="text-[#FEF8FD] text-[15px]">
                      Password Saat Ini
                    </p>
                  </label>
                  <div className="flex items-center gap-x-4 bg-[#F5E79E] px-3 py-1 mt-1 rounded-md">
                    <input
                      id="currently-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="• • • • • • • •"
                      className="w-full outline-0"
                    />
                    {showPassword ? (
                      <FaRegEyeSlash
                        className="w-5.5 h-fit cursor-pointer"
                        onClick={() => setShowPassword(false)}
                      />
                    ) : (
                      <FaRegEye
                        className="w-5.5 h-fit cursor-pointer"
                        onClick={() => setShowPassword(true)}
                      />
                    )}
                  </div>
                </div>
                <div className="mb-2.5">
                  <label
                    htmlFor="new-password"
                    className="flex items-center gap-x-2.5"
                  >
                    <CiLock className="h-fit w-3.5 text-[#93A3B6]" />
                    <p className="text-[#FEF8FD] text-[15px]">Password Baru</p>
                  </label>
                  <div className="flex items-center gap-x-4 bg-[#F5E79E] px-3 py-1 mt-1 rounded-md">
                    <input
                      id="new-password"
                      type={showNewPassword ? "text" : "password"}
                      placeholder="• • • • • • • •"
                      className="w-full outline-0"
                    />
                    {showNewPassword ? (
                      <FaRegEyeSlash
                        className="w-5.5 h-fit cursor-pointer"
                        onClick={() => setShowNewPassword(false)}
                      />
                    ) : (
                      <FaRegEye
                        className="w-5.5 h-fit cursor-pointer"
                        onClick={() => setShowNewPassword(true)}
                      />
                    )}
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="confirm-password"
                    className="flex items-center gap-x-2.5"
                  >
                    <CiLock className="h-fit w-3.5 text-[#93A3B6]" />
                    <p className="text-[#FEF8FD] text-[15px]">
                      Konfirmasi Password Baru
                    </p>
                  </label>
                  <div className="flex items-center gap-x-4 bg-[#F5E79E] px-3 py-1 mt-1 rounded-md">
                    <input
                      id="confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="• • • • • • • •"
                      className="w-full outline-0"
                    />
                    {showConfirmPassword ? (
                      <FaRegEyeSlash
                        className="w-5.5 h-fit cursor-pointer"
                        onClick={() => setShowConfirmPassword(false)}
                      />
                    ) : (
                      <FaRegEye
                        className="w-5.5 h-fit cursor-pointer"
                        onClick={() => setShowConfirmPassword(true)}
                      />
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  className="bg-[#FFDB58] rounded-sm py-1.5 font-medium text-[#130F40] transition opacity-100 hover:opacity-80 cursor-pointer w-1/2 mt-5"
                >
                  Ubah Password
                </button>
              </form>
            </div>
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md w-1/3">
              <p className="text-[#FEF8FD] font-medium">Aksi</p>
              <div className="mt-3.5">
                <button className="w-full flex items-center gap-x-3 bg-red-500 rounded-sm py-1.5 px-3 cursor-pointer opacity-100 hover:opacity-80 transition">
                  <LuArrowRightFromLine className="w-5 h-fit text-[#FEF8FD]" />
                  <p className="text-[#FEF8FD]">Logout</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
