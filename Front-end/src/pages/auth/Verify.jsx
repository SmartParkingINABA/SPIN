import forgotPasswordIcon from "../assets/images/Enter-OTP-cuate.svg";

export default function Verify() {
  return (
    <div className="bg-[#1E1633] font-ubuntu h-screen w-full flex justify-center items-center">
      <div className="w-1/4">
        <h1 className="text-center text-[#ffec78] text-[1.8rem] font-bold mb-1.5">
          Enter OTP
        </h1>
        <img src={forgotPasswordIcon} alt="" className="w-3/5 mx-auto" />
        <p className="text-center text-white font-semibold leading-6.5 mt-8 mb-6">
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

          <button className="w-full bg-transparent border border-[#ffec78] text-[#ffec78] text-[25px] font-bold py-2.5 mt-10 rounded-xl cursor-pointer transition duration-300 ease-in-out hover:border-transparent hover:bg-[#ffec78] hover:text-[#1E1633]">
            Verify
          </button>
        </form>
        <p className="text-center font-semibold text-white mt-5">
          Resend OTP <span>( 00 : 59 )</span>
        </p>
      </div>
    </div>
  );
}
