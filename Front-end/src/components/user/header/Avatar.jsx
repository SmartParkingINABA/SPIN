import { useEffect, useRef, useState } from "react";

export default function Avatar({ setIsOpen }) {
  const dropdownRef = useRef(null);
  const [userProfile, setUserProfile] = useState(null);

  const handleToggle = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const getInitials = (name) => {
    if (!name) return "??";

    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  useEffect(() => {
    const updateAvatar = (e) => {
      setUserProfile(e.detail);
    };

    window.addEventListener("profile-updated", updateAvatar);

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("profile-updated", updateAvatar);
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="cursor-pointer outline-none"
        onClick={handleToggle}
      >
        {userProfile?.foto_profile ? (
          <img
            src={userProfile.foto_profile}
            alt="User Profile"
            className="w-10 h-10 object-cover rounded-full border border-[rgba(255,236,120,0.5)]"
          />
        ) : (
          <p className="text-white w-10 h-10 rounded-full bg-[#374151] flex items-center justify-center font-bold">
            {getInitials(userProfile?.nama_pengendara)}
          </p>
        )}
      </button>
    </div>
  );
}
