export default function VehicleSafety() {
  return (
    <div className="bg-[#1E1633] font-ubuntu h-screen w-full flex justify-center items-center">
      <div className="w-[45%]">
        <h1 className="text-center text-[#ffec78] font-bold text-3xl">
          Keamanan Kendaraan
        </h1>
        <ul className="list-decimal flex flex-col gap-y-2 mt-5 w-fit mx-auto">
          <li className="text-white font-semibold pl-1.5">
            Pengguna bertanggung jawab terhadap barang pribadi di dalam
            kendaraan.
          </li>
          <li className="text-white font-semibold pl-1.5">
            SPIN hanya membantu pencatatan dan monitoring, bukan penjamin
            kehilangan.
          </li>
          <li className="text-white font-semibold pl-1.5">
            Kendaraan harus parkir di area yang di tentukan.
          </li>
        </ul>
      </div>
    </div>
  );
}
