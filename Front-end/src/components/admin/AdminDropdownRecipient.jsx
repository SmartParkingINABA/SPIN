import { useEffect, useRef, useState } from "react";

import { IoMdArrowDropdown } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

export default function AdminDropdownRecipient({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Tutup dropdown kalauu klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col relative z-10" ref={dropdownRef}>
      <button
        id="selectBtn"
        className="bg-[#F5E79E] flex justify-between items-center rounded-sm h-10 px-3 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        <span id="selectedText" className="text-[#130F40] font-medium">
          {value}
        </span>
        <IoMdArrowDropdown
          className={`w-7 h-fit text-[#130F40] transform transition-transform duration-300 ${
            !isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>

      <ul
        id="dropdownList"
        className={`flex flex-col gap-y-2 p-1.5 border border-[rgba(255,236,120,0.5)] bg-[#130F40] rounded-sm mt-3 absolute top-full left-0 w-full transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {["Semua Pengguna", "Pengendara", "Petugas Parkir"].map((item) => (
          <li
            key={item}
            onClick={() => {
              onChange(item);
              setIsOpen(false);
            }}
            className="text-[#ddd] font-medium rounded-sm py-1.5 px-3 cursor-pointer transition duration-300 ease-in-out hover:bg-[#FFEC78] hover:text-[#1E1633] hover:border-transparent flex items-center justify-between group"
          >
            {item}
            <FaCheck
              className={`w-4 h-fit transition duration-300 ${
                value === item ? "opacity-100" : "opacity-0"
              } group-hover:opacity-100`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
