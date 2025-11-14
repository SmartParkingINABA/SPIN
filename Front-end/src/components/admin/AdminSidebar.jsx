import PP from "../../assets/images/pp.jpg";

export default function AdminSidebar() {
  return (
    <aside className="fixed top-[60px] left-0 z-40 w-[17%] h-[calc(100vh-60px)] bg-[#1E3A8A] py-6">
      <div className="flex items-center gap-x-3 px-6">
        {/* kalau ada image*/}
        {/* <img src={PP} alt="" className="w-13.5 rounded-full" /> */}
        {/* kalau tidak ada image*/}
        <p className="w-13.5 h-14 rounded-full bg-white text-black flex items-center justify-center">
          A
        </p>
        <div className="">
          <p className="text-white font-bold">Admin</p>
          <p className="text-[#10B981] font-semibold">● Online</p>
        </div>
      </div>

      <div className="px-6">
        <input
          type="text"
          name=""
          placeholder="Cari Nomor Kendaraan"
          className="outline-0 bg-white rounded-md w-full mt-5 mb-10 px-3 py-1 placeholder:text-[12px] placeholder:font-semibold"
        />
      </div>

      <ul>
        <li className="has-[a:hover]:bg-[#3b82f6] transition duration-300 ease-in-out py-2 px-6">
          <a href="#" className="font-semibold text-white">
            🏠 Beranda
          </a>
        </li>
        <li className="has-[a:hover]:bg-[#3b82f6] transition duration-300 ease-in-out py-2 px-6">
          <a href="#" className="font-semibold text-white">
            📋 Jenis Kendaraan
          </a>
        </li>
        <li className="has-[a:hover]:bg-[#3b82f6] transition duration-300 ease-in-out py-2 px-6">
          <a href="#" className="font-semibold text-white">
            ➕ Memasukan Kendaraan
          </a>
        </li>
        <li className="has-[a:hover]:bg-[#3b82f6] transition duration-300 ease-in-out py-2 px-6">
          <a href="#" className="font-semibold text-white">
            🚗 Kendaraan Masuk
          </a>
        </li>
        <li className="has-[a:hover]:bg-[#3b82f6] transition duration-300 ease-in-out py-2 px-6">
          <a href="#" className="font-semibold text-white">
            🚙 Kendaraan Keluar
          </a>
        </li>
        <li className="has-[a:hover]:bg-[#3b82f6] transition duration-300 ease-in-out py-2 px-6">
          <a href="#" className="font-semibold text-white">
            📄 Laporan Kendaraan
          </a>
        </li>
        <li className="has-[a:hover]:bg-[#3b82f6] transition duration-300 ease-in-out py-2 px-6">
          <a href="#" className="font-semibold text-white">
            👤 Profile
          </a>
        </li>
      </ul>
    </aside>
  );
}
