import { NavLink } from "react-router-dom";

import { HiOutlineHome } from "react-icons/hi2";
import { FaCarSide, FaBell } from "react-icons/fa6";
import { IoQrCode, IoSettingsSharp } from "react-icons/io5";
import { RxCountdownTimer } from "react-icons/rx";
import SidebarFooter from "../../SidebarFooter";
import Header from "./Header";
import { adminMenu } from "./adminMenu";
import Item from "./Item";

export default function Sidebar() {
  return (
    <aside className="border border-[rgba(255,236,120,0.5)] border-l-0 border-t-0 bg-[#1E1633] fixed top-[60px] left-0 z-40 w-[17%] h-[calc(100vh-60px)] flex flex-col">
      <Header />
      <div className="border-t border-t-[rgba(255,236,120,0.5)] flex flex-col justify-between grow">
        <ul className="py-6 px-5 flex flex-col gap-y-1">
          {adminMenu.map((item) => (
            <Item key={item.path} item={item} />
          ))}
        </ul>
        <SidebarFooter />
      </div>
    </aside>
  );
}
