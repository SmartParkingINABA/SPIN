import { useRef } from "react";

export default function PhotoProfile({ onUpload, userData }) {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload(file);
    }
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

  return (
    <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
      <p className="text-[#FEF8FD] font-medium mb-6">Foto Profil</p>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      {userData?.foto_profil ? (
        <img
          src={userData.foto_profil}
          alt="Profile"
          className="w-30 h-30 mx-auto rounded-full border border-[rgba(255,236,120,0.5)] object-cover block"
        />
      ) : (
        <p className="w-30 h-30 rounded-full bg-[rgba(255,236,120,0.5)] flex items-center justify-center mx-auto text-3xl text-[#FFDB58] font-semibold">
          {getInitials(userData?.nama_pengendara)}
        </p>
      )}
      <p className="text-[#FEF8FD] text-center mt-4">
        {userData?.nama_pengendara || "Your Name"}
      </p>
      <p className="text-[#93A3B6] text-center text-[14px]">
        {userData?.email}
      </p>
      <button
        type="button"
        onClick={handleButtonClick}
        className="bg-[#FFDB58] rounded-sm py-1.5 font-medium w-full mt-3.5 text-[#130F40] transition opacity-100 hover:opacity-80 cursor-pointer"
      >
        Ubah Foto
      </button>
    </div>
  );
}
