import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import NotFoundPage from "../features/not-found/NotFoundPage";
import Loader from "../components/Loader";

const Dashboard = lazy(() => import("../features/admin/dasboard/Dasboard"));
const Officer = lazy(() => import("../features/admin/officers/Officer"));
const Rider = lazy(() => import("../features/admin/riders/Rider"));
const Notification = lazy(
  () => import("../features/admin/notification/Notification"),
);
const Reports = lazy(() => import("../features/admin/reports/Reports"));
const Setting = lazy(() => import("../features/admin/setting/Setting"));

export default function AdminRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="petugas-parkir" element={<Officer />} />
          <Route path="pengendara" element={<Rider />} />
          <Route path="notifikasi" element={<Notification />} />
          <Route path="laporan" element={<Reports />} />
          <Route path="pengaturan-akun" element={<Setting />} />
        </Route>
        <Route
          path="*"
          element={
            <NotFoundPage
              title="404 Admin"
              message="Halaman admin tidak ditemukan."
            />
          }
        />
      </Routes>
    </Suspense>
  );
}
