import { FaArrowRightLong } from "react-icons/fa6";
import aboutHeroCar from "../../../../assets/images/public/about-hero-car.svg";

export default function WhatSpin() {
  return (
    <section className="px-25 pt-[127px] h-screen bg-[#1E1633]">
      <div className="grid grid-cols-2 gap-x-20 items-center">
        <div className="">
          <img src={aboutHeroCar} alt="" className="" />
        </div>
        <div className="">
          <h1 className="text-[#ffec78] text-5xl mb-5 font-bold">
            Apa itu SPIN?
          </h1>
          <p className="text-[#93A3B6] font-medium leading-6.5 w-[85%]">
            SPIN adalah sistem manajemen parkir berbasis web yang memudahkan
            monitoring kendaraan masuk & keluar, registrasi kendaraan, serta
            laporan/riwayat parkir kendaraan.
          </p>
          <div className="flex gap-x-5 mt-20">
            <button className="bg-[#FFDB58] text-[#130F40] font-semibold py-3 px-4 rounded-md border border-transparent transition duration-300 ease-in-out hover:text-[#FFDB58] hover:bg-transparent hover:border-[#FFDB58] cursor-pointer flex items-center gap-x-3">
              Pelajari fitur <FaArrowRightLong className="h-fit" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
