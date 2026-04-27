import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    const storedProfile = localStorage.getItem("user_profile");

    if (!storedUser) return null;

    const userData = JSON.parse(storedUser);
    const profileData = storedProfile ? JSON.parse(storedProfile) : {};

    return {
      ...userData,
      ...profileData,
      displayName:
        profileData?.nama_pengendara ||
        profileData?.nama_petugas ||
        userData?.email,
    };
  });

  const saveUser = (userData) => {
    const storedProfile = JSON.parse(
      localStorage.getItem("user_profile") || "{}",
    );

    const displayName =
      storedProfile?.nama_pengendara ||
      storedProfile.nama_petugas ||
      userData.email;

    const combinedData = { ...userData, ...storedProfile, displayName };

    setUser(combinedData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const updateProfileState = (newProfileData) => {
    setUser((prev) => {
      const updatedProfile = { ...prev, ...newProfileData };

      const displayName =
        newProfileData?.nama_pengendara ||
        newProfileData?.nama_petugas ||
        prev?.displayName;

      const finalData = {
        ...updatedProfile,
        displayName,
      };

      const existingProfile = JSON.parse(
        localStorage.getItem("user_profile") || "{}",
      );
      const mergedProfile = { ...existingProfile, ...newProfileData };
      localStorage.setItem("user_profile", JSON.stringify(mergedProfile));

      window.dispatchEvent(
        new CustomEvent("profile-updated", { detail: finalData }),
      );

      return finalData;
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("user_profile");
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser: saveUser, updateProfileState, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
