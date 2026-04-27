import React from "react";

export default function StatsCard({
  title,
  value,
  subtitle,
  icon,
  iconColor,
  trend,
}) {
  const Icon = icon;
  return (
    <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-8 px-6 py-4 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text-[#FEF8FD] font-medium">{title}</p>
        <Icon className={`w-5 ${iconColor}`} />
      </div>
      <div className="flex flex-col gap-y-1">
        <div className="flex gap-x-2.5">
          <p className="text-[#FEF8FD]">{value}</p>
          {trend}
        </div>
        <p className="text-[#93A3B6] text-[15px]">{subtitle}</p>
      </div>
    </div>
  );
}
