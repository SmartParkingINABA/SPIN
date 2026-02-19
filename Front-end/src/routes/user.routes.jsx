import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";

const UserDashboard = lazy(
  () => import("../features/user/dashboard/Dashboard"),
);
const UserProfile = lazy(() => import("../features/user/profile/Profile"));
const UserNotification = lazy(
  () => import("../features/user/notification/Notification"),
);
const UserParkingHistory = lazy(
  () => import("../features/user/parking-history/ParkingHistory"),
);
const UserVehiclesReport = lazy(
  () => import("../features/user/vehicles-report/VehiclesReport"),
);
const UserQRCode = lazy(() => import("../features/user/qr-code/QRCode"));
const NotFoundPage = lazy(() => import("../features/not-found/NotFoundPage"));

export default function UserRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="data-kendaraan" element={<UserVehiclesReport />} />
          <Route path="qr-code-saya" element={<UserQRCode />} />
          <Route path="riwayat-parkir" element={<UserParkingHistory />} />
          <Route path="notifikasi" element={<UserNotification />} />
          <Route path="profil-pengendara" element={<UserProfile />} />
        </Route>
        <Route
          path="*"
          element={
            <NotFoundPage
              title="404 Pengendara"
              message="Halaman pengendara tidak ditemukan."
            />
          }
        />
      </Routes>
    </Suspense>
  );
}
