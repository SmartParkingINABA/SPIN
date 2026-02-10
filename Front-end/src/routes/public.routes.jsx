import { Route, Routes } from "react-router-dom";
import Enter from "../features/public/Enter";
import About from "../features/public/about/About";
import Regulation from "../features/public/Regulation";
import Home from "../features/public/Home";
import PublicLayout from "../layouts/PublicLayout";
import NotFoundPage from "../features/not-found/NotFoundPage";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/peraturan" element={<Regulation />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/masuk" element={<Enter />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
