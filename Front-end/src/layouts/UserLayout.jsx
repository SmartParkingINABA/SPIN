import { Outlet } from "react-router-dom";
import UserHeader from "../components/user/UserHeader";
import UserSidebar from "../components/user/UserSidebar";

export default function UserLayout() {
  return (
    <main className="flex font-ubuntu">
      <UserHeader />
      <UserSidebar />
      <div className="w-[83%] mt-[60px] ml-auto">
        {/* Content */}
        <Outlet />
      </div>
    </main>
  );
}
