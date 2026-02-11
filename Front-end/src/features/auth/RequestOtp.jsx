import forgotPasswordIcon from "../../assets/images/public/Forgot-password-cuate.svg";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useFormValidation } from "../../hooks/useFormValidation";
import { validateEmail } from "../../utils/Validators";
import FormInput from "../../components/FormInput";
import toast from "react-hot-toast";
import { useState } from "react";
import { requestOtp } from "../../services/auth.Service";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import useAutoFocus from "../../hooks/useAutoFocus";

export default function RequestOtp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { values, errors, handleChange, validateAll } = useFormValidation(
    {
      email: "",
    },
    {
      email: validateEmail,
    },
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) return;

    try {
      setLoading(true);

      await requestOtp(values.email);

      toast.success(
        "Kode OTP telah dikirim ke email Anda. Silakan cek inbox atau folder spam.",
      );

      navigate("/auth/forgot/verify-otp");
    } catch (err) {
      if (!err.response) {
        toast.error("Tidak bisa terhubung ke server!");
      } else {
        toast.error(
          err.response?.data?.message ||
            "Gagal mendapatkan kode OTP. Silahkan coba lagi!",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const emailRef = useAutoFocus();

  return (
    <div className="bg-[#1E1633] font-ubuntu h-screen w-full flex justify-center items-center">
      <div className="w-1/4">
        <h1 className="text-center text-[#ffec78] text-[2.5rem] font-bold mb-4">
          Forgot Password?
        </h1>
        <img src={forgotPasswordIcon} alt="" className="w-3/5 mx-auto" />
        <p className="text-center text-[#FEF8FD] leading-6.5 mb-8">
          Don’t worry! It happens. Please enter the email address with your
          account
        </p>
        <form onSubmit={handleSubmit} noValidate>
          <FormInput
            label="E-mail Address"
            htmlFor="email"
            type="email"
            value={values.email}
            icon={IoMdMail}
            placeholder="johndoe@mail.com"
            ref={emailRef}
            error={errors.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className={`mt-8 flex items-center justify-center w-full bg-[#FFDB58] text-[#130F40] text-[23px] font-bold h-13 rounded-md transition hover:opacity-80 ${
              loading
                ? "opacity-80 cursor-not-allowed"
                : "cursor-pointer opacity-100"
            }`}
          >
            {loading ? <LoadingSpinner size={25} color="#1e1633" /> : "Get OTP"}
          </button>
        </form>
      </div>
    </div>
  );
}
