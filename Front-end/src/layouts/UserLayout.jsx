import { Outlet } from "react-router-dom";
import Header from "../components/user/header/Header";
import Sidebar from "../components/user/sidebar/Sidebar";
import { useGetAccountSettings } from "../hooks/user/useAccountSettings";

export default function UserLayout() {
  const { data, loading } = useGetAccountSettings();

  return (
    <main className="w-full flex font-ubuntu">
      <Header />
      <Sidebar />
      <div className="w-[83%] mt-[60px] ml-auto">
        {/* Content */}
        <Outlet
          context={{ profileData: data?.profil, loadingProfile: loading }}
        />
      </div>
    </main>
  );
}
