import ScanQR from "./ScanQR";
import VehiclesDropdown from "./VehiclesDropdown";
import ButtonCta from "./ButtonCta";

export default function VehiclesQR({
  data,
  handleDownload,
  handlePrint,
  selectedId,
  onSelect,
}) {
  return (
    <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md p-5 sm:p-6 w-full sm:w-[70%]">
      <h2 className="text-[#FEF8FD] text-[16px] sm:text-[18px] font-semibold mb-3 sm:mb-3.5">
        QR Code Kendaraan
      </h2>
      <p className="text-[#93A3B6] font-medium mb-2 sm:mb-2.5 text-[14px] sm:text[16px]">
        Pilih Kendaraan
      </p>
      <VehiclesDropdown
        options={
          data?.kendaraan_list?.length
            ? data.kendaraan_list
            : [{ id: "empty", no_plat: "Belum ada kendaraan", merk: "" }]
        }
        selectedId={selectedId}
        onSelect={onSelect}
      />
      <ScanQR data={data?.selected} />
      <ButtonCta onDownload={handleDownload} onPrint={handlePrint} />
    </div>
  );
}
