import { MdOutlineCameraAlt } from "react-icons/md";
import { Link } from "react-router-dom";

export default function OfficerScanQR() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <h1 className="text-[#FEF8FD] text-2xl font-bold">
        Kendaraan Parkir Aktif
      </h1>
      <p className="text-[#93A3B6] font-medium mt-1">
        Daftar kendaraan yang sedang parkir saat ini
      </p>
      <div className="mt-6 grid grid-cols-2 gap-x-5">
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
          <p className="text-[#FEF8FD] font-medium">Scanner QR</p>
          <div className="mt-6 bg-[#130F40] h-130 flex justify-center items-center rounded-md">
            <div className="text-center border-2 border-[rgba(255,236,120,0.5)] rounded-xl px-2.5 py-13">
              <MdOutlineCameraAlt className="h-fit w-13 mx-auto text-[#93A3B6] mb-3" />
              <p className="text-[#93A3B6] mb-1.5">Kamera siap memindai</p>
              <p className="text-[#93A3B6]">Arahkan QR code ke kamera</p>
            </div>
          </div>
          <Link className="block bg-[#FFEC78] mt-6 w-full rounded-md py-2.5 transition duration-300 ease-in-out border border-transparent hover:border-[#FFEC78] hover:bg-transparent group">
            <div className="flex items-center gap-x-3 w-fit mx-auto">
              <MdOutlineCameraAlt className="h-fit w-5 text-[#130F40] group-hover:text-[#FFEC78] transition duration-300 ease-in-out" />
              <p className="text-[#130F40] font-medium group-hover:text-[#FFEC78] transition duration-300 ease-in-out">
                Mulai Scan QR
              </p>
            </div>
          </Link>
          <hr className="h-0.5 bg-[#93A3B6] w-full my-6" />
          <p className="text-[#FEF8FD] font-medium">Input Manual ID QR</p>
          <p className="text-[#93A3B6] text-[14px]">
            Gunakan jika gagal scan otomatis (contoh: QR-2020-001, QR-2020-002)
          </p>
          <div className="flex gap-x-3 mt-3">
            <input
              type="text"
              className="w-full bg-[#FFEC78] rounded-md py-2.5 px-4 outline-0"
              placeholder="Masukan ID QR"
            />
            <Link className="block py-2.5 bg-transparent border border-[#FFEC78] text-[#FFEC78] px-5 rounded-md transition duration-300 ease-in-out hover:border-transparent hover:bg-[#FFEC78] hover:text-[#130F40]">
              Submit
            </Link>
          </div>
        </div>
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md"></div>
      </div>
    </section>
  );
}
