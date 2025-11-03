import { useEffect, useRef, useState } from "react";
import dropdownIcon from "../assets/images/top-arrow.png";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select option");
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
    <div className="flex flex-col" ref={dropdownRef}>
      <button
        id="selectBtn"
        className="bg-[#ffec78] flex justify-between items-center rounded-xl py-3 px-5 my-2 cursor-pointer group"
        onClick={handleToggle}
      >
        <span
          id="selectedText"
          className="text-[#1e1633] font-semibold transition duration-300 ease-in-out group-hover:text-[rgba(30,22,51,0.7)]"
        >
          {selected}
        </span>
        <img
          src={dropdownIcon}
          alt=""
          id="arrowIcon"
          className={`w-6 transform transition-transform duration-300 ${
            !isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <ul
          id="dropdownList"
          className={`bg-[#ffec78] rounded-xl py-3 px-5 mt-2`}
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
