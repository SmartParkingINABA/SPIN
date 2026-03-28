import api from "../../lib/axios";

export const getQrCodePreview = async () => {
  const response = await api.get("/dashboard/qr-code-saya/preview");

  return response.data;
};

export const getQrCodeDownload = async () => {
  const response = await api.get(
    "/pengendara/dashboard/qr-code-saya/download",
    { responseType: "blob" },
  );

  return response.data;
};

export const getQrCodePrint = async () => {
  const response = await api.get("/pengendara/dashboard/qr-code-saya/print");

  return response.data;
};
