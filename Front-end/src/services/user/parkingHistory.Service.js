import api from "../../lib/axios";

export const getParkingHistory = async () => {
  const response = await api.get("/pengendara/dashboard/riwayat-parkir");

  return response.data;
};

export const getExportDataParking = async () => {
  const response = await api.get("/pengendara/dashboard/riwayat-parkir/export");

  return response.data;
};
