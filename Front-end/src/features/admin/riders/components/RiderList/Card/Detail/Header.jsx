import { IoClose } from "react-icons/io5";

export default function Header({ onClose }) {
  return (
    <div className="flex items-center justify-between mb-6 pr-5">
      <h1 className="text-[#FEF8FD] text-[18px] font-semibold">
        Detail Pengendara
      </h1>
      <IoClose
        className="w-6 h-fit text-[#93A3B6] cursor-pointer"
        onClick={onClose}
      />
    </div>
  );
}
