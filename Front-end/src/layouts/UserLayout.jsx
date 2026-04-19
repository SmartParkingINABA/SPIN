import { Outlet } from "react-router-dom";
import Header from "../components/user/header/Header";
import Sidebar from "../components/user/sidebar/Sidebar";
import { useGetAccountSettings } from "../hooks/user/useAccountSettings";
import { useRef, useState } from "react";

export default function UserLayout() {
  const { data, loading } = useGetAccountSettings();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const hamburgerRef = useRef(null);

  return (
    <main className="w-full flex font-ubuntu">
      <Header setSidebarOpen={setSidebarOpen} hamburgerRef={hamburgerRef} />
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        hamburgerRef={hamburgerRef}
      />
      <div className="w-full sm:w-[83%] mt-[60px] ml-auto">
        {/* Content */}
        <Outlet
          context={{ profileData: data?.profil, loadingProfile: loading }}
        />
      </div>
    </main>
  );
}
