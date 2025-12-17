import { IoClose } from "react-icons/io5";

export default function AdminDetailRider({ onClose }) {
  return (
    <div className="font-ubuntu flex justify-center items-center h-screen w-full fixed inset-0 z-50 bg-[rgba(0,0,0,0.54)]">
      <div className="border border-[rgba(255,236,120,0.5)] bg-[#130F40] rounded-md p-5 pt-6 pr-0 pb-0 w-1/3">
        <div className="flex items-center justify-between mb-6 pr-5">
          <h1 className="text-[#FEF8FD] text-[18px] font-semibold">
            Detail Pengendara
          </h1>
          <IoClose
            className="w-6 h-fit text-[#93A3B6] cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="h-80 w-full overflow-y-auto pr-5 pb-5">
          <div className="grid grid-cols-2 gap-x-3 bg-[#1E1633] rounded-sm py-2 px-4 mb-6">
            <div className="flex flex-col gap-y-3">
              <div>
                <p className="text-[#93A3B6] text-[14px]">Nama Lengkap</p>
                <p className="text-[#FEF8FD]">Ahmad Fauzi</p>
              </div>
              <div>
                <p className="text-[#93A3B6] text-[14px]">No. HP</p>
                <p className="text-[#FEF8FD]">081234567890</p>
              </div>
              <div>
                <p className="text-[#93A3B6] text-[14px]">Alamat</p>
                <p className="text-[#FEF8FD]">Jl. Merdeka No. 123, Jakarta</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              <div>
                <p className="text-[#93A3B6] text-[14px]">Email</p>
                <p className="text-[#fef8fd]">ahmad.fauzi@email.com</p>
              </div>
              <div>
                <p className="text-[#93A3B6] text-[14px]">Status</p>
                <p className="text-green-600 bg-green-200 rounded-sm px-2.5 py-0.5 w-fit text-[12px]">
                  Aktif
                </p>
              </div>
            </div>
          </div>
          <p className="text-[#FEF8FD] font-medium mb-3.5">
            Kendaraan Terdaftar
          </p>
          <div className="mb-6 flex flex-col gap-y-3">
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] rounded-sm py-2 px-4 flex items-center justify-between">
              <div>
                <p className="text-[#FEF8FD]">B 1234 XYZ</p>
                <p className="text-[#93A3B6] text-[14px]">Honda Beat - Motor</p>
              </div>
              <p className="text-green-600 bg-green-200 rounded-sm px-2.5 py-0.5 w-fit text-[13px]">
                Sedang Parkir
              </p>
            </div>
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] rounded-sm py-2 px-4 flex items-center justify-between">
              <div>
                <p className="text-[#FEF8FD]">B 1234 XYZ</p>
                <p className="text-[#93A3B6] text-[14px]">Honda Beat - Motor</p>
              </div>
              {/* <p className="text-green-600 bg-green-200 rounded-sm px-2.5 py-0.5 w-fit text-[13px]">
                Sedang Parkir
              </p> */}
            </div>
          </div>
          <p className="text-[#FEF8FD] font-medium mb-3.5">Riwayat Parkir</p>
          <div className="flex flex-col gap-y-3">
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] rounded-sm py-2 px-4 flex items-center justify-between">
              <div>
                <p className="text-[#FEF8FD]">B 1234 XYZ</p>
                <p className="text-[#93A3B6] text-[14px]">
                  Masuk: 27/11/2024, 08.30.00
                </p>
              </div>
              {/* <p className="text-green-600 bg-green-200 rounded-sm px-2.5 py-0.5 w-fit text-[13px]">
                Sedang Parkir
              </p> */}
            </div>
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] rounded-sm py-2 px-4 flex items-center justify-between">
              <div>
                <p className="text-[#FEF8FD]">B 1234 XYZ</p>
                <p className="text-[#93A3B6] text-[14px]">
                  Masuk: 25/11/2024, 08.00.00
                </p>
                <p className="text-[#93A3B6] text-[14px]">
                  Keluar: 25/11/2024, 18.00.00
                </p>
              </div>
              <p className="text-[#1E1633] bg-gray-200 rounded-sm px-2.5 py-0.5 w-fit text-[13px]">
                10j 0m
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
