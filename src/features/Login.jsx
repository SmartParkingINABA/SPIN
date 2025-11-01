import envelopeIcon from "../../public/images/envelope-solid-full.svg";
import lockIcon from "../../public/images/lock-solid-full.svg";
import eyeIcon from "../../public/images/eye.png";

export default function Login() {
  return (
    <div className="bg-[#1E1633] font-ubuntu h-screen w-full flex justify-center items-center">
      <div className="w-1/4">
        <h1 className="text-[#ffec78] text-[2.5rem] font-bold mb-3.5">Login</h1>
        <p className="text-white font-bold mb-5.5">
          Please login to your account
        </p>
        <form>
          <label htmlFor="email" className="text-white font-bold text-[12px]">
            E-mail Address
          </label>
          <div className="flex items-center gap-x-4 bg-[#ffec78] py-3 px-5 mt-2 mb-4 rounded-xl">
            <img src={envelopeIcon} alt="" className="w-8" />
            <input type="email" className="w-full outline-0" />
          </div>
          <label
            htmlFor="password"
            className="text-white font-bold text-[12px]"
          >
            Password
          </label>
          <div className="flex items-center gap-x-4 bg-[#ffec78] pl-5 py-3 pr-15 mt-2 rounded-xl relative">
            <img src={lockIcon} alt="" className="w-8" />
            <input type="password" className="w-full outline-0" />
            <img
              src={eyeIcon}
              alt=""
              className="w-7 absolute top-[13px] right-[27px]"
            />
          </div>
          <p className="text-[#93A3B6] font-bold text-[16px] text-right mt-5 mr-3">
            Forgot Password ?
          </p>
          <button className="w-full bg-transparent border border-[#ffec78] text-[#ffec78] text-[25px] font-bold py-2.5 mt-[25px] rounded-xl cursor-pointer transition duration-300 ease-in-out hover:border-transparent hover:bg-[#ffec78] hover:text-[#1E1633]">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
