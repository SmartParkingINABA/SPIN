import { IoFlashOutline } from "react-icons/io5";
import { LuLaptop, LuShield } from "react-icons/lu";
import { TbDeviceAnalytics } from "react-icons/tb";

export default function GoalSpin() {
  return (
    <section className="px-25 pt-20 pb-16 bg-[#130F40]">
      <h1 className="text-[#ffec78] text-5xl mb-5 font-bold text-center">
        Tujuan Pengembangan SPIN
      </h1>
      <p className="text-[#93A3B6] font-medium text-center">
        Alasan dan dampak SPIN dibuat untuk kampus
      </p>
      <div className="grid grid-cols-4 gap-10 mt-15">
        <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-xl p-6">
          <div className="p-3 rounded-sm bg-[#4B4141] w-fit mb-4">
            <IoFlashOutline className="text-[#ffec78] w-6 h-fit" />
          </div>
          <h2 className="text-[#ffec78] text-[20px] font-semibold mb-2">
            Efisiensi Parkir
          </h2>
          <p className="text-[#93A3B6] leading-6.5">
            Proses parkir lebih cepat & teratur
          </p>
        </div>
        <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-xl p-6">
          <div className="p-3 rounded-sm bg-[#4B4141] w-fit mb-4">
            <LuShield className="text-[#ffec78] w-6 h-fit" />
          </div>
          <h2 className="text-[#ffec78] text-[20px] font-semibold mb-2">
            Keamanan Kendaraan
          </h2>
          <p className="text-[#93A3B6] leading-6.5">
            Data kendaraan terekam dan terpantau
          </p>
        </div>
        <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-xl p-6">
          <div className="p-3 rounded-sm bg-[#4B4141] w-fit mb-4">
            <LuLaptop className="text-[#ffec78] w-6 h-fit" />
          </div>
          <h2 className="text-[#ffec78] text-[20px] font-semibold mb-2">
            Digitalisasi Kampus
          </h2>
          <p className="text-[#93A3B6] leading-6.5">
            Dukungan transformasi teknologi
          </p>
        </div>
        <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-xl p-6">
          <div className="p-3 rounded-sm bg-[#4B4141] w-fit mb-4">
            <TbDeviceAnalytics className="text-[#ffec78] w-6 h-fit" />
          </div>
          <h2 className="text-[#ffec78] text-[20px] font-semibold mb-2">
            Transparansi Data
          </h2>
          <p className="text-[#93A3B6] leading-6.5">Data laporan real-time</p>
        </div>
      </div>
    </section>
  );
}
