import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useFormValidation } from "../../hooks/useFormValidation";
import { validateEmail, validatePassword } from "../../utils/Validators";
import FormInput from "../../components/FormInput";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { values, errors, handleChange, validateAll } = useFormValidation(
    {
      email: "",
      password: "",
    },
    {
      email: validateEmail,
      password: validatePassword,
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateAll()) return;

    // login success
    navigate("/user");
  };

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
            value={values.email}
            icon={IoMdMail}
            placeholder="johndoe@mail.com"
            error={errors.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
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
          <Link
            to="/auth/forgot-password"
            className="block text-[#93A3B6] font-bold text-right my-4.5 mr-5"
          >
            Forgot Password ?
          </Link>
          <button
            type="submit"
            className="block text-center w-full bg-[#FFDB58] text-[#130F40] text-[23px] font-bold py-2.5 rounded-md cursor-pointer transition opacity-100 hover:opacity-80"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
