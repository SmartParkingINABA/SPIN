import api from "../../lib/axios";

export const getParkingHistory = async () => {
  const response = await api.get("/petugas/dashboard/riwayat-parkir");

  return response.data;
};
