import { Route, Routes } from "react-router-dom";

// AUTH
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

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
import MyQRCode from "./pages/user/UserMyQRCode"; // perbaiki nama

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
      </Route>

      {/* USER DASBOARD */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<UserDashboard />} />
        <Route path="report-data" element={<UserVehiclesReport />} />
        <Route path="my-qr-code" element={<MyQRCode />} />
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
