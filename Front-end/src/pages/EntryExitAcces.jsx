export default function EntryExitAcces() {
  return (
    <div className="bg-[#1E1633] font-ubuntu h-screen w-full flex justify-center items-center">
      <div className="w-[45%]">
        <h1 className="text-center text-[#ffec78] font-bold text-3xl">
          Akses Masuk & Keluar
        </h1>
        <ul className="list-decimal flex flex-col gap-y-2 mt-5">
          <li className="text-white font-semibold pl-1.5">
            Kendaraan masuk & keluar area parkir wajib menggunakan QR Code yang
            disediakan oleh SPIN.
          </li>
          <li className="text-white font-semibold pl-1.5">
            Pengguna wajib menunjukkan QR Code kepada petugas saat di minta.
          </li>
          <li className="text-white font-semibold pl-1.5">
            Pelanggaran sistem scan atau bypass akses akan dikenakan sanksi.
          </li>
        </ul>
      </div>
    </div>
  );
}
