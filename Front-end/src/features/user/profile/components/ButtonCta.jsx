import { LuArrowRightFromLine } from "react-icons/lu";
import { useHandleLogout } from "../../../../hooks/useHandleLogout";

export default function ButtonCta() {
  const handleLogout = useHandleLogout();

  return (
    <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] p-5 sm:p-6 rounded-md w-full sm:w-1/3">
      <p className="text-[#FEF8FD] font-medium">Aksi</p>
      <div className="mt-3 sm:mt-3.5">
        <button
          className="w-full flex items-center gap-x-3 bg-red-500 rounded-sm py-1.5 px-3 cursor-pointer opacity-100 hover:opacity-80 transition"
          onClick={handleLogout}
        >
          <LuArrowRightFromLine className="w-5 h-fit text-[#FEF8FD]" />
          <p className="text-[#FEF8FD] text-[14px] sm:text-[16px]">Logout</p>
        </button>
      </div>
    </div>
  );
}
