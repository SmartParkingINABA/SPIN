import { Link } from "react-router-dom";
import forgotPasswordIcon from "../../assets/images/public/Enter-OTP-cuate.svg";

export default function Verify() {
  return (
    <div className="bg-[#1E1633] font-ubuntu h-screen w-full flex justify-center items-center">
      <div className="w-1/4">
        <h1 className="text-center text-[#ffec78] text-[2.5rem] font-bold mb-1.5">
          Enter OTP
        </h1>
        <img src={forgotPasswordIcon} alt="" className="w-3/5 mx-auto" />
        <p className="text-center text-[#FEF8FD] font-semibold leading-6 mt-5 mb-4">
          An 4 digit OTP has been sent to your email account
        </p>
        <form>
          <div className="grid grid-cols-4 gap-x-10">
            <input
              type="text"
              className="bg-[#ffec78] text-2xl text-center font-semibold rounded-md py-3 px-5 outline-0"
              minLength={1}
              maxLength={1}
            />
            <input
              type="text"
              className="bg-[#ffec78] text-2xl text-center font-semibold rounded-md py-3 px-5 outline-0"
              minLength={1}
              maxLength={1}
            />
            <input
              type="text"
              className="bg-[#ffec78] text-2xl text-center font-semibold rounded-md py-3 px-5 outline-0"
              minLength={1}
              maxLength={1}
            />
            <input
              type="text"
              className="bg-[#ffec78] text-2xl text-center font-semibold rounded-md py-3 px-5 outline-0"
              minLength={1}
              maxLength={1}
            />
          </div>

          <Link
            to="/auth/password-reset"
            className="block text-center w-full bg-transparent border border-[#ffec78] text-[#ffec78] text-[23px] font-bold py-2.5 mt-8 rounded-xl cursor-pointer transition duration-300 ease-in-out hover:border-transparent hover:bg-[#ffec78] hover:text-[#1E1633]"
          >
            Verify
          </Link>
        </form>
        <p className="text-center font-semibold text-[#FEF8FD] mt-4">
          Resend OTP <span>( 00 : 59 )</span>
        </p>
      </div>
    </div>
  );
}
