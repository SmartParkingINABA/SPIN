import { IoMdCheckmark } from "react-icons/io";

export default function NotificationCard({
  title,
  time,
  message,
  icon,
  iconColor,
  bgColor,
  isNew,
  showAction,
}) {
  const Icon = icon;

  return (
    <div className={`${bgColor} px-6 py-4 rounded-md flex flex-col gap-y-6`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-x-2">
          <Icon className={`h-fit w-5 mt-0.5 ${iconColor}`} />
          <div className="">
            <p className="text-[#130F40]">{title}</p>
            <p className="text-[14px] text-[#93A3B6]">{time}</p>
          </div>
        </div>
        {isNew && (
          <p className="rounded-sm px-[7px] py-0.5 bg-[#130F40] text-[14px] text-[#FEF8FD]">
            Baru
          </p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[14px] text-[#130F40]">{message}</p>
        {showAction && (
          <button className="flex items-center gap-x-1.5 cursor-pointer">
            <IoMdCheckmark className="h-fit w-4.5 text-[#808080]" />
            <p className="text-[14px] text-[#808080]">Tandai Telah Dibaca</p>
          </button>
        )}
      </div>
    </div>
  );
}
