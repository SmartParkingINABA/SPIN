import { useEffect, useState } from "react";

export default function useCountdown(seconds) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const reset = () => setTimeLeft(seconds);

  return { timeLeft, reset };
}
