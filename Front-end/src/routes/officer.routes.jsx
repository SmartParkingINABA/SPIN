import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import OfficerLayout from "../layouts/OfficerLayout";
import NotFoundPage from "../features/not-found/NotFoundPage";
import Loader from "../components/Loader";

const OfficerDashboard = lazy(
  () => import("../features/officer/dashboard/Dashboard"),
);
const OfficerVehiclesReport = lazy(
  () => import("../features/officer/vehicles-report/VehiclesReport"),
);
const OfficerScanQR = lazy(() => import("../features/officer/scan-qr/ScanQR"));
const OfficerParkingHistory = lazy(
  () => import("../features/officer/parking-history/ParkingHistory"),
);
const OfficerNotifikasi = lazy(
  () => import("../features/officer/notification/Notifikasi"),
);
const OfficerProfile = lazy(
  () => import("../features/officer/profile/Profile"),
);

export default function OfficerRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<OfficerLayout />}>
          <Route index element={<OfficerDashboard />} />
          <Route path="data-kendaraan" element={<OfficerVehiclesReport />} />
          <Route path="scan-qr-code" element={<OfficerScanQR />} />
          <Route path="riwayat-parkir" element={<OfficerParkingHistory />} />
          <Route path="notifikasi" element={<OfficerNotifikasi />} />
          <Route path="profil-petugas" element={<OfficerProfile />} />
        </Route>
        <Route
          path="*"
          element={
            <NotFoundPage
              title="404 Petugas"
              message="Halaman petugas tidak ditemukan."
            />
          }
        />
      </Routes>
    </Suspense>
  );
}
