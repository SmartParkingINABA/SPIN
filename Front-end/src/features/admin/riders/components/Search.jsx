export default function Search() {
  return (
    <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex items-center gap-x-3 px-6 py-4 rounded-md">
      <input
        type="text"
        className="bg-[#F5E79E] py-1.5 px-3 rounded-sm outline-0 w-1/3"
        placeholder="Cari pengendara (nama, email atau no. hp)"
      />
      <p className="text-[#93A3B6] font-medium">Ditemukan 3 pengendara</p>
    </div>
  );
}
