import { GoDotFill } from "react-icons/go";

export default function ActivityCard({ data, isLast }) {
  const { plate, action, officer, time, color } = data;

  return (
    <div
      className={`flex items-center justify-between py-3.5 ${
        !isLast ? "border-b border-[rgba(147,163,182,0.5)]" : ""
      }`}
    >
      <div className="flex items-center gap-x-3">
        <GoDotFill className={`${color} w-4 h-fit`} />
        <div>
          <p className="text-[#FEF8FD] font-medium">
            {plate} - {action}
          </p>
          <p className="text-[#93A3B6] text-[14px]">{officer}</p>
        </div>
      </div>
      <p className="text-[#93A3B6]">{time}</p>
    </div>
  );
}
