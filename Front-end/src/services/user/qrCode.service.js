import api from "../../lib/axios";

export const getQrCodePreview = async (kendaraan_id) => {
  const response = await api.get("/pengendara/dashboard/qr-code-saya/preview", {
    params: { kendaraan_id },
  });

  return response.data;
};

export const getQrCodeDownload = async (kendaraan_id) => {
  const response = await api.get(
    "/pengendara/dashboard/qr-code-saya/download",
    { params: { kendaraan_id }, responseType: "blob" },
  );

  return response.data;
};

export const getQrCodePrint = async (kendaraan_id) => {
  const response = await api.get("/pengendara/dashboard/qr-code-saya/print", {
    params: { kendaraan_id },
    responseType: "blob",
  });

  return response.data;
};
