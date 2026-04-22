import { useState } from "react";
import {
  getScanQr,
  postScanKeluar,
  postScanMasuk,
} from "../../services/officer/scanQr.Service";
import toast from "react-hot-toast";

export const useScanQr = () => {
  const [loading, setLoading] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [vehicleStatus, setVehicleStatus] = useState(null);
  const [actionsStatus, setActionsStatus] = useState(null);
  const [message, setMessage] = useState(null);

  const mapVehicleStatus = (status) => {
    if (!status) return "outside";

    const s = status.toLowerCase();

    if (s.includes("luar")) return "outside";
    if (s.includes("sedang") || s.includes("dalam")) return "inside";

    return "outside";
  };

  const reset = () => {
    setScanResult(null);
    setVehicleStatus(null);
    setActionsStatus(null);
    setMessage(null);
  };

  const scanQr = async (qr_code) => {
    try {
      setLoading(true);

      const res = await getScanQr(qr_code);

      console.log("SCAN RESULT:", res);
      console.log("STATUS:", res.status_parkir);

      setScanResult(res);

      const mappedStatus = mapVehicleStatus(res.status_parkir);
      console.log("STATUS MAPPED:", mappedStatus);

      setVehicleStatus(mappedStatus);
      setActionsStatus(null);
    } catch (err) {
      console.error(err);
      toast.error("QR tidak valid / tidak ditemukan");
    } finally {
      setLoading(false);
    }
  };

  const handleIn = async () => {
    if (!scanResult) return;

    if (vehicleStatus === "inside") {
      toast.error("Kendaraan sudah berada di dalam parkir");
      return;
    }

    try {
      setLoading(true);

      const res = await postScanMasuk({
        qr_code: scanResult.qr_code,
      });

      setActionsStatus("in");
      setMessage(res);
      setVehicleStatus("inside");
      toast.success(res.judul);

      setTimeout(() => {
        reset();
      }, 2500);
    } catch (err) {
      console.error(err);

      if (err?.response?.status === 409) {
        toast.error("Kendaraan sudah masuk sebelumnya");
      } else {
        toast.error("Gagal konfirmasi masuk");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleOut = async () => {
    if (!scanResult) return;

    if (vehicleStatus === "outside") {
      toast.error("Kendaraan sudah berada di luar parkir");
      return;
    }

    try {
      setLoading(true);

      const res = await postScanKeluar({
        qr_code: scanResult.qr_code,
      });

      setActionsStatus("out");
      setMessage(res);
      setVehicleStatus("outside");
      toast.success(res.judul);

      setTimeout(() => {
        reset();
      }, 2500);
    } catch (err) {
      console.error(err);

      if (err?.response?.status === 409) {
        toast.error("Kendaraan sudah keluar sebelumnya");
      } else {
        toast.error("Gagal konfirmasi keluar");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    scanResult,
    vehicleStatus,
    actionsStatus,
    message,
    scanQr,
    handleIn,
    handleOut,
    reset,
  };
};
