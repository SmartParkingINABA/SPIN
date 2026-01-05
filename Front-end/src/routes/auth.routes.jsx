import { Route, Routes } from "react-router-dom";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import ForgotPassword from "../features/auth/ForgotPassword";
import NewPassword from "../features/auth/NewPassword";
import PasswordReset from "../features/auth/PasswordReset";
import Verify from "../features/auth/Verify";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="new-password" element={<NewPassword />} />
      <Route path="verify" element={<Verify />} />
      <Route path="password-reset" element={<PasswordReset />} />
    </Routes>
  );
}
