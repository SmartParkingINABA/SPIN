import { NavLink } from "react-router-dom";
import { useAuth } from "../../../context/useAuth";

export default function Item({ item }) {
  const Icon = item.icon;
  const { user } = useAuth();

  const isProfileMenu = item.label === "Profil Pengguna";
  const hasNoName =
    !user?.nama_pengendara || user?.nama_pengendara.trim() === "";
  const showNotification = isProfileMenu && hasNoName;

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

          {/* Tanda Merah */}
          {showNotification && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full"></span>
          )}
        </li>
      )}
    </NavLink>
  );
}
