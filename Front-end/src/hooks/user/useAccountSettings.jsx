import { useEffect, useState } from "react";
import {
  getAccountSettings,
  updateProfile,
  uploadPhoto,
  changePassword,
} from "../../services/user/accountSettings.Service";
import toast from "react-hot-toast";
import { useAuth } from "../../context/useAuth";

export const useGetAccountSettings = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { updateProfileState } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);

        const res = await getAccountSettings();

        setData(res);

        if (res?.profil) {
          updateProfileState({
            nama_pengendara: res.profil.nama_pengendara,
            foto_profil: res.profil.foto_profil,
          });
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdateProfile = async (profileData) => {
    try {
      await updateProfile(profileData);

      updateProfileState(profileData);

      const res = await getAccountSettings();
      setData(res);
    } catch (err) {
      console.error("Gagal update profil:", err);
      throw err;
    }
  };

  const handleUpdatePhoto = async (file) => {
    try {
      const formData = new FormData();
      formData.append("foto_profil", file);
      const response = await uploadPhoto(formData);

      const res = await getAccountSettings();
      setData(res);

      if (res?.profil) {
        updateProfileState({
          nama_pengendara: res.profil.nama_pengendara,
          foto_profil: res.profil.foto_profil,
        });
      }

      toast.success(
        response.message || "Foto profil berhasil diperbarui! oke.",
      );
    } catch (err) {
      console.error("Gagal upload:", err);
      toast.error("Gagal memperbarui foto");
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
