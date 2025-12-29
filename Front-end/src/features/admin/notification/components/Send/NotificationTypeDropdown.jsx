import { useEffect, useRef, useState } from "react";

import { IoMdArrowDropdown } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoWarningOutline } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";

export default function NotificationTypeDropdown({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const items = [
    {
      label: "Informasi",
      icon: RiErrorWarningLine,
      text: "text-blue-600",
    },
    {
      label: "Peringatan",
      icon: IoWarningOutline,
      text: "text-red-600",
    },
    {
      label: "Pesan",
      icon: LuMessageSquare,
      text: "text-purple-600",
    },
  ];

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
        <span
          id="selectedText"
          className="text-[#130F40] font-medium flex items-center gap-x-2"
        >
          <value.icon className={`h-fit w-4.5 ${value.text}`} />
          {value.label}
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
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <li
              key={item.label}
              onClick={() => {
                onChange(item);
                setIsOpen(false);
              }}
              className="text-[#ddd] font-medium rounded-sm py-1.5 px-3 cursor-pointer transition duration-300 ease-in-out hover:bg-[#FFEC78] hover:text-[#1E1633] hover:border-transparent flex items-center justify-between group"
            >
              <span className="flex items-center gap-x-2">
                <Icon className={`h-fit w-4.5 ${item.text}`} />
                {item.label}
              </span>
              <FaCheck
                className={`w-4 h-fit transition duration-300 ${
                  value?.label === item.label ? "opacity-100" : "opacity-0"
                } group-hover:opacity-100`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
