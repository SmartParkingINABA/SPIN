import envelopeIcon from "../../assets/images/envelope-solid-full.svg";
import lockIcon from "../../assets/images/lock-solid-full.svg";
import eyeIcon from "../../assets/images/eye.png";
import Dropdown from "../../components/auth/Dropdown.jsx";

export default function Register() {
  return (
    <div className="bg-[#1E1633] font-ubuntu h-screen w-full flex justify-center items-center">
      <div className="w-1/4">
        <h1 className="text-[#ffec78] text-[2.5rem] font-bold mb-3.5">
          Register
        </h1>
        <p className="text-white font-bold mb-5.5">
          let’s keep it quick, just 3 steps and you’re in
        </p>
        <form>
          <label
            htmlFor="email"
            className="text-white font-bold text-[12px] ml-2.5"
          >
            Enter your email
          </label>
          <div className="flex items-center gap-x-4 bg-[#ffec78] py-3 px-5 my-2 rounded-xl">
            <img src={envelopeIcon} alt="" className="w-7" />
            <input
              type="email"
              className="w-full outline-0"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <label
            htmlFor="password"
            className="text-white font-bold text-[12px] ml-2.5"
          >
            Enter your password
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
            Re-Enter your password
          </label>
          <div className="flex items-center gap-x-4 bg-[#ffec78] px-5 py-3 my-2 rounded-xl">
            <img src={lockIcon} alt="" className="w-7" />
            <input type="password" className="w-full outline-0" />
            <img src={eyeIcon} alt="" className="w-7" />
          </div>

          <label htmlFor="" className="text-white font-bold text-[12px] ml-2.5">
            Select user type
          </label>
          <Dropdown />

          <button className="w-full bg-transparent border border-[#ffec78] text-[#ffec78] text-[25px] font-bold py-2.5 mt-[25px] rounded-xl cursor-pointer transition duration-300 ease-in-out hover:border-transparent hover:bg-[#ffec78] hover:text-[#1E1633]">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
