import QRSmaillIcon from "../../assets/images/officer/qrIcon.svg?react";

export default function OfficerHeader() {
  return (
    <header className="bg-[#1E1633] py-3 px-14 border border-[rgba(255,236,120,0.5)] border-r-0 border-l-0 fixed top-0 right-0 w-[83%] flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        {/* kalau ada image*/}
        {/* <img src={PP} alt="" className="w-10 rounded-full" /> */}
        {/* kalau tidak ada image*/}
        <p className="w-10 h-10 rounded-full bg-[#FFEC78] text-[#1E1633] flex items-center justify-center">
          JD
        </p>
        <div className="">
          <p className="text-[#93A3B6] font-semibold">
            Selamat datang di dashboard petugas,
          </p>
          <p className="text-[#FEF8FD] text-[14px] font-semibold">
            Ahmad Ridwan
          </p>
        </div>
      </div>
      <div className="bg-[#FFEC78] flex items-center gap-x-2 rounded-md px-3 py-2">
        <QRSmaillIcon className="h-fit w-4" />
        <p className="text-[#1E1633] font-medium">Mulai Scan</p>
      </div>
    </header>
  );
}
