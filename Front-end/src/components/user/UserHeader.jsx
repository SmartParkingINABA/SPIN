export default function UserHeader() {
  return (
    <header className="bg-[#1E1633] py-3 px-14 border border-[rgba(255,236,120,0.5)] fixed top-0 right-0 w-[83%]">
      <div className="flex items-center gap-x-3">
        {/* kalau ada image*/}
        {/* <img src={PP} alt="" className="w-10 rounded-full" /> */}
        {/* kalau tidak ada image*/}
        <p className="w-10 h-10 rounded-full bg-[#FFEC78] text-[#1E1633] flex items-center justify-center">
          JD
        </p>
        <div className="">
          <p className="text-[#93A3B6] font-semibold">
            Selamat datang di dashboard pengendara,
          </p>
          <p className="text-[#FEF8FD] text-[14px] font-semibold">John Doe</p>
        </div>
      </div>
    </header>
  );
}
