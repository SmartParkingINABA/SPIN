import { CiUser } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

export default function PrivateInformation() {
  return (
    <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md w-2/3">
      <p className="text-[#FEF8FD] font-medium">Informasi Pribadi</p>
      <div className="flex items-center gap-x-3 my-3.5">
        <RxAvatar className="h-fit w-22 text-[#93A3B6]" />
        <div>
          <p className="text-[#FEF8FD] mb-1 flex gap-x-2.5">
            Rian Priansyah{" "}
            <span className="rounded-sm px-[7px] py-0.5 bg-[#FFEC78] text-[14px] text-[#130F40]">
              Aktif
            </span>
          </p>
          <p className="text-[#93A3B6] text-[14px]">
            ID Petugas: <span>PTG-2024-001</span>
          </p>
          <p className="text-[#93A3B6] text-[14px]">
            Bergabung sejak: <span>1 Januari 2024</span>
          </p>
        </div>
      </div>
      <hr className="w-full h-0.5 bg-[rgba(255,236,120,0.5)]" />
      <div className="flex items-center gap-x-2 my-3.5">
        <MdOutlinePhone className="h-fit w-6.5 text-[#93A3B6]" />
        <div>
          <p className="text-[#93A3B6] text-[14px]">No. Telepon</p>
          <p className="text-[#FEF8FD]">0812-3456-7890</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <CiUser className="h-fit w-6.5 text-[#93A3B6]" />
        <div>
          <p className="text-[#93A3B6] text-[14px]">Email</p>
          <p className="text-[#FEF8FD]">ahmad.ridwan@kampus.ac.id</p>
        </div>
      </div>
    </div>
  );
}
