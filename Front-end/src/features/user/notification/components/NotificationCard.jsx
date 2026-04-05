import { ImExit, ImEnter } from "react-icons/im";
import { IoMdCheckmark } from "react-icons/io";
import { RiAdminLine } from "react-icons/ri";

export default function NotificationCard({ data, onMarkRead }) {
  const { judul, pesan, waktu, status_baca, jenis } = data;

  const getConfig = (cat) => {
    switch (cat) {
      case "Keluar":
        return {
          Icon: ImExit,
          iconColor: "text-blue-500",
          bgColor: "bg-blue-50",
        };
      case "Masuk":
        return {
          Icon: ImEnter,
          iconColor: "text-green-500",
          bgColor: "bg-green-50",
        };
      default:
        return {
          Icon: RiAdminLine,
          iconColor: "text-[#34495E]",
          bgColor: "bg-[#F39C12]",
        };
    }
  };

  const { Icon, bgColor, iconColor } = getConfig(jenis);

  return (
    <div className={`${bgColor} px-6 py-4 rounded-md flex flex-col gap-y-6`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-x-2">
          <Icon className={`h-fit w-5 mt-0.5 ${iconColor}`} />
          <div>
            <p className="text-[#130F40]">{judul}</p>
            <p className="text-[14px] text-[#93A3B6]">{waktu}</p>
          </div>
        </div>

        {status_baca === "Belum" && (
          <p className="rounded-sm px-[7px] py-0.5 bg-[#130F40] text-[14px] text-[#FEF8FD]">
            Baru
          </p>
        )}
      </div>
      {pesan && (
        <div className="flex items-center justify-between">
          <p className="text-[14px] text-[#130F40]">{pesan}</p>

          {status_baca === "Belum" && (
            <button
              className="flex items-center gap-x-1.5 cursor-pointer"
              onClick={onMarkRead}
            >
              <IoMdCheckmark className="h-fit w-4.5 text-[#808080]" />
              <p className="text-[14px] text-[#808080]">Tandai Telah Dibaca</p>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
