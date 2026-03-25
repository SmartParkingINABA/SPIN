import { useCallback, useEffect, useState } from "react";
import {
  getExportDataParking,
  getParkingHistory,
} from "../../services/user/parkingHistory.Service";
import toast from "react-hot-toast";

export const useParkingHistory = () => {
  const [data, setData] = useState({ stats: [], history: [] });
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    status: "Semua Status",
    vehicle: "Semua Kendaraan",
  });

  const fetchHistory = useCallback(async () => {
    try {
      setLoading(true);

      const res = await getParkingHistory();
      setData({ stats: res.stats || {}, history: res.history || [] });
    } catch (err) {
      console.error("Gagal memuat riwayat parkir", err);
      toast.error("Gagal memuat riwayat parkir");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  const handleExport = async () => {
    try {
      toast.loading("Mengunduh data...", { id: "export" });
      const res = await getExportDataParking();

      if (res.url) {
        window.open(res.url, "_blank");
      }

      toast.success("Data berhasil diekspor", { id: "export" });
    } catch (err) {
      console.error("Gagal ekspor data", err);
      toast.error("Gagal ekspor data");
    }
  };

  return {
    data,
    loading,
    filters,
    setFilters,
    handleExport,
    refresh: fetchHistory,
  };
};
