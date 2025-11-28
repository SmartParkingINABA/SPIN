import forgotPasswordIcon from "../../assets/images/Forgot-password-cuate.svg";
import envelopeIcon from "../../assets/images/envelope-solid-full.svg";

export default function ForgotPassword() {
  return (
    <div className="bg-[#1E1633] font-ubuntu h-screen w-full flex justify-center items-center">
      <div className="w-1/4">
        <h1 className="text-center text-[#ffec78] text-[1.8rem] font-bold mb-4">
          Forgot Password?
        </h1>
        <img src={forgotPasswordIcon} alt="" className="w-3/5 mx-auto" />
        <p className="text-center text-white leading-6.5 mb-8">
          Don’t worry! It happens. Please enter the email address with your
          account
        </p>
        <form>
          <label
            htmlFor="email"
            className="text-white font-bold text-[12px] ml-2.5"
          >
            E-mail Address
          </label>
          <div className="flex items-center gap-x-4 bg-[#ffec78] py-3 px-5 mt-2 mb-1.5 rounded-xl">
            <img src={envelopeIcon} alt="" className="w-7" />
            <input
              type="email"
              className="w-full outline-0"
              placeholder="johndoe@gmail.com"
            />
          </div>

          <button className="w-full bg-transparent border border-[#ffec78] text-[#ffec78] text-[25px] font-bold py-2.5 mt-[25px] rounded-xl cursor-pointer transition duration-300 ease-in-out hover:border-transparent hover:bg-[#ffec78] hover:text-[#1E1633]">
            Get OTP
          </button>
        </form>
      </div>
    </div>
  );
}
