import { useState } from "react";
import forgotPasswordIcon from "../../assets/images/public/Forgot-password-cuate.svg";

import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function validateEmail(value) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // reset error
    setEmailError("");

    // validasi email
    if (!email) {
      setEmailError("Email tidak boleh kosong");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Format email tidak valid");
      return;
    }
  };

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
          <label
            htmlFor="email"
            className="text-[#FEF8FD] font-bold text-[15px] ml-2.5"
          >
            E-mail Address
          </label>
          <div className="flex items-center gap-x-4 bg-[#F5E79E] py-3 px-5 mt-2 rounded-md">
            <IoMdMail className="w-7 h-fit" />
            <input
              id="email"
              type="email"
              value={email}
              placeholder="johndoe@gmail.com"
              className="w-full outline-0 bg-transparent"
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

          <Link
            to="/auth/verify"
            type="submit"
            className="block text-center w-full bg-[#FFDB58] text-[#130F40] text-[23px] font-bold py-2.5 mt-6 rounded-md transition opacity-100 hover:opacity-80"
          >
            Get OTP
          </Link>
        </form>
      </div>
    </div>
  );
}
