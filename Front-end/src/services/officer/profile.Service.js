import api from "../../lib/axios";

export const getProfile = async () => {
  const response = await api.get("/petugas/dashboard/profil");

  return response.data;
};

export const putProfile = async (payload) => {
  const response = await api.put("/petugas/dashboard/profil", payload);

  return response.data;
};
