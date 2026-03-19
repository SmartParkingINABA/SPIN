import api from "../../lib/axios";

export const getNotifications = async () => {
  const response = api.get("/pengendara/dashboard/notifikasi");

  return response.data;
};

export const markAsRead = async (id) => {
  const response = api.patch(`/pengendara/dashboard/${id}/read`);

  return response.data;
};

export const markAllAsRead = async () => {
  const response = api.patch("/pengendara/dashboard/notifikasi/read-all");

  return response.data;
};
