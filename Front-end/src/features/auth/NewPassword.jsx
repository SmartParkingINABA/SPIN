import resetPasswordIcon from "../../assets/images/public/My-password-pana.svg";
import { FaLock } from "react-icons/fa6";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormValidation } from "../../hooks/useFormValidation";
import {
  validateConfirmPassword,
  validatePassword,
} from "../../utils/Validators";
import FormInput from "../../components/FormInput";

export default function NewPassword() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { values, errors, handleChange, validateAll } = useFormValidation(
    {
      password: "",
      confirmPassword: "",
    },
    {
      password: validatePassword,
      confirmPassword: validateConfirmPassword,
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateAll()) return;

    navigate("/auth/login");

    // 🔥 submit ke API
    console.log("Password baru:", values.password);
  };

  return (
    <div className="bg-[#1E1633] font-ubuntu h-screen w-full flex justify-center items-center">
      <div className="w-1/4">
        <h1 className="text-center text-[#ffec78] text-[2.5rem] font-semibold mb-1.5">
          Set new password
        </h1>
        <img src={resetPasswordIcon} alt="" className="w-3/5 mx-auto" />
        <p className="text-[#FEF8FD] font-bold mb-3 mt-5">
          Create new password. Ensure it differs from previous ones for security
        </p>
        <form onSubmit={handleSubmit} noValidate>
          <FormInput
            label="Password"
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
            type={showConfirmPassword ? "text" : "password"}
            value={values.confirmPassword}
            error={errors.confirmPassword}
            icon={FaLock}
            placeholder="••••••••"
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
          <button
            type="submit"
            className="block text-center w-full bg-[#FFDB58] text-[#130F40] text-[23px] font-bold py-2.5 mt-8 rounded-md transition opacity-100 hover:opacity-80"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}
