export default function PhotoProfile() {
  return (
    <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
      <p className="text-[#FEF8FD] font-medium mb-6">Foto Profil</p>
      {/* kalau ada image*/}
      {/* <img src={PP} alt="" className="w-13.5 rounded-full" /> */}
      {/* kalau tidak ada image*/}
      <p className="w-30 h-30 rounded-full bg-[rgba(255,236,120,0.5)] flex items-center justify-center mx-auto text-3xl text-[#FFDB58] font-semibold">
        JS
      </p>
      <p className="text-[#FEF8FD] text-center mt-4">John Smith</p>
      <p className="text-[#93A3B6] text-center text-[14px]">
        john.smith@email.com
      </p>
      <button
        type="button"
        className="bg-[#FFDB58] rounded-sm py-1.5 font-medium w-full mt-3.5 text-[#130F40] transition opacity-100 hover:opacity-80 cursor-pointer"
      >
        Ubah Foto
      </button>
    </div>
  );
}
