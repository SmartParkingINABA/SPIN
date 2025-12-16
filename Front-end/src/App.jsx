import { Route, Routes } from "react-router-dom";

// AUTH
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import NewPassword from "./pages/auth/NewPassword";
import Verify from "./pages/auth/Verify";
import PasswordReset from "./pages/auth/PasswordReset";

// PUBLIC
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/public/Home";
import Regulation from "./pages/public/Regulation";
import About from "./pages/public/About";
import Enter from "./pages/public/Enter";

// USER
import UserLayout from "./layouts/UserLayout";
import UserProfile from "./pages/user/UserProfile";
import UserNotifikasi from "./pages/user/UserNotifikasi";
import UserParkingHistory from "./pages/user/UserParkingHistory";
import UserVehiclesReport from "./pages/user/UserVehiclesReport";
import UserDashboard from "./pages/user/UserDashboard";
import UserQRCode from "./pages/user/UserQRCode";

// Officer
import OfficerLayout from "./layouts/OfficerLayout";
import OfficerDashboard from "./pages/officer/OfficerDasboard";
import OfficerVehiclesReport from "./pages/officer/OfficerVehiclesReport";
import OfficerScanQR from "./pages/officer/OfficerScanQR";
import OfficerParkingHistory from "./pages/officer/OfficerParkingHistory";
import OfficerNotifikasi from "./pages/officer/OfficerNotifikasi";
import OfficerProfile from "./pages/officer/OfficerProfile";

// admin
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminParkingOfficer from "./pages/admin/AdminParkingOfficer";
import AdminRider from "./pages/admin/AdminRider";
import AdminVehicles from "./pages/admin/AdminVehicles";
import AdminIncomingVehicle from "./pages/admin/AdminIncomingVehicle";
import AdminVehicleOut from "./pages/admin/AdminVehicleOut";
import AdminActiveParking from "./pages/admin/AdminActiveParking";
import AdminNotification from "./pages/admin/AdminNotification";
import AdminReport from "./pages/admin/AdminReport";
import AdminAccountSettings from "./pages/admin/AdminAccountSettings";

function App() {
  return (
    <Routes>
      {/* PUBLIC DASBOARD */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/regulation" element={<Regulation />} />
        <Route path="/about" element={<About />} />
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
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="parking-attendant" element={<AdminParkingOfficer />} />
        <Route path="rider" element={<AdminRider />} />
        <Route path="vehicles" element={<AdminVehicles />} />
        <Route path="incoming-vehicle" element={<AdminIncomingVehicle />} />
        <Route path="vehicle-out" element={<AdminVehicleOut />} />
        <Route path="active-parking" element={<AdminActiveParking />} />
        <Route path="notification" element={<AdminNotification />} />
        <Route path="report" element={<AdminReport />} />
        <Route path="account-settings" element={<AdminAccountSettings />} />
      </Route>

      {/* OFFICER DASBOARD */}
      <Route path="/officer" element={<OfficerLayout />}>
        <Route index element={<OfficerDashboard />} />
        <Route path="report-data" element={<OfficerVehiclesReport />} />
        <Route path="scan-qr-code" element={<OfficerScanQR />} />
        <Route path="parking-history" element={<OfficerParkingHistory />} />
        <Route path="notifikasi" element={<OfficerNotifikasi />} />
        <Route path="officer-profile" element={<OfficerProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
