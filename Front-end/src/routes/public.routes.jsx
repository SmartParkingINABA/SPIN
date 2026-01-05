import { Route, Routes } from "react-router-dom";
import Enter from "../features/public/Enter";
import About from "../features/public/About";
import Regulation from "../features/public/Regulation";
import Home from "../features/public/Home";
import PublicLayout from "../layouts/PublicLayout";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/regulation" element={<Regulation />} />
        <Route path="/about" element={<About />} />
        <Route path="/enter" element={<Enter />} />
      </Route>
    </Routes>
  );
}
