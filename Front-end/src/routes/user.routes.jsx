import { Route, Routes } from "react-router-dom";

import UserLayout from "../layouts/UserLayout";
import UserDashboard from "../features/user/dashboard/Dashboard";
import UserProfile from "../features/user/profile/Profile";
import UserNotification from "../features/user/notification/Notification";
import UserParkingHistory from "../features/user/parking-history/ParkingHistory";
import UserVehiclesReport from "../features/user/vehicles-report/VehiclesReport";
import UserQRCode from "../features/user/qr-code/QRCode";
import UserNotFound from "../features/not-found/UserNotFound";

export default function UserRoutes() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route index element={<UserDashboard />} />
        <Route path="data-kendaraan" element={<UserVehiclesReport />} />
        <Route path="qr-code-saya" element={<UserQRCode />} />
        <Route path="riwayat-parkir" element={<UserParkingHistory />} />
        <Route path="notifikasi" element={<UserNotification />} />
        <Route path="profil-pengendara" element={<UserProfile />} />
      </Route>
      <Route path="*" element={<UserNotFound />} />
    </Routes>
  );
}
