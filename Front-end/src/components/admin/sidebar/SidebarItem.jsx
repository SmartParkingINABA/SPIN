import { NavLink } from "react-router-dom";

export default function SidebarItem({ item }) {
  const Icon = item.icon;

  return (
    <NavLink to={item.path} end={item.exact}>
      {({ isActive }) => (
        <li
          className={`transition duration-300 ease-in-out px-3 py-2.5 rounded-md hover:bg-[#130f40] group ${
            isActive ? "bg-[#130f40]" : "bg-transparent"
          }`}
        >
          <p
            className={`pointer-events-auto cursor-pointer
                  font-medium flex items-center gap-x-2.5 transition duration-300 ease-in-out w-fit group-hover:text-[#FFEC78] ${
                    isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
                  }`}
          >
            <Icon
              className={`w-6 h-fit transition duration-300 ease-in-out group-hover:text-[#FFEC78] ${
                isActive ? "text-[#FFEC78]" : "text-[#FEF8FD]"
              }`}
            />
            {item.label}
          </p>
        </li>
      )}
    </NavLink>
  );
}
