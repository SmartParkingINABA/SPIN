import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import RequestOtp from "../features/auth/RequestOtp";
import ResetPassword from "../features/auth/ResetPassword";
import VerifyOtp from "../features/auth/VerifyOtp";
import ConfirmReset from "../features/auth/ConfirmReset";
import NotFoundPage from "../features/not-found/NotFoundPage";
import ForgotLayout from "../layouts/auth/ForgotLayout";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot" element={<ForgotLayout />}>
        <Route index element={<Navigate to="request-otp" replace />} />
        <Route path="request-otp" element={<RequestOtp />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="verify-otp" element={<VerifyOtp />} />
        <Route path="confirm-reset" element={<ConfirmReset />} />
      </Route>
      <Route
        path="*"
        element={
          <NotFoundPage
            title="404 Auth"
            message="Halaman autentikasi tidak ditemukan."
          />
        }
      />
    </Routes>
  );
}
