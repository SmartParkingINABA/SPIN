import { LuUserCog } from "react-icons/lu";

export default function OfficerCard({ officer }) {
  return (
    <div className="border border-[rgba(255,236,120,0.5)] px-5 py-2.5 rounded-sm bg-[#130F40] flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <div className="bg-green-100 rounded-sm p-2">
          <LuUserCog className="text-green-600 w-6 h-fit" />
        </div>
        <div className="">
          <p className="text-[#FEF8FD] font-medium">{officer.name}</p>
          <p className="text-[#93A3B6] text-[14px] font-medium">
            Menangani {officer.job} kendaraan masuk/keluar
          </p>
        </div>
      </div>
      <p className="text-[#FEF8FD] bg-green-500 rounded-sm px-2.5 py-0.5 w-fit text-[14px]">
        {officer.transaction} Transaksi
      </p>
    </div>
  );
}
