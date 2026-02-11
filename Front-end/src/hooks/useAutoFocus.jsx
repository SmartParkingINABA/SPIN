import { useEffect, useRef } from "react";

export default function useAutoFocus() {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);
  return ref;
}
