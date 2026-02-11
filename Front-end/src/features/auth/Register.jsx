import { useState } from "react";
import Dropdown from "../../components/auth/Dropdown.jsx";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useFormValidation } from "../../hooks/useFormValidation.js";
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
} from "../../utils/Validators.js";
import FormInput from "../../components/FormInput.jsx";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/ui/LoadingSpinner.jsx";
import { register } from "../../services/auth.Service.js";
import useAutoFocus from "../../hooks/useAutoFocus.jsx";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState(null);
  const [dropdownError, setDropdownError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { values, errors, handleChange, validateAll } = useFormValidation(
    {
      email: "",
      password: "",
      confirmPassword: "",
    },
    {
      email: validateEmail,
      password: validatePassword,
      confirmPassword: validateConfirmPassword,
    },
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = validateAll();

    if (!userType) {
      setDropdownError("User type wajib dipilih");
    }

    if (!isFormValid || !userType) return;

    try {
      setLoading(true);

      const res = await register(values.email, values.password, userType);

      toast.success(
        res.message || "Kamu berhasil membuat akun. Silahkan login!",
      );
      navigate("/auth/login");
    } catch (err) {
      if (!err.response) {
        toast.error("Tidak bisa terhubung ke server!");
      } else {
        toast.error(
          err.response?.data?.message ||
            "Kamu gagal registrasi. Silahkan coba lagi!",
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
        <h1 className="text-[#ffec78] text-[2.5rem] font-bold mb-1.5">
          Register
        </h1>
        <p className="text-[#FEF8FD] font-bold mb-3.5">
          let’s keep it quick, just 3 steps and you’re in
        </p>
        <form onSubmit={handleSubmit} noValidate>
          <FormInput
            label="Enter your email"
            type="email"
            htmlFor="email"
            value={values.email}
            icon={IoMdMail}
            placeholder="johndoe@mail.com"
            ref={emailRef}
            error={errors.email}
            onChange={(e) => handleChange("email", e.target.value)}
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
          <FormInput
            label="Confirm password"
            htmlFor="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={values.confirmPassword}
            icon={FaLock}
            placeholder="••••••••"
            error={errors.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
          >
            {showConfirmPassword ? (
              <FaRegEyeSlash
                className="w-7 h-fit cursor-pointer"
                onClick={() => setShowConfirmPassword(false)}
              />
            ) : (
              <FaRegEye
                className="w-7 h-fit cursor-pointer"
                onClick={() => setShowConfirmPassword(true)}
              />
            )}
          </FormInput>
          <label
            htmlFor=""
            className="text-[#FEF8FD] font-bold text-[15px] ml-2.5 block mt-3"
          >
            Pilih tipe pengguna
          </label>
          <Dropdown
            value={userType}
            onChange={setUserType}
            clearError={() => setDropdownError("")}
          />
          {dropdownError && (
            <p className="ml-2.5 mt-1.5 text-red-500 font-semibold text-[10px]">
              {dropdownError}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`flex items-center justify-center w-full bg-[#FFDB58] text-[#130F40] text-[23px] font-bold h-13 mt-8 rounded-md transition hover:opacity-80 ${
              loading
                ? "opacity-80 cursor-not-allowed"
                : "cursor-pointer opacity-100"
            }`}
          >
            {loading ? <LoadingSpinner size={25} color="#1e1633" /> : "Sign up"}
          </button>
        </form>
        <p className="text-sm mt-5 text-center text-[#FEF8FD]">
          Have an account?{" "}
          <Link to="/auth/login" className="font-bold text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
