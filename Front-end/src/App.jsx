import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AuthRoutes = lazy(() => import("./routes/auth.routes"));
const UserRoutes = lazy(() => import("./routes/user.routes"));
const PublicRoutes = lazy(() => import("./routes/public.routes"));
const AdminRoutes = lazy(() => import("./routes/admin.routes"));
const OfficerRoutes = lazy(() => import("./routes/officer.routes"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/petugas/*" element={<OfficerRoutes />} />
        <Route path="/pengendara/*" element={<UserRoutes />} />
        <Route path="/*" element={<PublicRoutes />} />
      </Routes>
    </Suspense>
  );
}

export default App;
