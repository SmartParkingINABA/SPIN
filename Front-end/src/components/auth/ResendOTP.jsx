import useCountdown from "../../hooks/useCountdown";

export default function ResendOTP({ onResend }) {
  const { timeLeft, reset } = useCountdown(60);

  const handleResend = () => {
    if (timeLeft > 0) return;
    onResend();
    reset();
  };

  return (
    <p className="text-center font-semibold text-[#FEF8FD] mt-4">
      {timeLeft > 0 ? (
        <>Resend OTP ({`00:${String(timeLeft).padStart(2, "0")}`})</>
      ) : (
        <button
          type="button"
          onClick={handleResend}
          className="text-[#FEF8FD] opacity-100 hover:opacity-85 transition cursor-pointer underline"
        >
          Resend OTP
        </button>
      )}
    </p>
  );
}
