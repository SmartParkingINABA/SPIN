import { useEffect, useState } from "react";
import {
  getQrCodeDownload,
  getQrCodePreview,
  getQrCodePrint,
} from "../../services/user/qrCode.service";

export const useQrCode = () => {
  const [data, setData] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPreview = async (id = null) => {
    try {
      setLoading(true);
      console.log("--- Fetching QR Preview Data ---");

      const res = await getQrCodePreview(id);
      console.log("Data diterima dari be: ", res);
      setData(res);

      if (!id && res?.selected?.id) {
        setSelectedId(res.selected.id);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectVehicle = (id) => {
    setSelectedId(id);
    fetchPreview(id);
  };

  const handleDownload = async () => {
    try {
      console.log("--- Requesting QR Download ---");

      const blob = await getQrCodeDownload(selectedId);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "qrcode.png";
      link.click();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  const handlePrint = async () => {
    try {
      const blob = await getQrCodePrint(selectedId);
      const url = window.URL.createObjectURL(blob);
      const printWindow = window.open(url);

      printWindow.onload = () => {
        printWindow.print();
      };
    } catch (err) {
      console.error("Print failed", err);
    }
  };

  useEffect(() => {
    fetchPreview();
  }, []);

  return {
    data,
    loading,
    error,
    selectedId,
    handleSelectVehicle,
    handleDownload,
    handlePrint,
  };
};
