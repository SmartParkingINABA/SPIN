import { Outlet } from "react-router-dom";
import Header from "../components/officer/header/Header";
import Sidebar from "../components/officer/sidebar/Sidebar";
import { useState } from "react";

export default function OfficerLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="flex font-ubuntu w-full">
      <Header setSidebarOpen={setSidebarOpen} />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="w-[83%] mt-[60px] ml-auto">
        {/* Content */}
        <Outlet />
      </div>
    </main>
  );
}
