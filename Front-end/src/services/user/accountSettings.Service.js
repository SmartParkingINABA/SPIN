import api from "../../lib/axios";

export const getAccountSettings = async () => {
  const response = await api.get("/pengendara/dashboard/pengaturan-profil");

  return response.data;
};

export const updateProfile = async (profileData) => {
  const response = await api.put(
    "/pengendara/dashboard/pengaturan-profil/profile",
    profileData,
  );

  return response.data;
};

export const uploadPhoto = async (formData) => {
  const response = await api.put(
    "/pengendara/dashboard/pengaturan-profil/upload/photo",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );

  return response.data;
};

export const changePassword = async (passwordData) => {
  const response = await api.put(
    "/pengendara/dashboard/pengaturanprofil/changepassword",
    passwordData,
  );

  return response.data;
};
