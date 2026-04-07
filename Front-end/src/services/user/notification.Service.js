import api from "../../lib/axios";

export const getNotifications = async () => {
  const response = await api.get("/pengendara/dashboard/notifikasi");

  return response.data;
};

export const markAsRead = async (id, type) => {
  const response = await api.patch(
    `/pengendara/dashboard/${id}/read?type=${type}`,
  );

  return response.data;
};

export const markAllAsRead = async (type) => {
  const response = await api.patch(
    `/pengendara/dashboard/notifikasi/read-all?type=${type}`,
  );

  return response.data;
};
