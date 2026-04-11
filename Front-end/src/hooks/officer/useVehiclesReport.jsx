import { useEffect, useState } from "react";
import { getVehiclesReport } from "../../services/officer/vehiclesReport.Service";

export const useVehiclesReport = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [meta, setMeta] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchVehicles = async () => {
    try {
      setLoading(true);
      const res = await getVehiclesReport();

      const mapped = res.data.map((item) => ({
        plate: item.no_plat,
        name: item.nama_pengendara,
        vehicle: item.jenis,
        checkIn: item.waktu_masuk,
        duration: item.durasi_parkir,
      }));

      setData(mapped);
      setFilteredData(mapped);
      setMeta(res.meta);
    } catch (err) {
      console.error("Error fetch kendaraan parkir:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  useEffect(() => {
    const keyword = search.toLowerCase();

    const filtered = data.filter(
      (item) =>
        item.plate.toLowerCase().includes(keyword) ||
        item.name.toLowerCase().includes(keyword),
    );

    setFilteredData(filtered);
  }, [search, data]);

  return {
    data: filteredData,
    meta,
    loading,
    search,
    setSearch,
  };
};
