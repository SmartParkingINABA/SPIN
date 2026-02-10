import { Route, Routes } from "react-router-dom";
import OfficerLayout from "../layouts/OfficerLayout";
import OfficerDashboard from "../features/officer/dashboard/Dashboard";
import OfficerVehiclesReport from "../features/officer/vehicles-report/VehiclesReport";
import OfficerScanQR from "../features/officer/scan-qr/ScanQR";
import OfficerParkingHistory from "../features/officer/parking-history/ParkingHistory";
import OfficerNotifikasi from "../features/officer/notification/Notifikasi";
import OfficerProfile from "../features/officer/profile/Profile";
import OfficerNotFound from "../features/not-found/OfficerNotFound";

export default function OfficerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<OfficerLayout />}>
        <Route index element={<OfficerDashboard />} />
        <Route path="data-kendaraan" element={<OfficerVehiclesReport />} />
        <Route path="scan-qr-code" element={<OfficerScanQR />} />
        <Route path="riwayat-parkir" element={<OfficerParkingHistory />} />
        <Route path="notifikasi" element={<OfficerNotifikasi />} />
        <Route path="profil-petugas" element={<OfficerProfile />} />
      </Route>
      <Route path="*" element={<OfficerNotFound />} />
    </Routes>
  );
}
