import { useCallback, useEffect, useState } from "react";
import { getVehiclesReport } from "../../services/officer/vehiclesReport.Service";

export const useVehiclesReport = () => {
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
  });

  const fetchVehicles = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getVehiclesReport({
        page: pagination.page,
        limit: pagination.limit,
      });

      const mapped = res.data.map((item) => ({
        plate: item.no_plat,
        name: item.nama_pengendara,
        vehicle: item.jenis,
        checkIn: item.waktu_masuk,
        duration: item.durasi_parkir,
      }));

      setData(mapped);
      setMeta(res.meta);

      setPagination((prev) => ({
        ...prev,
        total: res.meta.total_data,
      }));
    } catch (err) {
      console.error("Error fetch kendaraan parkir:", err);
    } finally {
      setLoading(false);
    }
  }, [pagination.page, pagination.limit]);

  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  const filteredData = data.filter(
    (item) =>
      item.plate.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return {
    data: filteredData,
    meta,
    loading,
    search,
    setSearch,
    pagination,
    setPagination,
  };
};
