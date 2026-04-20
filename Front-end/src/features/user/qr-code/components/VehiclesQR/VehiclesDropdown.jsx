import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

export default function VehiclesDropdown({
  options = [],
  selectedId,
  onSelect,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selected = options.find((v) => v.id === selectedId);
  const dropdownRef = useRef(null);

  // Toggle dropdown
  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  // Pilih opsi
  const handleSelect = (value) => {
    onSelect(value);
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
        className="bg-[#F5E79E] flex justify-between items-center rounded-sm h-10 px-3 cursor-pointer"
        onClick={handleToggle}
      >
        <span id="selectedText" className="text-[#130F40] font-medium">
          {selected ? selected.no_plat : "Pilih Kendaraan"}
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
        {options.map((item) => (
          <li
            key={item.id}
            onClick={() => handleSelect(item.id)}
            className="text-[#ddd] text-[14px] sm:text[16px] font-medium rounded-sm py-1.5 px-3 cursor-pointer transition duration-300 ease-in-out hover:bg-[#FFEC78] hover:text-[#1E1633] hover:border-transparent flex items-center justify-between group"
          >
            {item.no_plat} - {item.merk}
            <FaCheck
              className={`w-3.5 sm:w-4 h-fit transition duration-300 group-hover:opacity-100 ${
                selectedId === item.id ? "opacity-100" : "opacity-0"
              }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
