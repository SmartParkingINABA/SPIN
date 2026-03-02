import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function ConfirmReset() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  useEffect(() => {
    if (!email) {
      toast.error("Akses tidak valid. Silahkan ulangi proses.");
      navigate("/auth/forgot/request-otp", { replace: true });
    }
  }, [email, navigate]);

  if (!email) return null;

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
          to="/auth/forgot/reset-password"
          state={{ email }}
          className="block text-center w-full bg-[#FFDB58] text-[#130F40] text-[23px] font-bold py-2.5 mt-30 rounded-md transition opacity-100 hover:opacity-80"
        >
          Confirm
        </Link>
      </div>
    </div>
  );
}
