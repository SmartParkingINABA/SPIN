import { useState } from "react";
import Dropdown from "../../components/auth/Dropdown.jsx";

import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [dropdownError, setDropdownError] = useState("");

  function validateEmail(value) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(value);
  }

  function validatePassword(value) {
    if (!/\d/.test(value)) {
      return "Password harus mengandung angka";
    }

    if (value.length < 6) {
      return "Panjang password minimal 6 karakter";
    }

    return "";
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // reset error
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    // validasi email
    if (!email) {
      setEmailError("Email tidak boleh kosong");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Format email tidak valid");
      return;
    }

    // validasi password
    if (!password) {
      setPasswordError("Password tidak boleh kosong");
      return;
    }

    const pwdErrMsg = validatePassword(password);
    if (pwdErrMsg) {
      setPasswordError(pwdErrMsg);
      return;
    }

    // validasi re-enter password
    if (!confirmPassword) {
      setConfirmPasswordError("Mohon ulangi password");
      return;
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError("Passord tidak sama");
      return;
    }

    // validasi dropdown
    if (!userType) {
      setDropdownError("Pilih salah satu tipe user");
    }
  };

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
          <label
            htmlFor="email"
            className="text-[#FEF8FD] font-bold text-[15px] ml-2.5"
          >
            Enter your email
          </label>
          <div className="flex items-center gap-x-4 bg-[#ffec78] py-3 px-5 mt-2 rounded-xl">
            <IoMdMail className="w-7 h-fit" />
            <input
              id="email"
              type="email"
              className="w-full outline-0 bg-transparent"
              value={email}
              placeholder="johndoe@gmail.com"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
            />
          </div>
          {emailError && (
            <p className="mt-1.5 ml-2.5 text-red-500 font-bold text-[10px]">
              {emailError}
            </p>
          )}
          <label
            htmlFor="password"
            className="text-[#FEF8FD] font-bold text-[15px] ml-2.5 block mt-3"
          >
            Enter your password
          </label>
          <div className="flex items-center gap-x-4 bg-[#ffec78] px-5 py-3 mt-2 rounded-xl">
            <FaLock className="w-7 h-fit" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="w-full outline-0 bg-transparent"
              placeholder="• • • • • • • •"
              value={password}
              minLength={6}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
            />
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
          </div>
          {passwordError && (
            <p className="mt-1.5 ml-2.5 text-red-500 font-semibold text-[10px]">
              {passwordError}
            </p>
          )}
          <label
            htmlFor="confirm-password"
            className="text-[#FEF8FD] font-bold text-[15px] ml-2.5 block mt-3"
          >
            Re-Enter your password
          </label>
          <div className="flex items-center gap-x-4 bg-[#ffec78] px-5 py-3 mt-2 rounded-xl">
            <FaLock className="w-7 h-fit" />
            <input
              id="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              className="w-full outline-0 bg-transparent"
              placeholder="• • • • • • • •"
              value={confirmPassword}
              minLength={6}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setConfirmPasswordError("");
              }}
            />
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
          </div>
          {confirmPasswordError && (
            <p className="mt-1.5 ml-2.5 text-red-500 font-semibold text-[10px]">
              {confirmPasswordError}
            </p>
          )}

          <label
            htmlFor=""
            className="text-[#FEF8FD] font-bold text-[15px] ml-2.5 block mt-3"
          >
            Select user type
          </label>
          <Dropdown
            value={userType}
            onChange={(val) => {
              setUserType(val);
              setDropdownError("");
            }}
            clearError={() => setDropdownError("")}
          />
          {dropdownError && (
            <p className="ml-2.5 mt-1.5 text-red-500 font-semibold text-[10px]">
              {dropdownError}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-transparent border border-[#ffec78] text-[#ffec78] text-[23px] font-bold py-2.5 mt-8 rounded-xl cursor-pointer transition duration-300 ease-in-out hover:border-transparent hover:bg-[#ffec78] hover:text-[#1E1633]"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
