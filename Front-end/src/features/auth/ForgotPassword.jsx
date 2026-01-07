import forgotPasswordIcon from "../../assets/images/public/Forgot-password-cuate.svg";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useFormValidation } from "../../hooks/useFormValidation";
import { validateEmail } from "../../utils/Validators";
import FormInput from "../../components/FormInput";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const { values, errors, handleChange, validateAll } = useFormValidation(
    {
      email: "",
    },
    {
      email: validateEmail,
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateAll()) return;

    // login success
    navigate("/auth/verify");
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
          <FormInput
            label="E-mail Address"
            htmlFor="email"
            type="email"
            value={values.email}
            icon={IoMdMail}
            placeholder="johndoe@mail.com"
            error={errors.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />

          <button
            type="submit"
            className="block text-center w-full bg-[#FFDB58] text-[#130F40] text-[23px] font-bold py-2.5 mt-6 rounded-md transition opacity-100 hover:opacity-80"
          >
            Get OTP
          </button>
        </form>
      </div>
    </div>
  );
}
