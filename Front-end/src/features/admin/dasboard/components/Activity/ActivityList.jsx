import { PiChartLineDownLight, PiChartLineUpLight } from "react-icons/pi";

export default function ActivityList() {
  return (
    <div>
      <div className="flex items-start gap-x-3 py-3.5 border-b border-b-[rgba(255,236,120,0.5)]">
        <div className="bg-green-100 rounded-sm p-1.5 mt-1">
          <PiChartLineUpLight className="text-green-600 w-5 h-fit" />
        </div>
        <div className="">
          <p className="text-[#FEF8FD] font-medium">Masuk: B 1234 XYZ</p>
          <p className="text-[#93A3B6] text-[13px] font-medium">Ahmad Fauzi</p>
          <p className="text-[#93A3B6] text-[13px] font-medium">
            27/11/2024, 08.30.00
          </p>
        </div>
      </div>
      <div className="flex items-start gap-x-3 py-3.5 border-b border-b-[rgba(255,236,120,0.5)]">
        <div className="bg-green-100 rounded-sm p-1.5 mt-1">
          <PiChartLineUpLight className="text-green-600 w-5 h-fit" />
        </div>
        <div className="">
          <p className="text-[#FEF8FD] font-medium">Masuk: B 1234 XYZ</p>
          <p className="text-[#93A3B6] text-[13px] font-medium">Ahmad Fauzi</p>
          <p className="text-[#93A3B6] text-[13px] font-medium">
            27/11/2024, 08.30.00
          </p>
        </div>
      </div>
      <div className="flex items-start gap-x-3 py-3.5 border-b border-b-[rgba(255,236,120,0.5)]">
        <div className="bg-green-100 rounded-sm p-1.5 mt-1">
          <PiChartLineUpLight className="text-green-600 w-5 h-fit" />
        </div>
        <div className="">
          <p className="text-[#FEF8FD] font-medium">Masuk: B 1234 XYZ</p>
          <p className="text-[#93A3B6] text-[13px] font-medium">Ahmad Fauzi</p>
          <p className="text-[#93A3B6] text-[13px] font-medium">
            27/11/2024, 08.30.00
          </p>
        </div>
      </div>
      <div className="flex items-start justify-between py-3.5 border-b border-b-[rgba(255,236,120,0.5)]">
        <div className="flex items-start gap-x-3">
          <div className="bg-red-100 rounded-sm p-1.5 mt-1">
            <PiChartLineDownLight className="text-red-600 w-5 h-fit" />
          </div>
          <div className="">
            <p className="text-[#FEF8FD] font-medium">Keluar: B 1234 XYZ</p>
            <p className="text-[#93A3B6] text-[13px] font-medium">
              Ahmad Fauzi
            </p>
            <p className="text-[#93A3B6] text-[13px] font-medium">
              27/11/2024, 08.30.00
            </p>
          </div>
        </div>
        <p className="text-[#93A3B6] text-[14px]">3j 30m</p>
      </div>
      <div className="flex items-start justify-between py-3.5">
        <div className="flex items-start gap-x-3">
          <div className="bg-red-100 rounded-sm p-1.5 mt-1">
            <PiChartLineDownLight className="text-red-600 w-5 h-fit" />
          </div>
          <div className="">
            <p className="text-[#FEF8FD] font-medium">Keluar: B 1234 XYZ</p>
            <p className="text-[#93A3B6] text-[13px] font-medium">
              Ahmad Fauzi
            </p>
            <p className="text-[#93A3B6] text-[13px] font-medium">
              27/11/2024, 08.30.00
            </p>
          </div>
        </div>
        <p className="text-[#93A3B6] text-[14px]">3j 30m</p>
      </div>
    </div>
  );
}
