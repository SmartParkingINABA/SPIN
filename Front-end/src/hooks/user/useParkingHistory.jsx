import { useCallback, useEffect, useState } from "react";
import {
  getExportDataParking,
  getParkingHistory,
} from "../../services/user/parkingHistory.Service";
import toast from "react-hot-toast";

export const useParkingHistory = () => {
  const [data, setData] = useState({
    stats: {},
    history: [],
    kendaraanList: [],
  });
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    status: "all",
    kendaraan_id: "all",
  });

  const fetchHistory = useCallback(async () => {
    try {
      setLoading(true);

      const res = await getParkingHistory(filters);
      const backendData = res.data;

      console.log("FULL RESPONSE:", res);
      console.log("DATA:", res.data);

      setData({
        stats: backendData.summary || {},
        kendaraanList: backendData.kendaraan_list || [],
        history:
          backendData.riwayat?.data.map((item, index) => ({
            id: index,
            plat: item.plat_nomor,
            tanggal: item.tanggal_masuk,
            jam_masuk: item.jam_masuk,
            jam_keluar: item.jam_keluar,
            durasi: item.durasi,
            status: item.status,
          })) || [],
      });
    } catch (err) {
      console.error("Gagal memuat riwayat parkir", err);
      toast.error("Gagal memuat riwayat parkir");
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  const handleExport = async () => {
    try {
      toast.loading("Mengunduh data...", { id: "export" });
      const blob = await getExportDataParking(filters);
      const url = window.URL.createObjectURL(blob);
      console.log(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "riwayat-parkir.csv");
      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
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
  };
};
