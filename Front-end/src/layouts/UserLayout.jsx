import { Outlet } from "react-router-dom";
import Header from "../components/user/header/Header";
import Sidebar from "../components/user/sidebar/Sidebar";

export default function UserLayout() {
  return (
    <main className="w-full flex font-ubuntu">
      <Header />
      <Sidebar />
      <div className="w-[83%] mt-[60px] ml-auto">
        {/* Content */}
        <Outlet />
      </div>
    </main>
  );
}
