import { Route, Routes } from "react-router-dom";
import OfficerLayout from "../layouts/OfficerLayout";
import OfficerDashboard from "../features/officer/dashboard/Dashboard";
import OfficerVehiclesReport from "../features/officer/vehicles-report/VehiclesReport";
import OfficerScanQR from "../features/officer/scan-qr/ScanQR";
import OfficerParkingHistory from "../features/officer/parking-history/ParkingHistory";
import OfficerNotifikasi from "../features/officer/notification/Notifikasi";
import OfficerProfile from "../features/officer/profile/Profile";

export default function OfficerRoutes() {
  return (
    <Routes>
      <Route element={<OfficerLayout />}>
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
