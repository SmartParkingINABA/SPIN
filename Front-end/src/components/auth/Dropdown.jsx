import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Dropdown({ value, onChange, clearError }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const selectedValue = value || "Select option";

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
    <div className="flex flex-col" ref={dropdownRef}>
      <button
        id="selectBtn"
        className="bg-[#F5E79E] flex justify-between items-center rounded-md py-3 px-5 mt-2 cursor-pointer"
        onClick={handleToggle}
      >
        <span
          id="selectedText"
          className="text-[#1e1633] font-semibold transition duration-300 ease-in-out"
        >
          {selectedValue}
        </span>
        <IoMdArrowDropdown
          className={`w-6 h-fit transform transition-transform duration-300 ${
            !isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>

      {isOpen && (
        <ul
          id="dropdownList"
          className={`bg-[#F5E79E] rounded-md py-3 px-5 mt-4`}
        >
          {["Admin", "Petugas", "Pengendara"].map((item) => (
            <li
              key={item}
              onClick={() => handleSelect(item)}
              className="text-[#1E1633] font-semibold w-fit cursor-pointer transition duration-300 ease-in-out hover:text-[rgba(30,22,51,0.7)]"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
