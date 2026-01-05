export const validateEmail = (value) => {
  if (!value) return "Email tidak boleh kosong";
  if (!/\S+@\S+\.\S+/.test(value)) return "Format email tidak valid";
  return "";
};

export const validatePassword = (value) => {
  if (!value) return "Password tidak boleh kosong";
  if (value.length < 8) return "Panjang password minimal 8 karakter ";
  if (!/\d/.test(value)) return "Password harus mengandung angka";
  return "";
};

export const validateConfirmPassword = (confirm, values) => {
  if (!confirm) return "Mohon ulangi password";
  if (values.password !== confirm) return "Password tidak sama";
  return "";
};
