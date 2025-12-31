import { IoQrCode } from "react-icons/io5";

export default function ScanQR() {
  return (
    <div className="mt-12 border border-[#FFEC78] bg-[#FEF8FD] w-2/5 h-[412px] mx-auto rounded-xl flex items-center justify-center">
      <div className="">
        <IoQrCode className="w-45 mx-auto h-fit mb-8" />
        <p className="text-[#1E1633] text-center font-semibold">D 1234 XYZ</p>
        <p className="text-[#93A3B6] text-center text-[12px] font-medium -mt-1">
          Toyota Avanza
        </p>
      </div>
    </div>
  );
}
