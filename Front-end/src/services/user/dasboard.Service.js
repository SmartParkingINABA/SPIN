import api from "../../lib/axios";

export const mainOverview = async () => {
  try {
    const response = await api.get("/pengendara/dashboard/main-overview");

    console.log("Overview API Result:", response.data);

    return response.data;
  } catch (err) {
    console.error("Failed to fetch main overview:", err);
    throw err;
  }
};
