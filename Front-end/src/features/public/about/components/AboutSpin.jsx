import aboutHero from "../../../../assets/images/public/about-hero.webp";

export default function AboutSpin() {
  return (
    <section className="px-25 pt-[142px] h-screen">
      <div className="grid grid-cols-2 gap-x-20 items-center">
        <div className="">
          <h1 className="text-[#ffec78] text-5xl mb-5 font-bold">
            Tentang SPIN
          </h1>
          <p className="text-[#93A3B6] font-medium leading-6.5 w-[85%]">
            Sistem parkir berbasis web untuk efisiensi, keamanan, dan kenyamanan
            parkir di lingkungan Universitas INABA.
          </p>
          <div className="grid grid-cols-2 w-3/4 gap-x-5 mt-20">
            <button className="bg-[#FFDB58] text-[#130F40] font-semibold py-3 rounded-md border border-transparent transition duration-300 ease-in-out hover:text-[#FFDB58] hover:bg-transparent hover:border-[#FFDB58] cursor-pointer">
              Pelajari Lebih Lanjut
            </button>
            <button className="bg-transparent text-[#FFDB58] font-semibold py-3  rounded-md border border-[#FFDB58] transition duration-300 ease-in-out hover:text-[#130F40] hover:bg-[#FFDB58] hover:border-transparent cursor-pointer">
              Hubungi Kami
            </button>
          </div>
        </div>
        <div className="">
          <img src={aboutHero} alt="" className="" />
        </div>
      </div>
    </section>
  );
}
