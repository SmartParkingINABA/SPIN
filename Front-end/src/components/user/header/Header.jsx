import { useState } from "react";
import Modal from "./Modal";
import Avatar from "./Avatar";
import { RxHamburgerMenu } from "react-icons/rx";

export default function UserHeader({ setSidebarOpen, hamburgerRef }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#1E1633] flex items-center justify-between py-2.5 px-6 border-b border-b-[rgba(255,236,120,0.5)]">
      <h1 className="text-white font-bold hidden sm:block">
        INABA PARKING SYSTEM
      </h1>
      <button
        ref={hamburgerRef}
        onClick={() => setSidebarOpen((prev) => !prev)}
        className="block group sm:hidden"
      >
        <RxHamburgerMenu className="text-[#FEF8FD] text-2xl  cursor-pointer group-hover:opacity-80" />
      </button>
      <Avatar setIsOpen={setIsOpen} />
      <Modal isOpen={isOpen} />
    </header>
  );
}
