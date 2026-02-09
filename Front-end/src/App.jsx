import { Route, Routes } from "react-router-dom";
import AuthRoutes from "./routes/auth.routes";
import UserRoutes from "./routes/user.routes";
import PublicRoutes from "./routes/public.routes";
import AdminRoutes from "./routes/admin.routes";
import OfficerRoutes from "./routes/officer.routes";

function App() {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/petugas/*" element={<OfficerRoutes />} />
      <Route path="/pengendara/*" element={<UserRoutes />} />
      <Route path="/*" element={<PublicRoutes />} />
    </Routes>
  );
}

export default App;
