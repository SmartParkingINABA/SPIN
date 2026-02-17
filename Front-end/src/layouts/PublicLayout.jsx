import { NavLink, Outlet, useLocation } from "react-router-dom";
import inabaLogo from "../assets/images/public/logo_inaba.webp";

export default function PublicLayout() {
  const location = useLocation();
  const hideHeader = location.pathname === "/masuk";

  return (
    <main className="relative w-full font-ubuntu bg-[#130F40]">
      {/* header hanya akan muncul ketika hideHeadernya false */}
      {!hideHeader && (
        <header className="flex items-center justify-between px-25 fixed top-0 left-0 z-10 w-full bg-[#130F40]">
          <div className="flex items-center gap-x-3 w-fit">
            <img src={inabaLogo} alt="" className="w-30 h-30" />
            <div className="text-center -ml-3">
              <p className="text-[#FEF8FD] font-bold text-3xl">Smart Parking</p>
              <p className="text-[#FEF8FD] font-semibold text-[20px]">
                Universitas INABA
              </p>
            </div>
          </div>
          <nav className="flex gap-x-20">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-[#FEF8FD]" : "border-b-transparent"
                } text-[#FEF8FD] font-semibold text-[20px] transition duration-300 ease-in-out border-b-2 hover:border-b-[#FEF8FD]`
              }
            >
              Beranda
            </NavLink>
            <NavLink
              to="/peraturan"
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-[#FEF8FD]" : "border-b-transparent"
                } text-[#FEF8FD] font-semibold text-[20px] transition duration-300 ease-in-out border-b-2 hover:border-b-[#FEF8FD]`
              }
            >
              Peraturan
            </NavLink>
            <NavLink
              to="/tentang"
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-[#FEF8FD]" : "border-b-transparent"
                } text-[#FEF8FD] font-semibold text-[20px] transition duration-300 ease-in-out border-b-2 hover:border-b-[#FEF8FD]`
              }
            >
              Tentang
            </NavLink>
            <NavLink
              to="/masuk"
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-[#FEF8FD]" : "border-b-transparent"
                } text-[#FEF8FD] font-semibold text-[20px] transition duration-300 ease-in-out border-b-2 hover:border-b-[#FEF8FD]`
              }
            >
              Masuk
            </NavLink>
          </nav>
        </header>
      )}

      {/* Content */}
      <Outlet />
    </main>
  );
}
