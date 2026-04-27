import api from "../../lib/axios";

export const getScanQr = async (qr_code) => {
  const response = await api.get("/petugas/dashboard/scan-qr", {
    params: { qr_code },
  });

  return response.data;
};

export const postScanMasuk = async (data) => {
  const response = await api.post("/petugas/dashboard/scan-qr/masuk", data);

  return response.data;
};

export const postScanKeluar = async (data) => {
  const response = await api.post("/petugas/dashboard/scan-qr/keluar", data);

  return response.data;
};
