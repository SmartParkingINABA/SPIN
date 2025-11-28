// import Enter from "./pages/Enter";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import ForgotPassword from "./pages/ForgotPassword";
// import Verify from "./pages/Verify";
// import PasswordReset from "./pages/PasswordReset";
// import NewPassword from "./pages/NewPassword";
// import Home from "./pages/Home";
// import Regulation from "./pages/Regulation";
// import UserTerms from "./pages/UserTerms";
// import VehicleRegistration from "./pages/VehicleRegistration";
// import EntryExitAcces from "./pages/EntryExitAcces";
// import AdminDashboard from "./pages/admin/AdminDashboard";
// import AdminVehiclesReport from "./pages/admin/AdminVehiclesReport";
import UserDashboard from "./pages/user/UserDashboard";
import UserVehiclesReport from "./pages/user/UserVehiclesReport";
import MyQRCode from "./pages/user/UserMyQRCode";
import UserParkingHistory from "./pages/user/UserParkingHistory";

import OfficerDashboard from "./pages/officer/OfficerDasboard";

import { Route, Routes } from "react-router-dom";
import UserNotifikasi from "./pages/user/UserNotifikasi";
import UserProfile from "./pages/user/UserProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserDashboard />} />
      <Route path="/report-data" element={<UserVehiclesReport />} />
      <Route path="/my-qr-code" element={<MyQRCode />} />
      <Route path="/parking-history" element={<UserParkingHistory />} />
      <Route path="/notifikasi" element={<UserNotifikasi />} />
      <Route path="/user-profile" element={<UserProfile />} />
    </Routes>
    // <Enter />
    // <Login />
    // <Register />
    // <ForgotPassword />
    // <Verify />
    // <PasswordReset />
    // <NewPassword />
    // <Home />
    // <Regulation />
    // <UserTerms />
    // <VehicleRegistration />
    // <EntryExitAcces />
    // <VehicleSafety />
    // <AdminDashboard />
    // <AdminVehiclesReport />
    //
    // <OfficerDashboard />
  );
}

export default App;
