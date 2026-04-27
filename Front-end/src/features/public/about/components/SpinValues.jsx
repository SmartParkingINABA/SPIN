import { IoAnalyticsSharp } from "react-icons/io5";
import { LuLock, LuUsers } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";

export default function SpinValues() {
  return (
    <section className="px-25 pt-20 pb-16 bg-[#130F40]">
      <h1 className="text-[#ffec78] text-5xl mb-5 font-bold text-center">
        Nilai Lebih SPIN
      </h1>
      <p className="text-[#93A3B6] font-medium text-center">
        Keunggulan sistem yang membedakan SPIN dari yang lain
      </p>
      <div className="grid grid-cols-2 gap-10 mt-15">
        <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-xl p-6 flex items-start gap-x-3.5">
          <div className="p-3 rounded-sm bg-[#4B4141] w-fit">
            <IoAnalyticsSharp className="text-[#ffec78] w-6 h-fit" />
          </div>
          <div>
            <h2 className="text-[#ffec78] text-[20px] font-semibold mb-2">
              Monitoring Real-Time
            </h2>
            <p className="text-[#93A3B6] leading-6.5">
              Pantau aktivitas parkir secara langsung dengan dashboard
              interaktif dan data yang selalu terupdate.
            </p>
          </div>
        </div>
        <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-xl p-6 flex items-start gap-x-3.5">
          <div className="p-3 rounded-sm bg-[#4B4141] w-fit">
            <LuLock className="text-[#ffec78] w-6 h-fit" />
          </div>
          <div>
            <h2 className="text-[#ffec78] text-[20px] font-semibold mb-2">
              Sistem Keamanan JWT
            </h2>
            <p className="text-[#93A3B6] leading-6.5">
              Autentikasi berbasis token untuk menjaga keamanan data dan akses
              sistem yang terlindungi.
            </p>
          </div>
        </div>
        <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-xl p-6 flex items-start gap-x-3.5">
          <div className="p-3 rounded-sm bg-[#4B4141] w-fit">
            <LuUsers className="text-[#ffec78] w-6 h-fit" />
          </div>
          <div>
            <h2 className="text-[#ffec78] text-[20px] font-semibold mb-2">
              Multi-Role Access
            </h2>
            <p className="text-[#93A3B6] leading-6.5">
              Mendukung berbagai peran pengguna: Admin, Petugas, dan Pengendara
              dengan hak akses yang berbeda.
            </p>
          </div>
        </div>
        <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-xl p-6 flex items-start gap-x-3.5">
          <div className="p-3 rounded-sm bg-[#4B4141] w-fit">
            <TbWorld className="text-[#ffec78] w-6 h-fit" />
          </div>
          <div>
            <h2 className="text-[#ffec78] text-[20px] font-semibold mb-2">
              Web-Based Responsive
            </h2>
            <p className="text-[#93A3B6] leading-6.5">
              Akses dari perangkat apapun dengan tampilan yang optimal di
              desktop, tablet, dan smartphone.
            </p>
          </div>
        </div>
      </div>
      <div className="w-2/5 mt-15 bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-xl p-6 mx-auto">
        <p className="text-[#FEF8FD] font-medium text-center">
          Siap menggunakan SPIN untuk kampus Anda?
        </p>
        <div className="grid grid-cols-2 gap-x-5 mt-5 w-3/4 mx-auto">
          <button className="bg-[#FFDB58] text-[#130F40] font-semibold py-3 rounded-md border border-transparent transition duration-300 ease-in-out hover:text-[#FFDB58] hover:bg-transparent hover:border-[#FFDB58] cursor-pointer">
            Hubungi Kami
          </button>
          <button className="bg-transparent text-[#FFDB58] font-semibold py-3 rounded-md border border-[#FFDB58] transition duration-300 ease-in-out hover:text-[#130F40] hover:bg-[#FFDB58] hover:border-transparent cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </section>
  );
}
