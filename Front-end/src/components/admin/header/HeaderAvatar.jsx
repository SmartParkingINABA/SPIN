import PP from "../../../assets/images/pp.jpg";
import { useEffect, useRef } from "react";

export default function HeaderAvatar({ setIsOpen }) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [setIsOpen]);
  return (
    <button
      type="button"
      className="cursor-pointer"
      ref={dropdownRef}
      onClick={() => setIsOpen(true)}
    >
      <img src={PP} alt="" className="w-10 rounded-full" />
      {/* kalau tidak ada image*/}
      {/* <p className="text-white w-10 h-10 rounded-full bg-[#374151] flex items-center justify-center">
              A
              </p> */}
    </button>
  );
}
