import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Dropdown({ value, onChange, clearError }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const selectedValue = value || "Pilih opsi";

  // Toggle dropdown
  const handleToggle = (e) => {
    e.preventDefault();
    clearError();
    setIsOpen((prev) => !prev);
  };

  // Pilih opsi
  const handleSelect = (value) => {
    onChange(value);
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
    <div className="flex flex-col relative z-10" ref={dropdownRef}>
      <button
        id="selectBtn"
        className="bg-[#F5E79E] flex justify-between items-center rounded-md py-3 px-5 mt-2 cursor-pointer"
        onClick={handleToggle}
      >
        <span id="selectedText" className="text-[#1e1633] font-medium">
          {selectedValue}
        </span>
        <IoMdArrowDropdown
          className={`w-7 h-fit transform transition-transform duration-300 ${
            !isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>

      <ul
        id="dropdownList"
        className={`bg-[#F5E79E] rounded-md py-3 px-5 mt-4 flex flex-col absolute top-full left-0 w-full transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {["Admin", "Petugas", "Pengendara"].map((item) => (
          <li
            key={item}
            onClick={() => handleSelect(item)}
            className="py-1 text-[#1E1633] font-medium cursor-pointer transition duration-300 ease-in-out hover:text-[rgba(30,22,51,0.7)] flex items-center justify-between group"
          >
            {item}
            <FaCheck
              className={`w-4 h-fit transition duration-300 opacity-0 group-hover:opacity-100 ${
                selectedValue === item ? "opacity-100" : "opacity-0"
              }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
