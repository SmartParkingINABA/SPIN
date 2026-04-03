import { useEffect, useState } from "react";
import {
  delVehiclesReport,
  getVehiclesReport,
  postVehiclesReport,
  putVehiclesReport,
} from "../../services/user/vehiclesReport";

export const useVehiclesReport = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVehicles = async () => {
    try {
      setLoading(true);
      const res = await getVehiclesReport();
      console.log("[GET] Data kendaraan dari BE:", res);
      setVehicles(res);
    } catch (err) {
      console.error("[GET] Error fetching vehicles:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addVehicle = async (payload) => {
    try {
      console.log("[POST] Mengirim data baru:", payload);
      const res = await postVehiclesReport(payload);
      console.log("[POST] Response BE (Tambah):", res);
      fetchVehicles();
      return { success: true };
    } catch (err) {
      console.error("[POST] Error tambah kendaraan:", err);
      return { success: false, error: err.message };
    }
  };

  const updateVehicle = async (id, payload) => {
    try {
      console.log(`[PUT] Update ID ${id} dengan data:`, payload);
      const res = await putVehiclesReport(id, payload);
      console.log("[PUT] Response BE (update):", res);
      await fetchVehicles();
      return { success: true };
    } catch (err) {
      console.error("[PUT] error update kendaraan:", err);
      return { success: false, error: err.message };
    }
  };

  const deleteVehicle = async (id) => {
    if (!window.confirm("Apakah anda yakin ingin menghapus kendaraan ini?"))
      return;
    try {
      console.log(`[DEL] menghapus kendaraan ID: ${id}`);
      const res = await delVehiclesReport(id);
      console.log("[DEL] response be (hapus):", res);
      fetchVehicles();
    } catch (err) {
      console.error("[DEL] error hapus kendaraan:", err);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return {
    vehicles,
    loading,
    error,
    addVehicle,
    updateVehicle,
    deleteVehicle,
    refresh: fetchVehicles,
  };
};
