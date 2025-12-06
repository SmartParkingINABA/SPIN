import PP from "../../assets/images/pp.jpg";

export default function OfficerHeader() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#1E1633] flex items-center justify-between py-2.5 px-6 border-b border-b-[rgba(255,236,120,0.5)]">
      <h1 className="text-white font-bold">INABA PARKING SYSTEM</h1>
      {/* kalau ada image*/}
      <img src={PP} alt="" className="w-10 rounded-full" />
      {/* kalau tidak ada image*/}
      {/* <p className="text-white w-10 h-10 rounded-full bg-[#374151] flex items-center justify-center">
              A
            </p> */}
    </header>
  );
}
