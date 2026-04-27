import { useState } from "react";
import Modal from "./Modal";
import Avatar from "./Avatar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#1E1633] flex items-center justify-between py-2.5 px-6 border-b border-b-[rgba(255,236,120,0.5)]">
      <h1 className="text-white font-bold">INABA PARKING SYSTEM</h1>
      {/* kalau ada image*/}
      <Avatar setIsOpen={setIsOpen} />

      {/* posisi absolute jadi aman dari flex */}
      <Modal isOpen={isOpen} />
    </header>
  );
}
