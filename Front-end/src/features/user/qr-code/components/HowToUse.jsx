export default function HowToUse() {
  return (
    <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md p-6">
      <p className="text-[#FEF8FD] text-[18px] font-semibold mb-3.5">
        Cara Menggunakan
      </p>
      <div className="flex items-start gap-x-3 mb-3.5">
        <p className="px-3 py-1 text-[#FFEC78] bg-[#4B4141] font-semibold rounded-full">
          1
        </p>
        <div>
          <p className="text-[#FEF8FD] font-semibold">Pilih Kendaraan</p>
          <p className="text-[#93A3B6] font-medium">
            Pilih kendaraan yang ingin ditampilkan QR Code-nya.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-x-3 mb-3.5">
        <p className="px-3 py-1 text-[#FFEC78] bg-[#4B4141] font-semibold rounded-full">
          2
        </p>
        <div>
          <p className="text-[#FEF8FD] font-semibold">Unduh atau Cetak</p>
          <p className="text-[#93A3B6] font-medium">
            Simpan QR Code atau Cetak untuk dipasang di kendaraan.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-x-3">
        <p className="px-3 py-1 text-[#FFEC78] bg-[#4B4141] font-semibold rounded-full">
          3
        </p>
        <div>
          <p className="text-[#FEF8FD] font-semibold">Scan Saat Parkir</p>
          <p className="text-[#93A3B6] font-medium">
            Petugas akan scan QR Code anda saat masuk/keluar parkir.
          </p>
        </div>
      </div>
    </div>
  );
}
