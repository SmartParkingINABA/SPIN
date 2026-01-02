import { Outlet } from "react-router-dom";
import Header from "../components/officer/header/Header";
import Sidebar from "../components/officer/sidebar/Sidebar";

export default function OfficerLayout() {
  return (
    <main className="flex font-ubuntu w-full">
      <Header />
      <Sidebar />
      <div className="w-[83%] mt-[60px] ml-auto">
        {/* Content */}
        <Outlet />
      </div>
    </main>
  );
}
