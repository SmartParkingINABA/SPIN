import { IoClose } from "react-icons/io5";

export default function AdminDetailVehicle({ onClose }) {
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
                <p className="text-[#93A3B6] text-[14px]">No. Plat</p>
                <p className="text-[#FEF8FD]">B 1234 XYZ</p>
              </div>
              <div>
                <p className="text-[#93A3B6] text-[14px]">Jenis</p>
                <p className="text-[#130F40] bg-gray-200 rounded-sm px-2.5 py-0.5 w-fit text-[12px]">
                  Motor
                </p>
              </div>
              <div>
                <p className="text-[#93A3B6] text-[14px]">Nama Pemilik</p>
                <p className="text-[#FEF8FD]">Ahmad Fauzi</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              <div>
                <p className="text-[#93A3B6] text-[14px]">Merk / Model</p>
                <p className="text-[#fef8fd]">Honda Beat</p>
              </div>
              <div>
                <p className="text-[#93A3B6] text-[14px]">Status</p>
                <p className="text-[#130F40] bg-gray-200 rounded-sm px-2.5 py-0.5 w-fit text-[12px]">
                  Sedang Parkir
                </p>
              </div>
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
              <p className="text-green-600 bg-green-200 rounded-sm px-2.5 py-0.5 w-fit text-[13px]">
                Masih Parkir
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
