import { useEffect, useState } from "react";
import {
  getQrCodeDownload,
  getQrCodePreview,
  getQrCodePrint,
} from "../../services/user/qrCode.service";
import toast from "react-hot-toast";

export const useQrCode = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPreview = async () => {
    try {
      setLoading(true);
      console.log("--- Fetching QR Preview Data ---");

      const res = await getQrCodePreview();
      console.log("Data diterima dari be: ", res);

      setData(res);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    try {
      console.log("--- Requesting QR Download ---");

      const blob = await getQrCodeDownload();
      console.log("Blob diterima: ", blob.type, "Ukuran:", blob.size, "bytes");

      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "qrcode.png");
      document.body.appendChild(link);
      link.click();

      // bersihkan URL memory
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  const handlePrint = async () => {
    try {
      console.log("--- Requesting QR Print ---");

      const res = await getQrCodePrint();
      console.log("Data Print diterima:", res);

      if (res?.print_url) {
        const printWindow = window.open(res.print_url, "_blank");
        printWindow.onload = () => {
          printWindow.print();
        };
      } else {
        toast.error("Print URL tidak ditemukan di respon API");
      }
    } catch (err) {
      console.error("Print failed", err);
    }
  };

  useEffect(() => {
    fetchPreview();
  }, []);

  return { data, loading, error, handleDownload, handlePrint };
};
