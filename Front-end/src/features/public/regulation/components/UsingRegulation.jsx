import regulationHero from "../../../../assets/images/public/regulation.svg";

export default function UsingRegulation() {
  return (
    <section className="px-25 pt-[142px] h-screen">
      <h1 className="text-[#FEF8FD] text-center font-bold text-3xl flex flex-col gap-y-3">
        Peraturan Penggunaan
        <span className="text-[#ffec78] uppercase">Spin</span>
      </h1>
      <div className="grid grid-cols-2 items-center mt-4">
        <div className="">
          <img src={regulationHero} alt="" className=" w-[75%] h-fit mx-auto" />
        </div>
        <div className="">
          <p className="w-[75%] text-[#93A3B6] leading-6.5 font-semibold">
            Selamat datang di halaman peraturan penggunaan{" "}
            <span className="text-[#FEF8FD]">SPIN (Smart Parking INABA)</span>.
            pengguna di wajibkan membaca & mematuhi ketentuan berikut demi
            terciptanya sistem parkir yang{" "}
            <span className="text-[#FEF8FD]">tertib</span>,{" "}
            <span className="text-[#FEF8FD]">aman</span>, dan{" "}
            <span className="text-[#FEF8FD]">nyaman</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
