import { Route, Routes } from "react-router-dom";

import UserLayout from "../layouts/UserLayout";
import UserDashboard from "../features/user/dashboard/Dashboard";
import UserProfile from "../features/user/profile/Profile";
import UserNotification from "../features/user/notification/Notification";
import UserParkingHistory from "../features/user/parking-history/ParkingHistory";
import UserVehiclesReport from "../features/user/vehicles-report/VehiclesReport";
import UserQRCode from "../features/user/qr-code/QRCode";

export default function UserRoutes() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route index element={<UserDashboard />} />
        <Route path="report-data" element={<UserVehiclesReport />} />
        <Route path="my-qr-code" element={<UserQRCode />} />
        <Route path="parking-history" element={<UserParkingHistory />} />
        <Route path="notifikasi" element={<UserNotification />} />
        <Route path="user-profile" element={<UserProfile />} />
      </Route>
    </Routes>
  );
}
