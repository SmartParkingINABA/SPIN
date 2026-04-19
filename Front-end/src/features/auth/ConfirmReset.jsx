import { Link } from "react-router-dom";

export default function ConfirmReset() {
  return (
    <div className="bg-[#1E1633] font-ubuntu min-h-dvh w-full flex justify-center items-center px-5 sm:px-0">
      <div className="w-full sm:w-1/4w-1/4">
        <h1 className="text-[#ffec78] text-[27px] sm:text-[2.5rem] font-bold mb-4">
          Password Reset
        </h1>
        <p className="text-[#FEF8FD] font-semibold leading-6.5">
          Your password has been successfully reset, click confirm to set a new
          password
        </p>
        <Link
          to="/auth/forgot/reset-password"
          className="block text-center w-full bg-[#FFDB58] text-[#130F40] text-[18px] sm:text-[23px] font-bold h-11.5 sm:h-13 mt-30 rounded-md transition opacity-100 hover:opacity-80"
        >
          Confirm
        </Link>
      </div>
    </div>
  );
}
