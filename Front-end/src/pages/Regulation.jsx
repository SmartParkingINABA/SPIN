import userIcon from "../assets/images/users-solid-full.svg";
import arrowRightIcon from "../assets/images/chevron-right-solid-full.svg";
import arrowRightBracketIcon from "../assets/images/arrow-right-to-bracket-solid-full.svg";
import carSirineIcon from "../assets/images/car-on-solid-full.svg";
import carSolidIcon from "../assets/images/car-solid-icon.svg";

export default function Regulation() {
  return (
    <div className="bg-[#1E1633] font-ubuntu h-screen w-full flex justify-center items-center">
      <div className="w-2/5">
        <div className="text-center">
          <p className="text-white text-2xl font-semibold">
            Peraturan Pengunaan
          </p>
          <h1 className="text-[#ffec78] font-bold text-3xl mb-4 mt-2">SPIN</h1>
          <p className="text-[#93A3B6] leading-6.5">
            Selamat datang di halaman peraturan penggunaan SPIN (Smart Parking
            INABA). pengguna di wajibkan membaca & mematuhi ketentuan berikut
            demi terciptanya sistem parkir yang tertib, aman, dan nyaman.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-10 mt-20">
          <div className="mx-auto flex flex-col">
            <div className="flex items-center gap-x-5 mb-3">
              <img src={userIcon} alt="" className="w-12" />
              <p className="text-white font-semibold">Ketentuan Pengguna</p>
            </div>
            <a href="#" className="flex items-center ml-auto mr-1.5">
              <p className="text-[#ffec78] text-[14px]">Baca selengkapnya..</p>
              <img src={arrowRightIcon} alt="" className="w-4" />
            </a>
          </div>
          <div className="mx-auto flex flex-col">
            <div className="flex items-center gap-x-5 mb-3">
              <img src={carSolidIcon} alt="" className="w-12" />
              <p className="text-white font-semibold">Ketentuan Pengguna</p>
            </div>
            <a href="#" className="flex items-center ml-auto mr-1.5">
              <p className="text-[#ffec78] text-[14px]">Baca selengkapnya..</p>
              <img src={arrowRightIcon} alt="" className="w-4" />
            </a>
          </div>
          <div className="mx-auto flex flex-col">
            <div className="flex items-center gap-x-5 mb-3">
              <img src={arrowRightBracketIcon} alt="" className="w-12" />
              <p className="text-white font-semibold">Ketentuan Pengguna</p>
            </div>
            <a href="#" className="flex items-center ml-auto mr-1.5">
              <p className="text-[#ffec78] text-[14px]">Baca selengkapnya..</p>
              <img src={arrowRightIcon} alt="" className="w-4" />
            </a>
          </div>
          <div className="mx-auto flex flex-col">
            <div className="flex items-center gap-x-5 mb-3">
              <img src={carSirineIcon} alt="" className="w-12" />
              <p className="text-white font-semibold">Ketentuan Pengguna</p>
            </div>
            <a href="#" className="flex items-center ml-auto mr-1.5">
              <p className="text-[#ffec78] text-[14px]">Baca selengkapnya..</p>
              <img src={arrowRightIcon} alt="" className="w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
