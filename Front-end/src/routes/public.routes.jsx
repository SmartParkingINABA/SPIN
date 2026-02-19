import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import NotFoundPage from "../features/not-found/NotFoundPage";

const Home = lazy(() => import("../features/public/Home"));
const Regulation = lazy(
  () => import("../features/public/regulation/Regulation"),
);
const About = lazy(() => import("../features/public/about/About"));
const Enter = lazy(() => import("../features/public/Enter"));

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
