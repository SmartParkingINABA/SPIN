import { useEffect, useMemo, useState } from "react";
import { getParkingHistory } from "../../services/officer/parkingHistory.Service";

export const useParkingHistory = () => {
  const [rawData, setRawData] = useState([]);
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, serError] = useState(null);

  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
  });

  const fetchParkingHistory = async () => {
    try {
      setLoading(true);
      const res = await getParkingHistory();

      setMeta(res.meta);

      const mappedData = res.data.map((item) => ({
        date: item.tanggal,
        plate: item.no_plat,
        name: item.nama_pengendara,
        checkIn: item.jam_masuk,
        checkOut: item.jam_keluar,
        duration: typeof item.durasi === "number" ? "-" : item.durasi,
        status: item.status,
      }));

      setRawData(mappedData);
    } catch (err) {
      serError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParkingHistory();
  }, []);

  const filteredData = useMemo(() => {
    if (!search) return rawData;

    return rawData.filter(
      (item) =>
        item.plate.toLowerCase().includes(search.toLowerCase()) ||
        item.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [rawData, search]);

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      total: filteredData.length,
      page: 1,
    }));
  }, [filteredData]);

  const paginatedData = useMemo(() => {
    const start = (pagination.page - 1) * pagination.limit;
    const end = start + pagination.limit;

    return filteredData.slice(start, end);
  }, [filteredData, pagination]);

  return {
    data: paginatedData,
    meta,
    loading,
    error,
    search,
    setSearch,
    pagination,
    setPagination,
    refresh: fetchParkingHistory,
  };
};
