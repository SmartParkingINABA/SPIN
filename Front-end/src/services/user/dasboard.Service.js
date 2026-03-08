import api from "../../lib/axios";

export const mainOverview = async () => {
  const response = await api.get("/pengendara/dashboard/main-overview");

  console.log("FULL RESPONSE:", response);
  console.log("DATA:", response.data);

  return response.data;
};
