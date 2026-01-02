export default function SubmitManualId({
  searchID,
  setSearchID,
  handleSearch,
}) {
  return (
    <>
      <p className="text-[#FEF8FD] font-medium">Input Manual ID QR</p>
      <p className="text-[#93A3B6] text-[14px]">
        Gunakan jika gagal scan otomatis (contoh: QR-2020-001, QR-2020-002)
      </p>
      <div className="flex gap-x-3 mt-3">
        <input
          type="text"
          value={searchID}
          onChange={(e) => setSearchID(e.target.value)}
          className="w-full bg-[#F5E79E] rounded-md py-2 px-3 outline-0"
          placeholder="Masukan ID QR"
        />
        <button
          onClick={handleSearch}
          className="py-2 bg-[#FFDB58] text-[#130F40] px-5 rounded-md opacity-100 hover:opacity-80 transition"
        >
          Submit
        </button>
      </div>
    </>
  );
}
