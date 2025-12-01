import resetPasswordIcon from "../../assets/images/My-password-pana.svg";

import { FaLock } from "react-icons/fa6";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function NewPassword() {
  return (
    <div className="bg-[#1E1633] font-ubuntu h-screen w-full flex justify-center items-center">
      <div className="w-1/4">
        <h1 className="text-center text-[#ffec78] text-[2.5rem] font-semibold mb-1.5">
          Set new password
        </h1>
        <img src={resetPasswordIcon} alt="" className="w-3/5 mx-auto" />
        <p className="text-[#FEF8FD] font-bold mb-3 mt-5">
          Create new password. Ensure it differs from previous ones for security
        </p>
        <form>
          <label
            htmlFor="password"
            className="text-[#FEF8FD] font-bold text-[15px] ml-2.5"
          >
            Password
          </label>
          <div className="flex items-center gap-x-4 bg-[#ffec78] px-5 py-3 mt-2 mb-3 rounded-xl">
            <FaLock className="w-7 h-fit" />
            <input type="password" className="w-full outline-0" />
            <FaRegEye className="w-7 h-fit" />
          </div>
          <label
            htmlFor="password"
            className="text-[#FEF8FD] font-bold text-[15px] ml-2.5"
          >
            Confirm password
          </label>
          <div className="flex items-center gap-x-4 bg-[#ffec78] px-5 py-3 mt-2 rounded-xl">
            <FaLock className="w-7 h-fit" />
            <input type="password" className="w-full outline-0" />
            <FaRegEye className="w-7 h-fit" />
          </div>
          <button className="w-full bg-transparent border border-[#ffec78] text-[#ffec78] text-[23px] font-bold py-2.5 mt-8 rounded-xl cursor-pointer transition duration-300 ease-in-out hover:border-transparent hover:bg-[#ffec78] hover:text-[#1E1633]">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}
