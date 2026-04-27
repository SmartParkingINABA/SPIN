import { useEffect, useState } from "react";
import { getProfile, putProfile } from "../../services/officer/profile.Service";
import toast from "react-hot-toast";
import { useAuth } from "../../context/useAuth";

export const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { updateProfileState } = useAuth();

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const res = await getProfile();
      setProfile(res.data);

      if (res.data?.informasi_pribadi) {
        updateProfileState({
          nama_petugas: res.data.informasi_pribadi.nama_petugas,
        });
      }
    } catch (err) {
      console.error("Gagal ambil profile", err);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (payload) => {
    try {
      await putProfile(payload);

      updateProfileState({
        nama_petugas: payload.nama_petugas,
      });

      await fetchProfile();
      toast.success("Berhasil memperbarui profil");
    } catch (err) {
      console.error("Gagal update profile:", err);
    }
  };

  useEffect(() => {
    fetchProfile();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    profile,
    loading,
    updateProfile,
  };
};
