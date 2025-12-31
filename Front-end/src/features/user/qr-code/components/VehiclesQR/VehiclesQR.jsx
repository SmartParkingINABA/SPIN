import ScanQR from "./ScanQR";
import VehiclesDropdown from "./VehiclesDropdown";
import ButtonCta from "./ButtonCta";

export default function VehiclesQR() {
  return (
    <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md p-6 w-[70%]">
      <h2 className="text-[#FEF8FD] text-[18px] font-semibold mb-3.5">
        QR Code Kendaraan
      </h2>
      <p className="text-[#93A3B6] font-medium mb-2.5">Pilih Kendaraan</p>
      <VehiclesDropdown selectedOption={"Semua Kendaraan"} />
      <ScanQR />
      <ButtonCta />
    </div>
  );
}
