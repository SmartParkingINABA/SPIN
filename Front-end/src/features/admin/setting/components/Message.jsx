import { IoWarningOutline } from "react-icons/io5";

export default function Message() {
  return (
    <div className="bg-orange-200 px-6 py-4 rounded-md">
      <div className="flex items-start gap-x-3">
        <div className="bg-orange-300 rounded-sm p-1.5 mt-1">
          <IoWarningOutline className="text-orange-600 w-5.5 h-fit" />
        </div>
        <div className="">
          <p className="text-[#130F40] font-medium">Informasi Penting</p>
          <p className="text-orange-700 text-[14px] font-medium">
            Pastikan data yang Anda masukkan sudah benar. Jika Anda mengalami
            kesulitan dalam mengubah informasi akun, silakan hubungi
            administrator sistem.
          </p>
        </div>
      </div>
    </div>
  );
}
