import { Link, Outlet, useLocation } from "react-router-dom";
import inabaLogo from "../assets/images/logo_inaba.png";

export default function PublicLayout() {
  const location = useLocation();
  const hideHeader = location.pathname === "/enter";

  return (
    <main className="relative w-full font-ubuntu h-screen bg-[#130F40]">
      {/* header hanya akan muncul ketika hideHeadernya false */}
      {!hideHeader && (
        <header className="flex items-center justify-between px-25">
          <div className="flex items-center gap-x-3 w-fit">
            <img src={inabaLogo} alt="" className="w-30 h-30" />
            <div className="text-center -ml-3">
              <p className="text-white font-bold text-3xl">Smart Parking</p>
              <p className="text-white font-semibold text-[20px]">
                Universitas INABA
              </p>
            </div>
          </div>
          <nav className="flex gap-x-20">
            <Link
              to="/"
              className="text-white font-semibold text-[20px] transition duration-300 ease-in-out border-b-2 border-b-transparent hover:border-b-white"
            >
              Beranda
            </Link>
            <Link
              to="/setting"
              className="text-white font-semibold text-[20px] transition duration-300 ease-in-out border-b-2 border-b-transparent hover:border-b-white"
            >
              Peraturan
            </Link>
            <Link
              to="/about"
              className="text-white font-semibold text-[20px] transition duration-300 ease-in-out border-b-2 border-b-transparent hover:border-b-white"
            >
              About
            </Link>
            <Link
              to="/enter"
              className="text-white font-semibold text-[20px] transition duration-300 ease-in-out border-b-2 border-b-transparent hover:border-b-white"
            >
              Masuk
            </Link>
          </nav>
        </header>
      )}

      {/* Content */}
      <Outlet />
    </main>
  );
}
