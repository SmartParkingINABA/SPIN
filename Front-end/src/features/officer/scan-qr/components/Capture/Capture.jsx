/* eslint-disable no-unused-vars */
import { Html5Qrcode } from "html5-qrcode";
import { useCallback, useEffect, useRef, useState } from "react";
import { MdOutlineCameraAlt } from "react-icons/md";

export default function Capture({ isScanning, onScanSuccess }) {
  const qrRef = useRef(null);
  const scannerRef = useRef(null);
  const isRunningRef = useRef(false);
  const [qrSize, setQrSize] = useState(200);

  const calculateQrSize = useCallback(() => {
    if (!qrRef.current) return 200;
    const width = qrRef.current.offsetWidth;
    return Math.min(width * 0.7, 300);
  }, []);

  useEffect(() => {
    scannerRef.current = new Html5Qrcode("qr-reader");

    return () => {
      if (scannerRef.current) {
        scannerRef.current.stop().catch(() => {});
        scannerRef.current.clear();
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setQrSize(calculateQrSize());
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [calculateQrSize]);

  useEffect(() => {
    const scanner = scannerRef.current;
    if (!scanner) return;

    const start = async () => {
      if (isRunningRef.current) return;

      try {
        await scanner.start(
          {
            facingMode: "environment",
          },
          {
            fps: 10,
            qrbox: { width: qrSize, height: qrSize },
          },
          (decodedText) => {
            onScanSuccess(decodedText);
            stop();
          },
        );

        isRunningRef.current = true;
      } catch (err) {
        console.error("Camera error:", err);
      }
    };

    const stop = async () => {
      if (!isRunningRef.current) return;

      try {
        await scanner.stop();
        // eslint-disable-next-line no-empty
      } catch (_) {}

      isRunningRef.current = false;
    };

    if (isScanning) start();
    else stop();
  }, [isScanning, qrSize, onScanSuccess]);

  return (
    <div className="mt-3.5 bg-[#130F40] h-100 sm:h-130 flex justify-center items-center rounded-md p-6">
      <div
        ref={qrRef}
        className="border-2 border-[rgba(255,236,120,0.5)] rounded-xl w-full h-[300px] overflow-hidden flex items-center justify-center"
      >
        <div id="qr-reader" className="w-full h-full"></div>

        {!isScanning && (
          <div className="absolute flex flex-col justify-center items-center">
            <MdOutlineCameraAlt className="h-fit w-13 text-[#93A3B6] mb-2 sm:mb-3" />
            <p className="text-[#93A3B6] text-center">
              Kamera siap memindai QR Code
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
