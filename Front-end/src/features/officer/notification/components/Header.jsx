import { BiCheckDouble } from "react-icons/bi";

export default function Header() {
  return (
    <>
      <h1 className="text-[#FEF8FD] text-2xl font-bold flex items-center gap-x-2">
        Notifikasi Sistem
        <span className="text-[#FEF8FD] text-[12px] bg-red-500 rounded-sm px-1 py-0.5">
          2 Baru
        </span>
      </h1>
      <div className="mt-1 flex items-center justify-between">
        <p className="text-[#93A3B6] font-medium">
          Peringatan dan pesan penting dari sistem
        </p>
        <button className="flex items-center gap-x-2 border border-transparent bg-[#93A3B6] py-1 px-1.5 rounded-sm cursor-pointer transition opacity-100 hover:opacity-80">
          <BiCheckDouble className="h-fit w-5 text-[#130F40]" />
          <p className="text-[#130F40] text-[14px]">
            Tandai Semua Telah Dibaca
          </p>
        </button>
      </div>
    </>
  );
}
