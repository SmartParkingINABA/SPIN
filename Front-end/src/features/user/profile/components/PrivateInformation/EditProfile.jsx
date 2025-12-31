export default function EditProfile({ isEditing, setIsEditing }) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-[#FEF8FD] font-medium">Informasi Pribadi</p>
      {!isEditing && (
        <button
          onClick={() => setIsEditing(true)}
          className="text-[#FEF8FD] bg-[#130F40] border border-[#93A3B6] px-2 py-1 rounded-sm text-[14px] cursor-pointer opacity-100 hover:opacity-85"
        >
          Edit Profil
        </button>
      )}
    </div>
  );
}
