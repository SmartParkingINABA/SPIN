import api from "../../lib/axios";

export const getVehiclesReport = async () => {
  const response = await api.get("/petugas/dashboard/kendaraan-parkir");

  return response.data;
};
