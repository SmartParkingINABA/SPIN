import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../features/admin/dasboard/Dasboard";
import Officer from "../features/admin/officers/Officer";
import Rider from "../features/admin/riders/Rider";
import Vehicles from "../features/admin/vehicles/Vehicles";
import IncomingVehicle from "../features/admin/incoming-vehicle/IncomingVehicle";
import VehicleOut from "../features/admin/vehicle-out/VehicleOut";
import ActiveParking from "../features/admin/active-parking/ActiveParking";
import Notification from "../features/admin/notification/Notification";
import Reports from "../features/admin/reports/Reports";
import Setting from "../features/admin/setting/Setting";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="parking-attendant" element={<Officer />} />
        <Route path="rider" element={<Rider />} />
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="incoming-vehicle" element={<IncomingVehicle />} />
        <Route path="vehicle-out" element={<VehicleOut />} />
        <Route path="active-parking" element={<ActiveParking />} />
        <Route path="notification" element={<Notification />} />
        <Route path="reports" element={<Reports />} />
        <Route path="account-settings" element={<Setting />} />
      </Route>
    </Routes>
  );
}
