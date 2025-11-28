import lockIcon from "../assets/images/lock-solid-full.svg";
import eyeIcon from "../assets/images/eye.png";
import resetPasswordIcon from "../assets/images/My-password-pana.svg";

export default function NewPassword() {
  return (
    <div className="bg-[#1E1633] font-ubuntu h-screen w-full flex justify-center items-center">
      <div className="w-1/4">
        <h1 className="text-center text-[#ffec78] text-[1.8rem] font-semibold mb-1.5">
          Set new password
        </h1>
        <img src={resetPasswordIcon} alt="" className="w-3/5 mx-auto" />
        <p className="text-white font-bold mb-4 mt-8">
          Create new password. Ensure it differs from previous ones for security
        </p>
        <form>
          <label
            htmlFor="password"
            className="text-white font-bold text-[12px] ml-2.5"
          >
            Password
          </label>
          <div className="flex items-center gap-x-4 bg-[#ffec78] px-5 py-3 my-2 rounded-xl">
            <img src={lockIcon} alt="" className="w-7" />
            <input type="password" className="w-full outline-0" />
            <img src={eyeIcon} alt="" className="w-7" />
          </div>
          <label
            htmlFor="password"
            className="text-white font-bold text-[12px] ml-2.5"
          >
            Confirm password
          </label>
          <div className="flex items-center gap-x-4 bg-[#ffec78] px-5 py-3 my-2 rounded-xl">
            <img src={lockIcon} alt="" className="w-7" />
            <input type="password" className="w-full outline-0" />
            <img src={eyeIcon} alt="" className="w-7" />
          </div>
          <button className="w-full bg-transparent border border-[#ffec78] text-[#ffec78] text-[25px] font-bold py-2.5 mt-[25px] rounded-xl cursor-pointer transition duration-300 ease-in-out hover:border-transparent hover:bg-[#ffec78] hover:text-[#1E1633]">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}
