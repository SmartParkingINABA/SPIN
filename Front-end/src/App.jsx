import { Route, Routes } from "react-router-dom";
import AuthRoutes from "./routes/auth.routes";
import UserRoutes from "./routes/user.routes";
import PublicRoutes from "./routes/public.routes";
import AdminRoutes from "./routes/admin.routes";
import OfficerRoutes from "./routes/officer.routes";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<PublicRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/user/*" element={<UserRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/officer/*" element={<OfficerRoutes />} />
    </Routes>
  );
}

export default App;
