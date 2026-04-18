import { sidebarOfficerMenu } from "./sidebarOfficerMenu";
import SidebarFooter from "../../SidebarFooter";
import Header from "./Header";
import Item from "./Item";
import { useEffect, useRef } from "react";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const sidebarRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    }

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen, setSidebarOpen]);

  return (
    <aside
      ref={sidebarRef}
      className={`border border-[rgba(255,236,120,0.5)] border-l-0 border-t-0 bg-[#1E1633] fixed top-[60px] left-0 z-40  h-[calc(100vh-60px)] flex flex-col w-[70%] sm:w-[17%] transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}`}
    >
      <Header />
      <div className="border-t border-t-[rgba(255,236,120,0.5)] flex flex-col justify-between grow">
        <ul className="py-6 px-5 flex flex-col gap-y-1">
          {sidebarOfficerMenu.map((item) => (
            <Item key={item.path} item={item} />
          ))}
        </ul>
        <SidebarFooter />
      </div>
    </aside>
  );
}
