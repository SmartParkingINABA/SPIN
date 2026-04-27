import { BiCheckDouble } from "react-icons/bi";

export default function Header({ unreadCount, onReadAll }) {
  return (
    <>
      <h1 className="text-[#FEF8FD] text-[18px] sm:text-2xl font-bold flex items-center gap-x-2">
        Notifikasi Sistem
        {unreadCount > 0 && (
          <span className="text-[#FEF8FD] text-[12px] bg-red-500 rounded-sm px-1 py-0.5">
            {unreadCount} Baru
          </span>
        )}
      </h1>
      <div className="sm:mt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[#93A3B6] text-[14px] sm:text-[16px] font-medium mb-1 sm:mb-0">
          Peringatan dan pesan penting dari sistem
        </p>
        {unreadCount > 0 && (
          <button
            className="flex items-center gap-x-2 border border-transparent bg-[#93A3B6] py-1 px-1.5 rounded-sm cursor-pointer hover:opacity-80 mt-1.5 sm:mt-0"
            onClick={onReadAll}
          >
            <BiCheckDouble className="h-fit w-4 sm:w-5 text-[#130F40]" />
            <p className="text-[#130F40] text-[14px]">
              Tandai Semua Telah Dibaca
            </p>
          </button>
        )}
      </div>
    </>
  );
}
