export default function NotificationTabs({ createMode, setCreateMode }) {
  return (
    <div className="mt-6 flex gap-x-2 bg-[#93A3B6] p-1 rounded-md w-fit">
      <button
        className={`${
          createMode ? "bg-[#FFDB58]" : "bg-transparent"
        } text-[#130F40] font-medium rounded-sm px-2 py-0.5 cursor-pointer`}
        onClick={() => setCreateMode(true)}
      >
        Kirim Notifikasi
      </button>
      <button
        className={`${
          createMode ? "bg-transparent" : "bg-[#FFDB58]"
        } text-[#130F40] font-medium rounded-sm px-2 py-0.5 cursor-pointer`}
        onClick={() => setCreateMode(false)}
      >
        Riwayat Notifikasi
      </button>
    </div>
  );
}
