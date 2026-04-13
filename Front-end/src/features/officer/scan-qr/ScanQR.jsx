import { useCallback, useState } from "react";
import Header from "./components/Header";
import BoxWrapper from "../../../components/ui/BoxWrapper";
import Capture from "./components/Capture/Capture";
import HandleCapture from "./components/Capture/HandleCapture";
import SubmitManualId from "./components/Capture/SubmitManualId";
import NotResultYet from "./components/Result/NotResultYet";
import RegisteredVehicle from "./components/Result/RegisteredVehicle";
import StatusIn from "./components/Status/StatusIn";
import StatusOut from "./components/Status/StatusOut";
import { useScanQr } from "../../../hooks/officer/useScanQr";
import ScanQRSkeleton from "./components/ScanQRSkeleton";

export default function ScanQR() {
  const {
    loading,
    scanResult,
    vehicleStatus,
    actionsStatus,
    message,
    scanQr,
    handleIn,
    handleOut,
    reset,
  } = useScanQr();
  const [isScanning, setIsScanning] = useState(false);
  const [searchID, setSearchID] = useState("");

  const handleSearch = () => {
    if (!searchID) return;

    scanQr(searchID);
  };

  const handleScanClick = () => {
    if (isScanning) return;

    reset();

    setIsScanning(true);
  };

  const handleScanSuccess = useCallback(
    (qr_code) => {
      setIsScanning(false);
      console.log("QR RESULT:", qr_code);

      scanQr(qr_code);
    },
    [scanQr],
  );

  if (loading) return <ScanQRSkeleton />;

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <Header />
      <div className="mt-6 grid grid-cols-2 gap-x-5">
        <BoxWrapper title="Scanner QR">
          <Capture isScanning={isScanning} onScanSuccess={handleScanSuccess} />
          <HandleCapture
            handleScanClick={handleScanClick}
            isScanning={isScanning}
            loading={loading}
          />
          <hr className="h-0.5 bg-[#93A3B6] w-full my-6" />
          <SubmitManualId
            searchID={searchID}
            setSearchID={setSearchID}
            handleSearch={handleSearch}
            loading={loading}
          />
        </BoxWrapper>
        <BoxWrapper title="Hasil Scan & Konfirmasi">
          <NotResultYet scanResult={scanResult} actionsStatus={actionsStatus} />
          <RegisteredVehicle
            scanResult={scanResult}
            actionsStatus={actionsStatus}
            vehicleStatus={vehicleStatus}
            handleIn={handleIn}
            handleExit={handleOut}
            loading={loading}
          />
          <StatusIn actionsStatus={actionsStatus} message={message} />
          <StatusOut actionsStatus={actionsStatus} message={message} />
        </BoxWrapper>
      </div>
    </section>
  );
}
