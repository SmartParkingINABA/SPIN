export const validateEmail = (value) => {
  if (!value) return "Email tidak boleh kosong";
  if (!/\S+@\S+\.\S+/.test(value)) return "Format email tidak valid";
  return "";
};

export const validatePassword = (value) => {
  if (!value) return "Password tidak boleh kosong";
  if (value.length < 8) return "Panjang password Max 8 karakter";
  if (!/^[A-Z]/.test(value)) return "Password harus diawali huruf besar";
  if (!/\d/.test(value)) return "Password harus mengandung angka";
  if (!/[!@$%&*?]/.test(value))
    return "Password harus mengandung simbol (contoh: ! @ $ % & * ?)";
  return "";
};

export const validateConfirmPassword = (confirm, values) => {
  if (!confirm) return "Mohon ulangi password";
  if (values.password !== confirm) return "Password tidak sama";
  return "";
};

export const validateOtp = (otp) => {
  if (!otp) return "Kode OTP wajib diisi!";
  if (!/^\d{4}$/.test(otp)) return "Kode OTP harus 4 digit angka!";
  return "";
};
