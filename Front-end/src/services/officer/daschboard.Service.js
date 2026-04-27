import api from "../../lib/axios";

export const getDashboard = async () => {
  const response = await api.get("/petugas/dashboard/main-overview");

  return response.data;
};
