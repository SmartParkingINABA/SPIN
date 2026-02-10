import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../features/admin/dasboard/Dasboard";
import Officer from "../features/admin/officers/Officer";
import Rider from "../features/admin/riders/Rider";
import Notification from "../features/admin/notification/Notification";
import Reports from "../features/admin/reports/Reports";
import Setting from "../features/admin/setting/Setting";
import AdminNotFound from "../features/not-found/AdminNotFound";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="petugas-parkir" element={<Officer />} />
        <Route path="pengendara" element={<Rider />} />
        <Route path="notifikasi" element={<Notification />} />
        <Route path="laporan" element={<Reports />} />
        <Route path="pengaturan-akun" element={<Setting />} />
      </Route>
      <Route path="*" element={<AdminNotFound />} />
    </Routes>
  );
}
