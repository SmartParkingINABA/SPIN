import { Route, Routes } from "react-router-dom";

// AUTH
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import ForgotPassword from "./features/auth/ForgotPassword";
import NewPassword from "./features/auth/NewPassword";
import Verify from "./features/auth/Verify";
import PasswordReset from "./features/auth/PasswordReset";

// PUBLIC
import PublicLayout from "./layouts/PublicLayout";
import Home from "./features/public/Home";
import Regulation from "./features/public/Regulation";
import About from "./features/public/About";
import Enter from "./features/public/Enter";

// USER
import UserLayout from "./layouts/UserLayout";
import UserProfile from "./features/user/profile/Profile";
import UserNotification from "./features/user/notification/Notification";
import UserParkingHistory from "./features/user/parking-history/ParkingHistory";
import UserVehiclesReport from "./features/user/vehicles-report/VehiclesReport";
import UserDashboard from "./features/user/dashboard/Dashboard";
import UserQRCode from "./features/user/qr-code/QRCode";

// Officer
import OfficerLayout from "./layouts/OfficerLayout";
import OfficerDashboard from "./features/officer/dashboard/Dashboard";
import OfficerVehiclesReport from "./features/officer/vehicles-report/VehiclesReport";
import OfficerScanQR from "./features/officer/scan-qr/ScanQR";
import OfficerParkingHistory from "./features/officer/parking-history/ParkingHistory";
import OfficerNotifikasi from "./features/officer/notification/Notifikasi";
import OfficerProfile from "./features/officer/profile/Profile";

// admin
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./features/admin/dasboard/Dasboard";
import Officer from "./features/admin/officers/Officer";
import Rider from "./features/admin/riders/Rider";
import Vehicles from "./features/admin/vehicles/Vehicles";
import IncomingVehicle from "./features/admin/incoming-vehicle/IncomingVehicle";
import VehicleOut from "./features/admin/vehicle-out/VehicleOut";
import ActiveParking from "./features/admin/active-parking/ActiveParking";
import Notification from "./features/admin/notification/Notification";
import Report from "./features/admin/reports/Reports";
import Setting from "./features/admin/setting/Setting";

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
        <Route path="notifikasi" element={<UserNotification />} />
        <Route path="user-profile" element={<UserProfile />} />
      </Route>

      {/* ADMIN DASBOARD*/}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="parking-attendant" element={<Officer />} />
        <Route path="rider" element={<Rider />} />
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="incoming-vehicle" element={<IncomingVehicle />} />
        <Route path="vehicle-out" element={<VehicleOut />} />
        <Route path="active-parking" element={<ActiveParking />} />
        <Route path="notification" element={<Notification />} />
        <Route path="report" element={<Report />} />
        <Route path="account-settings" element={<Setting />} />
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
