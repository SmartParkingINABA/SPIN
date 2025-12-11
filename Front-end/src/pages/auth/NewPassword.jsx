import resetPasswordIcon from "../../assets/images/public/My-password-pana.svg";

import { FaLock } from "react-icons/fa6";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

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
    setPasswordError("");
    setConfirmPasswordError("");

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
          <label
            htmlFor="password"
            className="text-[#FEF8FD] font-bold text-[15px] ml-2.5"
          >
            Password
          </label>
          <div className="flex items-center gap-x-4 bg-[#F5E79E] px-5 py-3 mt-2 rounded-md">
            <FaLock className="w-7 h-fit" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              minLength={6}
              placeholder="• • • • • • • •"
              className="w-full outline-0 bg-transparent"
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
            Confirm password
          </label>
          <div className="flex items-center gap-x-4 bg-[#F5E79E] px-5 py-3 mt-2 rounded-md">
            <FaLock className="w-7 h-fit" />
            <input
              id="password"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              placeholder="• • • • • • • •"
              className="w-full outline-0"
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
          <Link
            type="submit"
            className="block text-center w-full bg-[#FFDB58] text-[#130F40] text-[23px] font-bold py-2.5 mt-8 rounded-md transition opacity-100 hover:opacity-80"
          >
            Update Password
          </Link>
        </form>
      </div>
    </div>
  );
}
