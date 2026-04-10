import { BiCheckDouble } from "react-icons/bi";
import Pagination from "../../../../components/ui/Pagination";

export default function Header({ unreadCount, onReadAll }) {
  return (
    <>
      <h1 className="text-[#FEF8FD] text-2xl font-bold flex items-center gap-x-2">
        Notifikasi Sistem
        {unreadCount > 0 && (
          <span className="text-[#FEF8FD] text-[12px] bg-red-500 rounded-sm px-1 py-0.5">
            {unreadCount} Baru
          </span>
        )}
      </h1>
      <div className="mt-1 flex items-center justify-between">
        <p className="text-[#93A3B6] font-medium">
          Peringatan dan pesan penting dari sistem
        </p>
        {unreadCount > 0 && (
          <button
            className="flex items-center gap-x-2 border border-transparent bg-[#93A3B6] py-1 px-1.5 rounded-sm cursor-pointer hover:opacity-80"
            onClick={onReadAll}
          >
            <BiCheckDouble className="h-fit w-5 text-[#130F40]" />
            <p className="text-[#130F40] text-[14px]">
              Tandai Semua Telah Dibaca
            </p>
          </button>
        )}
      </div>
    </>
  );
}
