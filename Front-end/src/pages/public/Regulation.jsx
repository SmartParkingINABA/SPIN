import regulationHero from "../../assets/images/public/regulation.svg";

import { FaPeopleGroup, FaPersonBiking, FaCarOn } from "react-icons/fa6";
import { IoWarning, IoQrCodeOutline } from "react-icons/io5";
import { GrSystem } from "react-icons/gr";
import { IoMdExit } from "react-icons/io";
import { BiScan } from "react-icons/bi";
import { AiOutlineSafety } from "react-icons/ai";
import { PiMapPinAreaBold } from "react-icons/pi";
import {
  FaRegCheckCircle,
  FaRegUser,
  FaCarSide,
  FaEdit,
  FaLock,
} from "react-icons/fa";

export default function Regulation() {
  return (
    <>
      <section className="px-25 pt-[142px] h-screen">
        <h1 className="text-[#FEF8FD] text-center font-bold text-3xl flex flex-col gap-y-3">
          Peraturan Penggunaan
          <span className="text-[#ffec78] uppercase">Spin</span>
        </h1>
        <div className="grid grid-cols-2 items-center mt-4">
          <div className="">
            <img
              src={regulationHero}
              alt=""
              className=" w-[75%] h-fit mx-auto"
            />
          </div>
          <div className="">
            <p className="w-[75%] text-[#93A3B6] leading-6.5 font-semibold">
              Selamat datang di halaman peraturan penggunaan{" "}
              <span className="text-[#FEF8FD]">SPIN (Smart Parking INABA)</span>
              . pengguna di wajibkan membaca & mematuhi ketentuan berikut demi
              terciptanya sistem parkir yang{" "}
              <span className="text-[#FEF8FD]">tertib</span>,{" "}
              <span className="text-[#FEF8FD]">aman</span>, dan{" "}
              <span className="text-[#FEF8FD]">nyaman</span>.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#1E1633] grid grid-cols-2 gap-10 px-25 pt-27 pb-10">
        <div className="bg-[#130F40] border border-[rgba(255,236,120,0.5)] rounded-xl p-6 flex flex-col gap-y-4">
          <div className="flex items-center gap-x-3">
            <div className="p-3 rounded-sm bg-[#4B4141]">
              <FaPeopleGroup className="text-[#ffec78] w-8 h-fit" />
            </div>
            <div>
              <p className="text-[#FEF8FD] text-[18px] font-semibold">
                Ketentuan Pengguna
              </p>
              <p className="text-[#93A3B6] font-medium text-[14px]">
                Syarat & Kewajiban Pengguna SPIN
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-3 bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md py-3.5 px-3">
            <div className="p-2 rounded-sm bg-[#4B4141]">
              <FaRegUser className="text-[#ffec78] w-5 h-fit" />
            </div>
            <p className="text-[#FEF8FD] text-[14px] font-semibold">
              Hanya pengguna terdaftar (Mahasiswa, Dosen, Staff, Atau tamu
              terverifikasi) yang dapat menggunakan sistem SPIN.
            </p>
          </div>
          <div className="flex items-center gap-x-3 bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md py-3.5 px-3">
            <div className="p-2 rounded-sm bg-[#4B4141]">
              <FaRegCheckCircle className="text-[#ffec78] w-5 h-fit" />
            </div>
            <p className="text-[#FEF8FD] text-[14px] font-semibold">
              Setiap pengguna wajib memiliki akun dan data kendaraan yang valid.
            </p>
          </div>
          <div className="flex items-center gap-x-3 bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md py-3.5 px-3">
            <div className="p-2 rounded-sm bg-[#4B4141]">
              <IoWarning className="text-[#ffec78] w-5 h-fit" />
            </div>
            <p className="text-[#FEF8FD] text-[14px] font-semibold">
              Dilarang meminjamkan akun atau QR Code kendaraan kepada pihak lain
              tanpa izin.
            </p>
          </div>
        </div>
        <div className="bg-[#130F40] border border-[rgba(255,236,120,0.5)] rounded-xl p-6 flex flex-col gap-y-4">
          <div className="flex items-center gap-x-3">
            <div className="p-3 rounded-sm bg-[#4B4141]">
              <FaCarSide className="text-[#ffec78] w-8 h-fit" />
            </div>
            <div>
              <p className="text-[#FEF8FD] text-[18px] font-semibold">
                Registrasi Kendaraan
              </p>
              <p className="text-[#93A3B6] font-medium text-[14px]">
                Pendaftaran & Validasi Data
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-3 bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md py-3.5 px-3">
            <div className="p-2 rounded-sm bg-[#4B4141]">
              <FaEdit className="text-[#ffec78] w-5 h-fit" />
            </div>
            <p className="text-[#FEF8FD] text-[14px] font-semibold">
              Setiap kendaraan harus didaftarkan melalui sistem dengan data yang
              benar.
            </p>
          </div>
          <div className="flex items-center gap-x-3 bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md py-3.5 px-3">
            <div className="p-2 rounded-sm bg-[#4B4141]">
              <FaPersonBiking className="text-[#ffec78] w-5 h-fit" />
            </div>
            <p className="text-[#FEF8FD] text-[14px] font-semibold">
              Pengguna hanya boleh mendaftarkan kendaraan pribadi.
            </p>
          </div>
          <div className="flex items-center gap-x-3 bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md py-3.5 px-3">
            <div className="p-2 rounded-sm bg-[#4B4141]">
              <GrSystem className="text-[#ffec78] w-5 h-fit" />
            </div>
            <p className="text-[#FEF8FD] text-[14px] font-semibold">
              Perubahan data kendaraan wajib segera diperbarui di sistem.
            </p>
          </div>
        </div>
        <div className="bg-[#130F40] border border-[rgba(255,236,120,0.5)] rounded-xl p-6 flex flex-col gap-y-4">
          <div className="flex items-center gap-x-3">
            <div className="p-3 rounded-sm bg-[#4B4141]">
              <IoMdExit className="text-[#ffec78] w-8 h-fit" />
            </div>
            <div>
              <p className="text-[#FEF8FD] text-[18px] font-semibold">
                Akses Masuk & Keluar
              </p>
              <p className="text-[#93A3B6] font-medium text-[14px]">
                Prosedur scan & Verifikasi
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-3 bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md py-3.5 px-3">
            <div className="p-2 rounded-sm bg-[#4B4141]">
              <IoQrCodeOutline className="text-[#ffec78] w-5 h-fit" />
            </div>
            <p className="text-[#FEF8FD] text-[14px] font-semibold">
              Kendaraan masuk dan keluar area parkir wajib menggunakan QR Code
              yang disediakan oleh SPIN.
            </p>
          </div>
          <div className="flex items-center gap-x-3 bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md py-3.5 px-3">
            <div className="p-2 rounded-sm bg-[#4B4141]">
              <BiScan className="text-[#ffec78] w-5 h-fit" />
            </div>
            <p className="text-[#FEF8FD] text-[14px] font-semibold">
              Pengguna wajib menunjukkan QR Code kepada petugas saat diminta.
            </p>
          </div>
          <div className="flex items-center gap-x-3 bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md py-3.5 px-3">
            <div className="p-2 rounded-sm bg-[#4B4141]">
              <IoWarning className="text-[#ffec78] w-5 h-fit" />
            </div>
            <p className="text-[#FEF8FD] text-[14px] font-semibold ">
              Pelanggaran sistem scan atau bypass akses akan dikenakan sanksi.
            </p>
          </div>
        </div>
        <div className="bg-[#130F40] border border-[rgba(255,236,120,0.5)] rounded-xl p-6 flex flex-col gap-y-4">
          <div className="flex items-center gap-x-3">
            <div className="p-3 rounded-sm bg-[#4B4141]">
              <FaCarOn className="text-[#ffec78] w-8 h-fit" />
            </div>
            <div>
              <p className="text-[#FEF8FD] text-[18px] font-semibold">
                Keamanan Kendaraan
              </p>
              <p className="text-[#93A3B6] font-medium text-[14px]">
                Tanggung jawab & Perlindungan
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-3 bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md py-3.5 px-3">
            <div className="p-2 rounded-sm bg-[#4B4141]">
              <FaLock className="text-[#ffec78] w-5 h-fit" />
            </div>
            <p className="text-[#FEF8FD] text-[14px] font-semibold">
              Pengguna bertanggung jawab terhadap barang pribadi di dalam
              kendaraanya.
            </p>
          </div>
          <div className="flex items-center gap-x-3 bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md py-3.5 px-3">
            <div className="p-2 rounded-sm bg-[#4B4141]">
              <AiOutlineSafety className="text-[#ffec78] w-5 h-fit" />
            </div>
            <p className="text-[#FEF8FD] text-[14px] font-semibold">
              SPIN hanya membantu pencatatan dan monitoring, bukan penjamin
              kehilangan.
            </p>
          </div>
          <div className="flex items-center gap-x-3 bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md py-3.5 px-3">
            <div className="p-2 rounded-sm bg-[#4B4141]">
              <PiMapPinAreaBold className="text-[#ffec78] w-5 h-fit" />
            </div>
            <p className="text-[#FEF8FD] text-[14px] font-semibold">
              Kendaraan harus diparkir pada area yang telah ditentukan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
