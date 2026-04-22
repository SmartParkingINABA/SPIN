import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useRef } from "react";
import { MdOutlineCameraAlt } from "react-icons/md";

export default function Capture({ isScanning, onScanSuccess }) {
  const qrRef = useRef(null);
  const scannerRef = useRef(null);

  useEffect(() => {
    if (!isScanning) return;

    const scanner = new Html5Qrcode("qr-reader");
    scannerRef.current = scanner;

    scanner
      .start(
        { facingMode: "environment" },
        {
          fps: 10,
          qrbox: { width: 350, height: 350 },
        },
        (decodedText) => {
          onScanSuccess(decodedText);
          scanner.stop();
        },
        (error) => {
          console.error("Scan Error", error);
        },
      )
      .catch((err) => {
        console.error("Camera error: ", err);
      });

    return () => {
      if (scannerRef.current) {
        scannerRef.current.stop().catch(() => {});
      }
    };
  }, [isScanning, onScanSuccess]);

  return (
    <div className="mt-3.5 bg-[#130F40] h-100 sm:h-130 flex justify-center items-center rounded-md p-7.5 sm:p-0">
      <div className="border-2 border-[rgba(255,236,120,0.5)] rounded-xl w-full h-fit overflow-hidden flex items-center justify-center sm:h-fitsm:w-[50%]">
        {isScanning ? (
          <div id="qr-reader" className="w-full" ref={qrRef}></div>
        ) : (
          <div className="flex flex-col justify-center items-center h-[330px]">
            <MdOutlineCameraAlt className="h-fit w-13 mx-auto text-[#93A3B6] mb-2 sm:mb-3" />
            <p className="text-[#93A3B6] text-center">
              Kamera siap memindai QR Code
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
