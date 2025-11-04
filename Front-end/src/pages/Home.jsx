import mainPatternLeft from "../assets/images/pattern-main-left.png";
import mainPatternRight from "../assets/images/pattern-main-right.png";
import inabaLogo from "../assets/images/logo_inaba.png";
import landingParkingLogo from "../assets/images/landing_parkir_2.png";

export default function Home() {
  return (
    <main className="relative w-full font-ubuntu h-screen bg-[#130F40]">
      <img
        src={mainPatternLeft}
        alt=""
        className="absolute bottom-[10%] left-0 w-[8%]"
      />
      <header className="flex items-center justify-between px-25">
        <div className="flex items-center gap-x-3 w-fit">
          <img src={inabaLogo} alt="" className="w-30 h-30" />
          <div className="text-center -ml-3">
            <p className="text-white font-bold text-3xl">Smart Parking</p>
            <p className="text-white font-semibold text-[20px]">
              Universitas INABA
            </p>
          </div>
        </div>
        <nav className="">
          <ul className="flex gap-x-20">
            <li className="">
              <a
                href="#"
                className="text-white font-semibold text-[20px] transition duration-300 ease-in-out border-b-2 border-b-transparent hover:border-b-white"
              >
                Beranda
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="text-white font-semibold text-[20px] transition duration-300 ease-in-out border-b-2 border-b-transparent hover:border-b-white"
              >
                Peraturan
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="text-white font-semibold text-[20px] transition duration-300 ease-in-out border-b-2 border-b-transparent hover:border-b-white"
              >
                About
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="text-white font-semibold text-[20px] transition duration-300 ease-in-out border-b-2 border-b-transparent hover:border-b-white"
              >
                Masuk
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section className=" w-[82%] ml-auto mt-12 flex items-center relative z-1">
        <div className="w-1/2">
          <h1 className="text-white text-5xl font-bold mb-3">
            Selamat datang Di <span className="text-[#ffec78]">SPIN</span>
          </h1>
          <p className="text-white text-2xl font-semibold leading-8.5">
            Solusi parkir modern yang cerdas, cepat, dan aman untuk seluruh
            civitas akademika Universitas INABA
          </p>
        </div>
        <div className=" w-1/2 ">
          <img src={landingParkingLogo} alt="" className="w-xl ml-auto " />
        </div>
      </section>
      <img
        src={mainPatternRight}
        alt=""
        className="absolute right-0 bottom-0 w-[20%]"
      />
    </main>
  );
}
