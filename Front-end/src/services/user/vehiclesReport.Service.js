import api from "../../lib/axios";

//
export const getVehiclesReport = async () => {
  const response = await api.get("/pengendara/dashboard/data-kendaraan");

  return response.data.map((item) => ({
    id: item.id_kendaraan,
    plate: item.no_plat,
    brand: item.merk,
    category: item.jenis,
    color: item.warna,
    cc: item.cc,
    year: item.tahun_keluaran,
    validUntil: item.masa_berlaku
      ? new Date(item.masa_berlaku).toLocaleDateString("id-ID")
      : "-",
    status: item.status,
    hasQr: item.status === "Aktif",
  }));
};

export const postVehiclesReport = async (payload) => {
  const response = await api.post(
    "/pengendara/dashboard/data-kendaraan/tambah",
    {
      no_plat: payload.plate,
      merk: payload.brand,
      jenis: payload.category,
      warna: payload.color,
      cc: Number(payload.cc),
      tahun_keluaran: Number(payload.year),
      masa_berlaku: payload.validUntil,
    },
  );

  return response.data;
};

export const putVehiclesReport = async (id, payload) => {
  const response = await api.put(
    `/pengendara/dashboard/data-kendaraan/${id}/edit`,
    {
      warna: payload.color,
      cc: Number(payload.cc),
      tahun_keluaran: Number(payload.year),
    },
  );

  return response.data;
};

export const delVehiclesReport = async (id) => {
  const response = await api.delete(
    `/pengendara/dashboard/data-kendaraan/${id}/delete`,
  );

  return response.data;
};
