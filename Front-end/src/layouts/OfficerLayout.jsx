import { Outlet } from "react-router-dom";
import Header from "../components/officer/header/Header";
import Sidebar from "../components/officer/sidebar/Sidebar";
import { useRef, useState } from "react";

export default function OfficerLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const hamburgerRef = useRef(null);

  return (
    <main className="flex font-ubuntu w-full">
      <Header setSidebarOpen={setSidebarOpen} hamburgerRef={hamburgerRef} />
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        hamburgerRef={hamburgerRef}
      />
      <div className="w-full sm:w-[83%] mt-[60px] ml-auto">
        {/* Content */}
        <Outlet />
      </div>
    </main>
  );
}
