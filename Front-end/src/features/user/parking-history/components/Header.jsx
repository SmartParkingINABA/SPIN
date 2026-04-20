import ExportData from "./ExportData";

export default function Header({ onExport, isExportDisabled }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-[#FEF8FD] text-[18px] sm:text-2xl font-bold">
          Riwayat Parkir
        </h1>
        <p className="text-[#93A3B6] text-[14px] sm:text-[16px] font-medium sm:mt-1">
          Catatan parkir kendaraan anda
        </p>
      </div>
      <ExportData onExport={onExport} isDisabled={isExportDisabled} />
    </div>
  );
}
