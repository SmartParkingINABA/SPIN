export default function VehicleRegistration() {
  return (
    <div className="bg-[#1E1633] font-ubuntu h-screen w-full flex justify-center items-center">
      <div className="w-[45%]">
        <h1 className="text-center text-[#ffec78] font-bold text-3xl">
          Ketentuan Pengguna
        </h1>
        <ul className="list-decimal flex flex-col gap-y-2 mt-5 w-fit mx-auto">
          <li className="text-white font-semibold pl-1.5">
            Setiap kendaraan harus di daftarkan melalui sistem dengan data yang
            benar.
          </li>
          <li className="text-white font-semibold pl-1.5">
            Pengguna hanya boleh mendaftarkan kendaraan pribadi.
          </li>
          <li className="text-white font-semibold pl-1.5">
            Perubahan data kendaraan wajib segera di perbarui di sistem.
          </li>
        </ul>
      </div>
    </div>
  );
}
