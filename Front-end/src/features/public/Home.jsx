import mainPatternRight from "../../assets/images/public/pattern-main-right.png";
import mainPatternLeft from "../../assets/images/public/pattern-main-left.png";
import landingParkingLogo from "../../assets/images/public/landing_parkir_2.png";

export default function Home() {
  return (
    <>
      <img
        src={mainPatternLeft}
        alt=""
        className="absolute bottom-[10%] left-0 w-[8%]"
      />
      <section className=" w-[82%] pt-[118px] overflow-hidden h-screen ml-auto flex items-center relative z-1">
        <div className="w-1/2">
          <h1 className="text-[#FFFFFF] text-5xl font-bold mb-3">
            Selamat Datang Di <span className="text-[#ffec78]">SPIN</span>
          </h1>
          <p className="text-[#FFFFFF] text-2xl font-semibold leading-8.5">
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
    </>
  );
}
