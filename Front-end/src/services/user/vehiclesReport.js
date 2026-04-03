import api from "../../lib/axios";

//
export const getVehiclesReport = async () => {
  const response = await api.get("/pengendara/dashboard/data-kendaraan");

  return response.data;
};

export const postVehiclesReport = async () => {
  const response = await api.post(
    "/pengendara/dashboard/data-kendaraan/tambah",
  );

  return response.data;
};

export const putVehiclesReport = async (id) => {
  const response = await api.put(
    `pengendara/dashboard/data-kendaraan/${id}/edit`,
  );

  return response.data;
};

export const delVehiclesReport = async (id) => {
  const response = await api.delete(
    `/pengendara/dashboard/data-kendaraan/${id}/delete`,
  );

  return response.data;
};
