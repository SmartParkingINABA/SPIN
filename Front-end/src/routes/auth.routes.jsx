import { Route, Routes } from "react-router-dom";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import RequestOtp from "../features/auth/RequestOtp";
import ResetPassword from "../features/auth/ResetPassword";
import VerifyOtp from "../features/auth/VerifyOtp";
import ConfirmReset from "../features/auth/ConfirmReset";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot">
        <Route path="request-otp" element={<RequestOtp />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="verify-otp" element={<VerifyOtp />} />
        <Route path="confirm-reset" element={<ConfirmReset />} />
      </Route>
    </Routes>
  );
}
