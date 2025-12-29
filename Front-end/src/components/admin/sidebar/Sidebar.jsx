import { adminMenu } from "./adminMenu";
import SidebarHeader from "./SidebarHeader";
import SidebarItem from "./SidebarItem";
import SidebarFooter from "../../SidebarFooter";

export default function Sidebar() {
  return (
    <aside className="border border-[rgba(255,236,120,0.5)] border-l-0 border-t-0 bg-[#1E1633] fixed top-[60px] left-0 z-40 w-[17%] h-[calc(100vh-60px)] flex flex-col">
      <SidebarHeader />
      <div className="border-t border-t-[rgba(255,236,120,0.5)] flex flex-col justify-between grow">
        <ul className="py-6 px-5 flex flex-col gap-y-1">
          {adminMenu.map((item) => (
            <SidebarItem key={item.path} item={item} />
          ))}
        </ul>
        <SidebarFooter />
      </div>
    </aside>
  );
}
