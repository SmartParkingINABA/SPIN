import { useEffect, useState } from "react";
import {
  getAccountSettings,
  updateProfile,
  uploadPhoto,
  changePassword,
} from "../../services/user/accountSettings.Service";

export const useGetAccountSettings = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDataProfile = async () => {
    try {
      setLoading(true);

      const data = await getAccountSettings();

      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleDataProfile();
  }, []);

  const handleUpdateProfile = async (profileData) => {
    try {
      await updateProfile(profileData);
      handleDataProfile();
    } catch (err) {
      console.error("Gagal update profil:", err);
      throw err;
    }
  };

  const handleUpdatePhoto = async (file) => {
    try {
      const formData = new FormData();
      formData.append("foto_profil", file);
      await uploadPhoto(formData);
      handleDataProfile();
    } catch (err) {
      console.error("Gagal upload foto:", err);
      throw err;
    }
  };

  const handleChangePassword = async (passwordData) => {
    try {
      await changePassword(passwordData);
    } catch (err) {
      console.error("Gagal ganti password:", err);
      throw err;
    }
  };

  return {
    data,
    loading,
    error,
    handleUpdateProfile,
    handleUpdatePhoto,
    handleChangePassword,
  };
};
