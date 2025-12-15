import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import PP from "../../assets/images/pp.jpg";

export default function UserHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#1E1633] flex items-center justify-between py-2.5 px-6 border-b border-b-[rgba(255,236,120,0.5)]">
      <h1 className="text-white font-bold">INABA PARKING SYSTEM</h1>
      {/* kalau ada image*/}
      <button
        type="button"
        className="cursor-pointer"
        ref={dropdownRef}
        onClick={handleToggle}
      >
        <img src={PP} alt="" className="w-10 rounded-full" />
        {/* kalau tidak ada image*/}
        {/* <p className="text-white w-10 h-10 rounded-full bg-[#374151] flex items-center justify-center">
              A
              </p> */}
      </button>
      <div
        className={`absolute right-6 top-15 rounded-md border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-2.5 p-3 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        <Link
          to="/user/user-profile"
          className="text-[#FFEC78] transition opacity-100 hover:opacity-80"
        >
          Profile
        </Link>
        <hr className="h-0.5 bg-[rgba(255,236,120,0.5)]" />
        <button className="text-[#FFEC78] transition opacity-100 hover:opacity-80">
          Logout
        </button>
      </div>
    </header>
  );
}
