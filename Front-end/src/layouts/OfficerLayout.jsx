import { Outlet } from "react-router-dom";
import OfficerHeader from "../components/officer/OfficerHeader";
import OfficerSidebar from "../components/officer/OfficerSidebar";

export default function OfficerLayout() {
  return (
    <main className="flex font-ubuntu w-full">
      <OfficerHeader />
      <OfficerSidebar />
      <div className="w-[83%] mt-[60px] ml-auto">
        {/* Content */}
        <Outlet />
      </div>
    </main>
  );
}
