import { Route, Routes } from "react-router-dom";

// AUTH
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import NewPassword from "./pages/auth/NewPassword";
import Verify from "./pages/auth/Verify";

// PUBLIC
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/public/Home";
import Enter from "./pages/public/Enter";

// USER
import UserLayout from "./layouts/UserLayout";
import UserProfile from "./pages/user/UserProfile";
import UserNotifikasi from "./pages/user/UserNotifikasi";
import UserParkingHistory from "./pages/user/UserParkingHistory";
import UserVehiclesReport from "./pages/user/UserVehiclesReport";
import UserDashboard from "./pages/user/UserDashboard";
import UserQRCode from "./pages/user/UserQRCode";
import PasswordReset from "./pages/auth/PasswordReset";

function App() {
  return (
    <Routes>
      {/* PUBLIC DASBOARD */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/enter" element={<Enter />} />
      </Route>

      {/* AUTH PAGES */}
      <Route path="/auth">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="new-password" element={<NewPassword />} />
        <Route path="verify" element={<Verify />} />
        <Route path="password-reset" element={<PasswordReset />} />
      </Route>

      {/* USER DASBOARD */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<UserDashboard />} />
        <Route path="report-data" element={<UserVehiclesReport />} />
        <Route path="my-qr-code" element={<UserQRCode />} />
        <Route path="parking-history" element={<UserParkingHistory />} />
        <Route path="notifikasi" element={<UserNotifikasi />} />
        <Route path="user-profile" element={<UserProfile />} />
      </Route>

      {/* ADMIN DASBOARD*/}

      {/* OFFICER DASBOARD */}
    </Routes>
  );
}

export default App;
