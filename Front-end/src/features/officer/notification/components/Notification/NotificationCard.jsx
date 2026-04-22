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
  onRead,
}) {
  const Icon = icon;

  return (
    <div
      className={`${bgColor} p-5 sm:p-6 rounded-md flex flex-col gap-4 sm:gap-6`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-x-2">
          <Icon className={`h-fit w-4 sm:w-5 mt-0.5 ${iconColor}`} />
          <div>
            <p className="text-[#130F40] text-[14px] sm:text-[16px]">{title}</p>
            <p className="text-[12px] sm:text-[14px] text-[#93A3B6]">{time}</p>
          </div>
        </div>
        {isNew && (
          <p className="rounded-sm px-1.5 sm:px-[7px] py-px sm:py-0.5 bg-[#130F40] text-[12px] sm:text-[14px] text-[#FEF8FD]">
            Baru
          </p>
        )}
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12px] sm:text-[14px] text-[#130F40]">{message}</p>
        {showAction && (
          <button
            className="flex items-center gap-x-1.5 cursor-pointer border-b w-fit border-b-[#808080] pb-0.5 mt-2 sm:mt-0"
            onClick={onRead}
          >
            <IoMdCheckmark className="h-fit w-3.5 sm:w-4.5 text-[#808080]" />
            <p className="text-[12px] sm:text-[14px] text-[#808080]">
              Tandai Telah Dibaca
            </p>
          </button>
        )}
      </div>
    </div>
  );
}
