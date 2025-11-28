import { Outlet } from "react-router-dom";
import UserHeader from "../components/user/UserHeader";
import UserSidebar from "../components/user/UserSidebar";

export default function UserLayout() {
  return (
    <main className="flex font-ubuntu box-border">
      <UserSidebar />
      <div className="w-[83%] ml-auto">
        <UserHeader />

        {/* Content */}
        <Outlet />
      </div>
    </main>
  );
}
