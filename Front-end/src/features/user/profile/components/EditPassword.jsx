import { CiLock } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function EditPassword({
  showPassword,
  setShowPassword,
  showNewPassword,
  setShowNewPassword,
  showConfirmPassword,
  setShowConfirmPassword,
}) {
  return (
    <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md w-2/3">
      <p className="text-[#FEF8FD] font-medium">Ubah Password</p>
      <form className="w-1/2 mt-3.5" noValidate>
        <div className="mb-2.5">
          <label
            htmlFor="currently-password"
            className="flex items-center gap-x-2.5"
          >
            <CiLock className="h-fit w-3.5 text-[#93A3B6]" />
            <p className="text-[#FEF8FD] text-[15px]">Password Saat Ini</p>
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
                className="w-5 h-fit cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaRegEye
                className="w-5 h-fit cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
        </div>
        <div className="mb-2.5">
          <label htmlFor="new-password" className="flex items-center gap-x-2.5">
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
                className="w-5 h-fit cursor-pointer"
                onClick={() => setShowNewPassword(false)}
              />
            ) : (
              <FaRegEye
                className="w-5 h-fit cursor-pointer"
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
                className="w-5 h-fit cursor-pointer"
                onClick={() => setShowConfirmPassword(false)}
              />
            ) : (
              <FaRegEye
                className="w-5 h-fit cursor-pointer"
                onClick={() => setShowConfirmPassword(true)}
              />
            )}
          </div>
        </div>
        <button
          type="button"
          className="bg-[#FFDB58] rounded-sm py-1.5 font-medium text-[#130F40] transition opacity-100 hover:opacity-80 cursor-pointer w-1/2 mt-9"
        >
          Ubah Password
        </button>
      </form>
    </div>
  );
}
