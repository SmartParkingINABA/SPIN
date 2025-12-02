import forgotPasswordIcon from "../../assets/images/public/Forgot-password-cuate.svg";

import { IoMdMail } from "react-icons/io";

export default function ForgotPassword() {
  return (
    <div className="bg-[#1E1633] font-ubuntu h-screen w-full flex justify-center items-center">
      <div className="w-1/4">
        <h1 className="text-center text-[#ffec78] text-[2.5rem] font-bold mb-4">
          Forgot Password?
        </h1>
        <img src={forgotPasswordIcon} alt="" className="w-3/5 mx-auto" />
        <p className="text-center text-[#FEF8FD] leading-6.5 mb-8">
          Don’t worry! It happens. Please enter the email address with your
          account
        </p>
        <form>
          <label
            htmlFor="email"
            className="text-[#FEF8FD] font-bold text-[15px] ml-2.5"
          >
            E-mail Address
          </label>
          <div className="flex items-center gap-x-4 bg-[#ffec78] py-3 px-5 mt-2 mb-1.5 rounded-xl">
            <IoMdMail className="w-7 h-fit" />
            <input
              type="email"
              className="w-full outline-0"
              placeholder="johndoe@gmail.com"
            />
          </div>

          <button className="w-full bg-transparent border border-[#ffec78] text-[#ffec78] text-[23px] font-bold py-2.5 mt-[18px] rounded-xl cursor-pointer transition duration-300 ease-in-out hover:border-transparent hover:bg-[#ffec78] hover:text-[#1E1633]">
            Get OTP
          </button>
        </form>
      </div>
    </div>
  );
}
