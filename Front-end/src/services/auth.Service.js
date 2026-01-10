import api from "../lib/axios";

export const login = async (email, password) => {
  const response = await api.post("/auth/login", {
    email,
    password_users: password,
  });

  return response.data;
};

export const register = async (email, password, roleId) => {
  const response = await api.post("/auth/register", {
    email,
    password_users: password,
    role_id: roleId,
  });

  return response.data;
};

export const requestOtp = async (email) => {
  const response = await api.post("/auth/forgot/request-otp", { email });
  return response.data;
};

export const verifyOtp = async (otp) => {
  const response = await api.post("/auth/forgot/verify-otp", { otp });
  return response.data;
};

export const resetPassword = async (newPassword) => {
  const response = await api.post("/auth/forgot/reset-password", {
    new_password: newPassword,
  });

  return response.data;
};
