import { useEffect, useState } from "react";
import { getProfile, putProfile } from "../../services/officer/profile.Service";
import toast from "react-hot-toast";

export const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const res = await getProfile();
      setProfile(res.data);
    } catch (err) {
      console.error("Gagal ambil profile", err);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (payload) => {
    try {
      await putProfile(payload);
      await fetchProfile();
      toast.success("Berhasil memperbarui profil");
    } catch (err) {
      console.error("Gagal update profile:", err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return {
    profile,
    loading,
    updateProfile,
  };
};
