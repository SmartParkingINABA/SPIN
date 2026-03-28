import Header from "./components/Header";
import VehiclesQR from "./components/VehiclesQR/VehiclesQR";
import HowToUse from "./components/HowToUse";
import Information from "./components/Information";
import { useQrCode } from "../../../hooks/user/useQrCode";
import QRCodeSkeleton from "./components/QRCodeSkeleton";

export default function QRCode() {
  const { data, loading, handleDownload, handlePrint } = useQrCode();

  return (
    <>
      {loading ? (
        <QRCodeSkeleton />
      ) : (
        <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
          <Header />
          <div className="mt-5 flex items-start gap-6">
            <VehiclesQR
              data={data}
              handleDownload={handleDownload}
              handlePrint={handlePrint}
            />
            <div className="w-[30%]">
              <HowToUse />
              <Information />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
