export default function UserTerms() {
  return (
    <div className="bg-[#1E1633] font-ubuntu h-screen w-full flex justify-center items-center">
      <div className="w-[45%]">
        <h1 className="text-center text-[#ffec78] font-bold text-3xl">
          Ketentuan Pengguna
        </h1>
        <ul className="list-decimal flex flex-col gap-y-2 mt-5">
          <li className="text-white font-semibold pl-1.5">
            Hanya pengguna terdaftar seperti (Dosen, Staff, Mahasiswa, atau
            Tamu) terverifikasi yang dapat menggunakan sistem SPIN.
          </li>
          <li className="text-white font-semibold pl-1.5">
            Setiap pengguna wajib memiliki akun & data kendaraan yang valid.
          </li>
          <li className="text-white font-semibold pl-1.5">
            Dilarang meminjamkan akun kepada pihak lain tanpa izin.
          </li>
        </ul>
      </div>
    </div>
  );
}
