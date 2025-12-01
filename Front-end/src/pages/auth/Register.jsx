import Dropdown from "../../components/auth/Dropdown.jsx";

import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function Register() {
  return (
    <div className="bg-[#1E1633] font-ubuntu h-screen w-full flex justify-center items-center">
      <div className="w-1/4">
        <h1 className="text-[#ffec78] text-[2.5rem] font-bold mb-1.5">
          Register
        </h1>
        <p className="text-[#FEF8FD] font-bold mb-3.5">
          let’s keep it quick, just 3 steps and you’re in
        </p>
        <form>
          <label
            htmlFor="email"
            className="text-[#FEF8FD] font-bold text-[15px] ml-2.5"
          >
            Enter your email
          </label>
          <div className="flex items-center gap-x-4 bg-[#ffec78] py-3 px-5 mt-2 mb-3 rounded-xl">
            <IoMdMail className="w-7 h-fit" />
            <input
              type="email"
              className="w-full outline-0"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <label
            htmlFor="password"
            className="text-[#FEF8FD] font-bold text-[15px] ml-2.5"
          >
            Enter your password
          </label>
          <div className="flex items-center gap-x-4 bg-[#ffec78] px-5 py-3 mt-2 mb-3 rounded-xl">
            <FaLock className="w-7 h-fit" />
            <input type="password" className="w-full outline-0" />
            <FaRegEye className="w-7 h-fit cursor-pointer" />
          </div>
          <label
            htmlFor="password"
            className="text-[#FEF8FD] font-bold text-[15px] ml-2.5"
          >
            Re-Enter your password
          </label>
          <div className="flex items-center gap-x-4 bg-[#ffec78] px-5 py-3 mt-2 mb-3 rounded-xl">
            <FaLock className="w-7 h-fit" />
            <input type="password" className="w-full outline-0" />
            <FaRegEye className="w-7 h-fit cursor-pointer" />
          </div>

          <label
            htmlFor=""
            className="text-[#FEF8FD] font-bold text-[15px] ml-2.5"
          >
            Select user type
          </label>
          <Dropdown />

          <button className="w-full bg-transparent border border-[#ffec78] text-[#ffec78] text-[23px] font-bold py-2.5 mt-6 rounded-xl cursor-pointer transition duration-300 ease-in-out hover:border-transparent hover:bg-[#ffec78] hover:text-[#1E1633]">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
