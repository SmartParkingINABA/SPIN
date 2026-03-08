import api from "../../lib/axios";

export const mainOverview = async () => {
  const response = await api.get("/pengendara/dashboard/main-overview");

  return response.data;
};
