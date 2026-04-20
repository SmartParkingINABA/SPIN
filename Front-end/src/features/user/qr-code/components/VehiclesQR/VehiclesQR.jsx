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
    <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md p-6 w-full sm:w-[70%]">
      <h2 className="text-[#FEF8FD] text-[18px] font-semibold mb-3.5">
        QR Code Kendaraan
      </h2>
      <p className="text-[#93A3B6] font-medium mb-2.5">Pilih Kendaraan</p>
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
