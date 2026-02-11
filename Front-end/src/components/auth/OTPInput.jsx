import { useEffect, useRef } from "react";

export default function OTPInput({ length = 4, value, onChange, error }) {
  const inputsRef = useRef([]);

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const handleChange = (val, index) => {
    if (!/^\d?$/.test(val)) return;

    const next = [...value];
    next[index] = val;
    onChange(next);

    if (val && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length)
      .split("");

    if (!pasted.length) return;

    const next = [...Array(length)].map((_, i) => pasted[i] || "");
    onChange(next);

    inputsRef.current[pasted.length - 1]?.focus();
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-x-10" onPaste={handlePaste}>
        {value.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="bg-[#F5E79E] text-2xl text-center font-semibold rounded-md py-3 px-5 outline-0"
          />
        ))}
      </div>
      <p className="mt-1.5 ml-2.5 text-red-500 font-bold text-[10px]">
        {error}
      </p>
    </>
  );
}
