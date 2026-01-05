import { useState } from "react";
import forgotPasswordIcon from "../../assets/images/public/Enter-OTP-cuate.svg";
import OTPInput from "../../components/auth/OTPInput";
import ResendOTP from "../../components/auth/ResendOTP";
import { useNavigate } from "react-router-dom";

export default function Verify() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const code = otp.join("");

    if (code.length < 4) {
      setError("Kode OTP harus 4 digit");
      return;
    }

    setError("");
    console.log("OTP", code);

    navigate("/auth/password-reset");
  };

  const handleResend = () => {
    console.log("Resend OTP...");
    setOtp(["", "", "", ""]);
    setError("");
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
          className="block text-center w-full bg-[#FFDB58] text-[#130F40] text-[23px] font-bold py-2.5 mt-8 rounded-md cursor-pointer transition opacity-100 hover:opacity-80"
        >
          Verify
        </button>
        <ResendOTP onResend={handleResend} />
      </div>
    </div>
  );
}
