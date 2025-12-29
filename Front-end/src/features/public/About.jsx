import TechSlider from "../../components/public/TechSlider";
import aboutHero from "../../assets/images/public/about-hero.svg";
import aboutHeroCar from "../../assets/images/public/about-hero-car.svg";

import { TbDeviceAnalytics, TbWorld } from "react-icons/tb";
import { GoDotFill, GoGoal } from "react-icons/go";
import { IoQrCode, IoFlashOutline, IoAnalyticsSharp } from "react-icons/io5";
import { FaArrowRightLong, FaRegBell, FaRegEye } from "react-icons/fa6";
import {
  LuShield,
  LuDatabase,
  LuUsers,
  LuLock,
  LuLaptop,
} from "react-icons/lu";
export default function About() {
  return (
    <>
      <section className="px-25 pt-[142px] h-screen">
        <div className="grid grid-cols-2 gap-x-20 items-center">
          <div className="">
            <h1 className="text-[#ffec78] text-5xl mb-5 font-bold">
              Tentang SPIN
            </h1>
            <p className="text-[#93A3B6] font-medium leading-6.5 w-[85%]">
              Sistem parkir berbasis web untuk efisiensi, keamanan, dan
              kenyamanan parkir di lingkungan Universitas INABA.
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
      <section className="px-25 pt-20 pb-16 min-h-screen bg-[#130F40]">
        <h1 className="text-[#ffec78] text-5xl mb-5 font-bold text-center">
          Fitur-Fitur SPIN
        </h1>
        <p className="text-[#93A3B6] font-medium text-center">
          Teknologi dan fitur modern yang membuat SPIN menjadi solusi parkir
          pintar terbaik untuk kampus
        </p>
        <div className="grid grid-cols-3 gap-10 mt-15">
          <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-xl p-6">
            <div className="flex items-center gap-x-3.5">
              <div className="p-3 rounded-sm bg-[#4B4141]">
                <LuShield className="text-[#ffec78] w-6 h-fit" />
              </div>
              <div>
                <p className="text-[#ffec78] text-[20px] font-semibold">
                  Role Based Access Control (RBAC)
                </p>
              </div>
            </div>
            <p className="text-[#93A3B6] leading-6.5 my-4">
              Sistem kontrol akses berbasis peran untuk keamanan maksimal
            </p>
            <div className="flex items-center gap-x-2 mb-1">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">
                Admin dapat mengelola seluruh sistem
              </p>
            </div>
            <div className="flex items-center gap-x-2 mb-1">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">
                Petugas parkir akses terbatas sesuai tugas
              </p>
            </div>
            <div className="flex items-center gap-x-2 mb-1">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">
                Mahasiswa/Staff akses personal dashboard
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">
                Keamanan data terjaga dengan authorization
              </p>
            </div>
          </div>
          <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-xl p-6">
            <div className="flex items-center gap-x-3.5">
              <div className="p-3 rounded-sm bg-[#4B4141]">
                <IoQrCode className="text-[#ffec78] w-6 h-fit" />
              </div>
              <div>
                <p className="text-[#ffec78] text-[20px] font-semibold">
                  QR Code System
                </p>
              </div>
            </div>
            <p className="text-[#93A3B6] leading-6.5 my-4">
              Teknologi QR Code untuk proses check-in/check-out yang cepat
            </p>
            <div className="flex items-center gap-x-2 mb-1">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">
                Scan QR untuk masuk/keluar parkir
              </p>
            </div>
            <div className="flex items-center gap-x-2 mb-1">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">Validasi kendaraan otomatis</p>
            </div>
            <div className="flex items-center gap-x-2 mb-1">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">
                Tracking history parkir real-time
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">
                Tanpa kontak fisik - lebih higienis
              </p>
            </div>
          </div>
          <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-xl p-6">
            <div className="flex items-center gap-x-3.5">
              <div className="p-3 rounded-sm bg-[#4B4141]">
                <FaRegBell className="text-[#ffec78] w-6 h-fit" />
              </div>
              <div>
                <p className="text-[#ffec78] text-[20px] font-semibold">
                  Notifikasi Real-time
                </p>
              </div>
            </div>
            <p className="text-[#93A3B6] leading-6.5 my-4">
              Update instant untuk setiap aktivitas parkir
            </p>
            <div className="flex items-center gap-x-2 mb-1">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">
                Notifikasi saat kendaraan masuk/keluar
              </p>
            </div>
            <div className="flex items-center gap-x-2 mb-1">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">
                Alert jika slot parkir hampir penuh
              </p>
            </div>
            <div className="flex items-center gap-x-2 mb-1">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">
                Reminder untuk kendaraan parkir lama
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">
                Update status langsung ke dashboard
              </p>
            </div>
          </div>
          <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-xl p-6">
            <div className="flex items-center gap-x-3.5">
              <div className="p-3 rounded-sm bg-[#4B4141]">
                <LuDatabase className="text-[#ffec78] w-6 h-fit" />
              </div>
              <div>
                <p className="text-[#ffec78] text-[20px] font-semibold">
                  Database Terintegrasi
                </p>
              </div>
            </div>
            <p className="text-[#93A3B6] leading-6.5 my-4">
              Penyimpanan data yang aman dan terstruktur
            </p>
            <div className="flex items-center gap-x-2 mb-1">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">Data kendaraan tersimpan rapi</p>
            </div>
            <div className="flex items-center gap-x-2 mb-1">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">Laporan otomatis tersedia</p>
            </div>
            <div className="flex items-center gap-x-2 mb-1">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">Backup data berkala</p>
            </div>
            <div className="flex items-center gap-x-2">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">Akses cepat ke riwayat parkir</p>
            </div>
          </div>
          <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-xl p-6">
            <div className="flex items-center gap-x-3.5">
              <div className="p-3 rounded-sm bg-[#4B4141]">
                <LuUsers className="text-[#ffec78] w-6 h-fit" />
              </div>
              <div>
                <p className="text-[#ffec78] text-[20px] font-semibold">
                  User Management
                </p>
              </div>
            </div>
            <p className="text-[#93A3B6] leading-6.5 my-4">
              Manajemen pengguna yang komprehensif
            </p>
            <div className="flex items-center gap-x-2 mb-1">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">Registrasi kendaraan mudah</p>
            </div>
            <div className="flex items-center gap-x-2 mb-1">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">Profil pengguna terkelola</p>
            </div>
            <div className="flex items-center gap-x-2 mb-1">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">Multi-vehicle per user</p>
            </div>
            <div className="flex items-center gap-x-2">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">Verifikasi identitas kampus</p>
            </div>
          </div>
          <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-xl p-6">
            <div className="flex items-center gap-x-3.5">
              <div className="p-3 rounded-sm bg-[#4B4141]">
                <LuLock className="text-[#ffec78] w-6 h-fit" />
              </div>
              <div>
                <p className="text-[#ffec78] text-[20px] font-semibold">
                  Keamanan Data
                </p>
              </div>
            </div>
            <p className="text-[#93A3B6] leading-6.5 my-4">
              Enkripsi dan proteksi data tingkat tinggi
            </p>
            <div className="flex items-center gap-x-2 mb-1">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">JWT Token authentication</p>
            </div>
            <div className="flex items-center gap-x-2 mb-1">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">Password encryption</p>
            </div>
            <div className="flex items-center gap-x-2 mb-1">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">Session management aman</p>
            </div>
            <div className="flex items-center gap-x-2">
              <GoDotFill className="h-fit w-3 text-[#ffec78]" />
              <p className="text-[#93A3B6]">HTTPS/SSL ready</p>
            </div>
          </div>
        </div>
        <div className="w-2/5 mt-15 bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-xl p-6 mx-auto">
          <p className="text-[#FEF8FD] font-medium text-center">
            Tertarik menggunakan semua fitur ini untuk kampus Anda?
          </p>
          <div className="grid grid-cols-2 gap-x-5 mt-5 w-3/4 mx-auto">
            <button className="bg-[#FFDB58] text-[#130F40] font-semibold py-3 rounded-md border border-transparent transition duration-300 ease-in-out hover:text-[#FFDB58] hover:bg-transparent hover:border-[#FFDB58] cursor-pointer">
              Hubungi Kami
            </button>
            <button className="bg-transparent text-[#FFDB58] font-semibold py-3 rounded-md border border-[#FFDB58] transition duration-300 ease-in-out hover:text-[#130F40] hover:bg-[#FFDB58] hover:border-transparent cursor-pointer">
              Coba Sekarang
            </button>
          </div>
        </div>
      </section>
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
      <section className="px-25 pt-20 pb-16 bg-[#1E1633]">
        <h1 className="text-[#ffec78] text-5xl mb-5 font-bold text-center">
          Teknologi yang Digunakan
        </h1>
        <p className="text-[#93A3B6] font-medium text-center">
          Teknologi modern dan profesional untuk sistem yang handal
        </p>
        <div className="mt-10 w-2/3 mx-auto">
          <TechSlider />
        </div>
      </section>
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
                Mendukung berbagai peran pengguna: Admin, Petugas, dan
                Pengendara dengan hak akses yang berbeda.
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
      <hr className="h-0.5 w-[86%] bg-[rgba(255,236,120,0.5)] mx-auto" />
      <footer className="py-8 bg-[#130F40]">
        <p className="text-[#93A3B6] font-medium text-center">
          © 2025 SPIN - Smart Parking Universitas INABA. All rights reserved.
        </p>
      </footer>
    </>
  );
}
