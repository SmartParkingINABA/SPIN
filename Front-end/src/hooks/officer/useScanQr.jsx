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

      setScanResult(res);
      setVehicleStatus(
        res.status_parkir === "Di Dalam Area Parkir" ? "inside" : "outside",
      );
    } catch (err) {
      console.error(err);
      toast.error("QR tidak valid / tidak ditemukan");
    } finally {
      setLoading(false);
    }
  };

  const handleIn = async () => {
    if (!scanResult) return;

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
      toast.error("Gagal konfirmasi masuk");
    } finally {
      setLoading(false);
    }
  };

  const handleOut = async () => {
    if (!scanResult) return;

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
      toast.error("Gagal konfirmasi keluar");
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
