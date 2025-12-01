import { Link } from "react-router-dom";

export default function Enter() {
  return (
    <div className="bg-[#130F40] font-ubuntu h-screen w-full flex justify-center items-center">
      <div className="w-1/4">
        <h1 className="uppercase text-[#ffec78] text-center text-[3rem] mb-4.5 font-bold ">
          Spin.
        </h1>
        <p className="text-[#FFFFFF] text-justify leading-6.5">
          Dengan mendaftar di SPIN, Anda dapat mengelola data kendaraan,
          melakukan akses parkir, dan memantau aktivitas kendaraan anda
          kapanpun.
        </p>
        <div className="mt-[3.5em] flex flex-col gap-y-10 w-full mx-auto">
          <Link
            to="/auth/login"
            className="block bg-[#ffec78] text-[#1E1633] py-1.5 font-bold rounded-xl text-[1.5rem] cursor-pointer border border-transparent transition duration-300 ease-in-out hover:bg-transparent hover:text-[#FFFFFF] hover:border hover:border-[#FFFFFF] w-full text-center"
          >
            Login
          </Link>
          <Link
            to="/auth/register"
            className="block bg-[#ffec78] text-[#1E1633] py-1.5 font-bold rounded-xl text-[1.5rem] cursor-pointer border border-transparent transition duration-300 ease-in-out hover:bg-transparent hover:text-[#FFFFFF] hover:border hover:border-[#ffec78] w-full text-center"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
