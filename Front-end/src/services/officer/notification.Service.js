import api from "../../lib/axios";

export const getAllNotification = async (params) => {
  const response = await api.get("/petugas/dashboard/notifikasi", {
    params,
  });

  return response.data;
};

export const putReadNotification = async (id) => {
  const response = await api.put(`/petugas/dashboard/${id}/read`);

  return response.data;
};

export const putReadAllNotification = async () => {
  const response = await api.put("/petugas/dashboard/notifikasi/read-all");

  return response.data;
};
