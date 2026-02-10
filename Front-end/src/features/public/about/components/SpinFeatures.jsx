import { FaRegBell } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoQrCode } from "react-icons/io5";
import { LuDatabase, LuLock, LuShield, LuUsers } from "react-icons/lu";

export default function SpinFeatures() {
  return (
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
            <p className="text-[#93A3B6]">Scan QR untuk masuk/keluar parkir</p>
          </div>
          <div className="flex items-center gap-x-2 mb-1">
            <GoDotFill className="h-fit w-3 text-[#ffec78]" />
            <p className="text-[#93A3B6]">Validasi kendaraan otomatis</p>
          </div>
          <div className="flex items-center gap-x-2 mb-1">
            <GoDotFill className="h-fit w-3 text-[#ffec78]" />
            <p className="text-[#93A3B6]">Tracking history parkir real-time</p>
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
  );
}
