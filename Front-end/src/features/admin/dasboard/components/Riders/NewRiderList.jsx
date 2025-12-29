import { FiUsers } from "react-icons/fi";

export default function NewRiderList() {
  return (
    <div>
      <div className="flex items-start justify-between py-3.5 border-b border-b-[rgba(255,236,120,0.5)]">
        <div className="flex items-start gap-x-3">
          <div className="bg-blue-100 rounded-sm p-1.5 mt-1">
            <FiUsers className="text-blue-600 w-5 h-fit" />
          </div>
          <div className="">
            <p className="text-[#FEF8FD] font-medium">Ahmad Fauzi</p>
            <p className="text-[#93A3B6] text-[13px] font-medium">
              ahmad.fauzi@email.com
            </p>
            <p className="text-[#93A3B6] text-[13px] font-medium">
              081234567890
            </p>
          </div>
        </div>
        <p className="text-[#93A3B6] text-[14px]">15/1/2024</p>
      </div>
      <div className="flex items-start justify-between py-3.5 border-b border-b-[rgba(255,236,120,0.5)]">
        <div className="flex items-start gap-x-3">
          <div className="bg-blue-100 rounded-sm p-1.5 mt-1">
            <FiUsers className="text-blue-600 w-5 h-fit" />
          </div>
          <div className="">
            <p className="text-[#FEF8FD] font-medium">Ahmad Fauzi</p>
            <p className="text-[#93A3B6] text-[13px] font-medium">
              ahmad.fauzi@email.com
            </p>
            <p className="text-[#93A3B6] text-[13px] font-medium">
              081234567890
            </p>
          </div>
        </div>
        <p className="text-[#93A3B6] text-[14px]">15/1/2024</p>
      </div>
      <div className="flex items-start justify-between py-3.5">
        <div className="flex items-start gap-x-3">
          <div className="bg-blue-100 rounded-sm p-1.5 mt-1">
            <FiUsers className="text-blue-600 w-5 h-fit" />
          </div>
          <div className="">
            <p className="text-[#FEF8FD] font-medium">Ahmad Fauzi</p>
            <p className="text-[#93A3B6] text-[13px] font-medium">
              ahmad.fauzi@email.com
            </p>
            <p className="text-[#93A3B6] text-[13px] font-medium">
              081234567890
            </p>
          </div>
        </div>
        <p className="text-[#93A3B6] text-[14px]">15/1/2024</p>
      </div>
    </div>
  );
}
