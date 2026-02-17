import { useEffect, useState } from "react";
import forgotPasswordIcon from "../../assets/images/public/Enter-OTP-cuate.svg";
import OTPInput from "../../components/auth/OTPInput";
import ResendOTP from "../../components/auth/ResendOTP";
import { useNavigate } from "react-router-dom";
import { validateOtp } from "../../utils/Validators.js";
import { verifyOtp } from "../../services/auth.Service.js";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/ui/LoadingSpinner.jsx";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    if (!hasSubmitted) return;

    const code = otp.join("");

    const validationError = validateOtp(code);
    setError(validationError);
  }, [otp, hasSubmitted]);

  const handleSubmit = async () => {
    const code = otp.join("");

    setHasSubmitted(true);

    const validationError = validateOtp(code);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await verifyOtp(code);

      toast.success(res.message || "OTP berhasil diverifikasi!");
      navigate("/auth/forgot/confirm-reset");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "OTP salah atau sudah kadaluarsa",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResend = () => {
    setOtp(["", "", "", ""]);
    setError("");
    setHasSubmitted(false);
    toast.success("Kode OTP berhasil dikirim ulang!");
  };

  return (
    <div className="bg-[#1E1633] font-ubuntu h-screen w-full flex justify-center items-center">
      <div className="w-1/4">
        <h1 className="text-center text-[#ffec78] text-[2.5rem] font-bold mb-1.5">
          Enter OTP
        </h1>
        <img src={forgotPasswordIcon} alt="" className="w-3/5 mx-auto" />
        <p className="text-center text-[#FEF8FD] font-semibold leading-6 mt-5 mb-4">
          An 4 digit OTP has been sent to your email account
        </p>
        <OTPInput value={otp} onChange={setOtp} error={error} />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`flex items-center justify-center w-full bg-[#FFDB58] text-[#130F40] text-[23px] font-bold h-13 mt-8 rounded-md transition hover:opacity-80 ${
            loading
              ? "opacity-80 cursor-not-allowed"
              : "cursor-pointer opacity-100"
          }`}
        >
          {loading ? <LoadingSpinner size={25} color="#1e1633" /> : "Verify"}
        </button>
        <ResendOTP onResend={handleResend} />
      </div>
    </div>
  );
}
