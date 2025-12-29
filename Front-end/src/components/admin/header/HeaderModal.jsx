import { Link } from "react-router-dom";

export default function HeaderModal({ isOpen }) {
  return (
    <div
      className={`absolute right-6 top-15 rounded-md border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex flex-col gap-y-2.5 p-3 ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      }`}
    >
      <Link
        to="/admin/account-settings"
        className="text-[#FFEC78] transition opacity-100 hover:opacity-80"
      >
        Profile
      </Link>
      <hr className="h-0.5 bg-[rgba(255,236,120,0.5)]" />
      <button className="text-[#FFEC78] transition opacity-100 hover:opacity-80">
        Logout
      </button>
    </div>
  );
}
