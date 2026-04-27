import api from "../../lib/axios";

export const getVehiclesReport = async (params) => {
  const response = await api.get("/petugas/dashboard/kendaraan-parkir", {
    params,
  });

  return response.data;
};
