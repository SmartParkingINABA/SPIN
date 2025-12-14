import { useEffect, useRef, useState } from "react";

import { IoMdArrowDropdown } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

export default function UserDropdownHistory({ selectedOption }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selectedOption);
  const dropdownRef = useRef(null);

  // Toggle dropdown
  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  // Pilih opsi
  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

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
    <div className="flex flex-col relative" ref={dropdownRef}>
      <button
        id="selectBtn"
        className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] flex justify-between items-center rounded-sm py-2 px-4 cursor-pointer"
        onClick={handleToggle}
      >
        <span id="selectedText" className="text-[#FEF8FD] font-semibold">
          {selected}
        </span>
        <IoMdArrowDropdown
          className={`w-7 h-fit text-[#93A3B6] transform transition-transform duration-300 ${
            !isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>

      <ul
        id="dropdownList"
        className={`flex flex-col gap-y-2 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] rounded-sm py-2 px-4 mt-3 absolute top-full left-0 w-full transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {["Semua Status", "Selesai", "Sedang Parkir"].map((item) => (
          <li
            key={item}
            onClick={() => handleSelect(item)}
            className="text-[#FEF8FD] font-semibold border border-[rgba(255,236,120,0.5)] rounded-sm p-3 cursor-pointer transition duration-300 ease-in-out hover:bg-[#FFEC78] hover:text-[#1E1633] hover:border-transparent flex items-center justify-between group"
          >
            {item}
            <FaCheck className="w-5 h-fit transition duration-300 opacity-0 group-hover:opacity-100" />
          </li>
        ))}
      </ul>
    </div>
  );
}
