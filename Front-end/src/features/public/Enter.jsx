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
            className="block bg-[#FFDB58] text-[#1E1633] py-1.5 font-bold rounded-md text-[1.5rem] w-full text-center transition opacity-100 hover:opacity-80"
          >
            Login
          </Link>
          <Link
            to="/auth/register"
            className="block bg-[#FFDB58] text-[#1E1633] py-1.5 font-bold rounded-md text-[1.5rem] w-full text-center transition opacity-100 hover:opacity-80"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
