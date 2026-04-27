import { IoMdCloseCircleOutline } from "react-icons/io";

export default function NotResultYet({ scanResult, actionsStatus }) {
  if (scanResult || actionsStatus) return null;

  return (
    <div className="mt-5 sm:mt-20">
      <IoMdCloseCircleOutline className="h-fit w-10 sm:w-13 text-[#93A3B6] mx-auto mb-3" />
      <p className="text-[#93A3B6] text-center sm:mb-1.5">
        Belum ada data terscan
      </p>
      <p className="text-[#93A3B6] text-center">
        Scan QR code atau input manual
      </p>
    </div>
  );
}
