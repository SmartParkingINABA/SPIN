import { Link } from "react-router-dom";

export default function PasswordReset() {
  return (
    <div className="bg-[#1E1633] font-ubuntu h-screen w-full flex justify-center items-center">
      <div className="w-1/4">
        <h1 className="text-[#ffec78] text-[1.8rem] font-bold mb-4">
          Password Reset
        </h1>
        <p className="text-[#FEF8FD] font-semibold leading-6.5">
          Your password has been successfully reset, click confirm to set a new
          password
        </p>
        <Link
          to="/auth/new-password"
          className="block text-center w-full bg-[#FFDB58] text-[#130F40] text-[23px] font-bold py-2.5 mt-30 rounded-md transition opacity-100 hover:opacity-80"
        >
          Confirm
        </Link>
      </div>
    </div>
  );
}
