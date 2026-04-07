import api from "../../lib/axios";

export const getParkingHistory = async (params) => {
  const response = await api.get("/pengendara/dashboard/riwayat-parkir", {
    params,
  });
  return response.data;
};

export const getExportDataParking = async (params) => {
  const response = await api.get(
    "/pengendara/dashboard/riwayat-parkir/export",
    {
      params,
      responseType: "blob",
    },
  );

  return response.data;
};
