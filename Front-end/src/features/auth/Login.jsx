import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useFormValidation } from "../../hooks/useFormValidation";
import { validateEmail, validatePassword } from "../../utils/Validators";
import FormInput from "../../components/FormInput";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import { login } from "../../services/auth.Service";
import useAutoFocus from "../../hooks/useAutoFocus";

const roleRedirectMap = {
  admin: "/admin",
  petugas: "/petugas",
  pengendara: "/pengendara",
};

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { values, errors, handleChange, validateAll } = useFormValidation(
    {
      email: "",
      password: "",
    },
    {
      email: validateEmail,
      password: validatePassword,
    },
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateAll()) return;

    try {
      setLoading(true);

      const res = await login(values.email, values.password);

      const role = res.user.role.toLowerCase();
      console.log(role);

      const redirectPath = roleRedirectMap[role] || "/";

      toast.success(res.message || "Kamu berhasil login!");

      navigate(redirectPath);
    } catch (err) {
      if (!err.response) {
        toast.error("Tidak bisa terhubung ke server!");
      } else {
        toast.error(err.response?.data?.message || "Login gagal");
      }
    } finally {
      setLoading(false);
    }
  };

  const emailRef = useAutoFocus();

  return (
    <div className="bg-[#1E1633] font-ubuntu h-screen w-full flex justify-center items-center">
      <div className="w-1/4">
        <h1 className="text-[#ffec78] text-[2.5rem] font-bold mb-1.5">Login</h1>
        <p className="text-[#FEF8FD] font-bold mb-3.5">
          Please login to your account
        </p>
        <form onSubmit={handleSubmit} noValidate>
          <FormInput
            label="E-mail Address"
            type="email"
            htmlFor="email"
            value={values.email}
            icon={IoMdMail}
            placeholder="johndoe@mail.com"
            error={errors.email}
            onChange={(e) => handleChange("email", e.target.value)}
            ref={emailRef}
          />
          <FormInput
            label="Password"
            htmlFor="password"
            type={showPassword ? "text" : "password"}
            value={values.password}
            icon={FaLock}
            placeholder="••••••••"
            error={errors.password}
            onChange={(e) => handleChange("password", e.target.value)}
          >
            {showPassword ? (
              <FaRegEyeSlash
                className="w-7 h-fit cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaRegEye
                className="w-7 h-fit cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </FormInput>
          <Link
            to="/auth/forgot/request-otp"
            className="block text-[#93A3B6] font-bold text-right my-4.5 mr-5"
          >
            Forgot Password ?
          </Link>
          <button
            type="submit"
            disabled={loading}
            className={`flex items-center justify-center w-full bg-[#FFDB58] text-[#130F40] text-[23px] font-bold h-13 rounded-md transition hover:opacity-80 ${
              loading
                ? "opacity-80 cursor-not-allowed"
                : "cursor-pointer opacity-100"
            }`}
          >
            {loading ? <LoadingSpinner size={25} color="#1e1633" /> : "Login"}
          </button>
        </form>
        <p className="text-sm mt-5 text-center text-[#FEF8FD]">
          Don't have an account?{" "}
          <Link to="/auth/register" className="font-bold text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
