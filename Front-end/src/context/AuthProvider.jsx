import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    const storedProfile = localStorage.getItem("user_profile");

    if (!storedUser) return null;

    const userData = JSON.parse(storedUser);
    const profileData = storedProfile ? JSON.parse(storedProfile) : {};

    return { ...userData, ...profileData };
  });

  const saveUser = (userData) => {
    const storedProfile = JSON.parse(
      localStorage.getItem("user_profile") || "{}",
    );
    const combinedData = { ...userData, ...storedProfile };

    setUser(combinedData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const updateProfileState = (newProfileData) => {
    setUser((prev) => ({ ...prev, ...newProfileData }));
    localStorage.setItem("user_profile", JSON.stringify(newProfileData));
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
