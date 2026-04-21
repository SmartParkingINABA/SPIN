import Header from "./components/Header";
import VehiclesQR from "./components/VehiclesQR/VehiclesQR";
import HowToUse from "./components/HowToUse";
import Information from "./components/Information";
import { useQrCode } from "../../../hooks/user/useQrCode";
import QRCodeSkeleton from "./components/QRCodeSkeleton";

export default function QRCode() {
  const {
    data,
    loading,
    handleDownload,
    handlePrint,
    selectedId,
    handleSelectVehicle,
  } = useQrCode();

  if (!loading) return <QRCodeSkeleton />;

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100dvh-60px)] overflow-y-auto">
      <Header />
      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
        <VehiclesQR
          data={data}
          selectedId={selectedId}
          onSelect={handleSelectVehicle}
          handleDownload={handleDownload}
          handlePrint={handlePrint}
        />
        <div className="w-full sm:w-[30%]">
          <HowToUse />
          <Information />
        </div>
      </div>
    </section>
  );
}
