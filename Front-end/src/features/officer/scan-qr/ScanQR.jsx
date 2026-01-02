import { useState } from "react";
import Header from "./components/Header";
import BoxWrapper from "../../../components/ui/BoxWrapper";
import Capture from "./components/Capture/Capture";
import HandleCapture from "./components/Capture/HandleCapture";
import SubmitManualId from "./components/Capture/SubmitManualId";
import NotResultYet from "./components/Result/NotResultYet";
import RegisteredVehicle from "./components/Result/RegisteredVehicle";
import StatusIn from "./components/Status/StatusIn";
import StatusOut from "./components/Status/StatusOut";

export default function ScanQR() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [vehicleStatus, setVehicleStatus] = useState(null);
  const [actionsStatus, setActionsStatus] = useState(null);
  const [searchID, setSearchID] = useState("");

  const [vehicles, setVehicles] = useState([
    {
      id: "QR-2024-002",
      name: "Siti Nurhaliza",
      number_plate: "Z 2029 AH",
      vehicle_type: "Motor",
      registered_since: "20 Januari 2024",
      status: "inside",
    },
  ]);

  const handleSearch = () => {
    if (!searchID) return;

    const found = vehicles.find((item) => item.id === searchID);

    if (found) {
      setScanResult(found);
      setVehicleStatus(found.status);
      setActionsStatus(null);
    } else {
      alert("ID tidak ditemukan");
    }
  };

  const handleScanClick = () => {
    if (isScanning) return;

    setIsScanning(true);

    setTimeout(() => {
      setIsScanning(false);

      const v = vehicles[0];
      setScanResult(v);

      // status awal pertama kali scan
      setVehicleStatus(v?.status ?? "outside");
    }, 2500);
  };

  const resetView = () => {
    setActionsStatus(null);
    setScanResult(null);
    setVehicleStatus(null);
    setSearchID("");
  };

  const handleIn = () => {
    if (!scanResult) return;

    // jika kendaraan diluar, baru boleh masuk
    if (vehicleStatus === "outside") {
      setVehicles((prev) =>
        prev.map((v) =>
          v.id === scanResult.id ? { ...v, status: "inside" } : v
        )
      );

      setVehicleStatus("inside");
    }

    setActionsStatus("in");

    setTimeout(() => {
      resetView();
    }, 2500);
  };

  const handleExit = () => {
    if (!scanResult) return;
    // jika kendaraan diluar, baru boleh masuk
    if (vehicleStatus === "inside") {
      setVehicles((prev) =>
        prev.map((v) =>
          v.id === scanResult.id ? { ...v, status: "outside" } : v
        )
      );

      setVehicleStatus("outside");
    }

    setActionsStatus("out");

    setTimeout(() => {
      resetView();
    }, 2500);
  };

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <Header />
      <div className="mt-6 grid grid-cols-2 gap-x-5">
        <BoxWrapper title="Scanner QR">
          <Capture isScanning={isScanning} />
          <HandleCapture
            handleScanClick={handleScanClick}
            isScanning={isScanning}
          />
          <hr className="h-0.5 bg-[#93A3B6] w-full my-6" />
          <SubmitManualId
            searchID={searchID}
            setSearchID={setSearchID}
            handleSearch={handleSearch}
          />
        </BoxWrapper>
        <BoxWrapper title="Hasil Scan & Konfirmasi">
          <NotResultYet scanResult={scanResult} actionsStatus={actionsStatus} />
          <RegisteredVehicle
            scanResult={scanResult}
            actionsStatus={actionsStatus}
            vehicleStatus={vehicleStatus}
            handleIn={handleIn}
            handleExit={handleExit}
          />
          <StatusIn actionsStatus={actionsStatus} />
          <StatusOut actionsStatus={actionsStatus} />
        </BoxWrapper>
      </div>
    </section>
  );
}
