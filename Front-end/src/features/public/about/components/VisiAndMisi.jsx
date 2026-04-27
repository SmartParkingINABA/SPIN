import { FaRegEye } from "react-icons/fa6";
import { GoDotFill, GoGoal } from "react-icons/go";

export default function VisiAndMisi() {
  return (
    <section className="px-25 pt-20 pb-16 bg-[#1E1633]">
      <h1 className="text-[#ffec78] text-5xl mb-5 font-bold text-center">
        Visi & Misi
      </h1>
      <p className="text-[#93A3B6] font-medium text-center">
        Arah dan tujuan besar SPIN untuk masa depan
      </p>
      <div className="grid grid-cols-2 gap-10 mt-15">
        <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-xl p-6">
          <div className="flex items-center gap-x-3.5">
            <div className="p-3 rounded-sm bg-[#4B4141]">
              <FaRegEye className="text-[#ffec78] w-6 h-fit" />
            </div>
            <div>
              <p className="text-[#ffec78] text-[20px] font-semibold">Visi</p>
            </div>
          </div>
          <p className="text-[#93A3B6] leading-6.5 mt-4">
            Menjadi sistem parkir digital terdepan di lingkungan kampus yang
            aman, tertib, dan terintegrasi.
          </p>
        </div>
        <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-xl p-6">
          <div className="flex items-center gap-x-3.5 mb-4">
            <div className="p-3 rounded-sm bg-[#4B4141]">
              <GoGoal className="text-[#ffec78] w-6 h-fit" />
            </div>
            <div>
              <p className="text-[#ffec78] text-[20px] font-semibold">Misi</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 mb-1">
            <GoDotFill className="h-fit w-3 text-[#ffec78]" />
            <p className="text-[#93A3B6]">
              Meningkatkan efisiensi pengelolaan parkir
            </p>
          </div>
          <div className="flex items-center gap-x-2 mb-1">
            <GoDotFill className="h-fit w-3 text-[#ffec78]" />
            <p className="text-[#93A3B6]">
              Mengurangi kemacetan di area kampus
            </p>
          </div>
          <div className="flex items-center gap-x-2 mb-1">
            <GoDotFill className="h-fit w-3 text-[#ffec78]" />
            <p className="text-[#93A3B6]">Meningkatkan keamanan kendaraan</p>
          </div>
          <div className="flex items-center gap-x-2">
            <GoDotFill className="h-fit w-3 text-[#ffec78]" />
            <p className="text-[#93A3B6]">Mendukung konsep Smart Campus</p>
          </div>
        </div>
      </div>
    </section>
  );
}
