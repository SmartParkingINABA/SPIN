import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../features/admin/dasboard/Dasboard";
import Officer from "../features/admin/officers/Officer";
import Rider from "../features/admin/riders/Rider";
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
        <Route path="notification" element={<Notification />} />
        <Route path="reports" element={<Reports />} />
        <Route path="account-settings" element={<Setting />} />
      </Route>
    </Routes>
  );
}
