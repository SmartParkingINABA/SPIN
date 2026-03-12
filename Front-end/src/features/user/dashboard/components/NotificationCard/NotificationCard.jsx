import { GoDotFill } from "react-icons/go";

export default function NotificationCard({ notification }) {
  const isMasuk = notification.jenis === "Masuk";

  return (
    <div
      className={`mt-3.5 px-6 py-4 rounded-md ${
        isMasuk ? "bg-[#4B4141]" : "bg-[#130F40]"
      }`}
    >
      <div className="flex gap-x-2">
        <GoDotFill
          className={`${
            isMasuk ? "text-[#FFEC78]" : "text-[#FEF8FD]"
          } w-4.5 h-fit`}
        />
        <div className="">
          <p className="text-[#FEF8FD] text-[14px] font-medium">
            {notification.pesan}
          </p>
          <p className="text-[#93A3B6] text-[12px] font-medium">
            {notification.waktu_dibuat}
          </p>
        </div>
      </div>
    </div>
  );
}
