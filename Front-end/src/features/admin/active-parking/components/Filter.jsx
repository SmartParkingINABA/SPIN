import VehicleDropdown from "../../../../components/admin/VehicleDropdown";
import VehicleSortDropdown from "./VehicleSortDropdown";

export default function Filter() {
  return (
    <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md grid grid-cols-6 items-center gap-x-3.5">
      <div className="col-span-2">
        <input
          type="text"
          className="bg-[#F5E79E] h-10 px-3 rounded-sm outline-0 w-full"
          placeholder="Cari no. plat, merk atau pemilik..."
        />
      </div>
      <div className="">
        <VehicleDropdown selectedOption="Semua Jenis" />
      </div>
      <div className="">
        <VehicleSortDropdown selectedOption="Terbaru Masuk" />
      </div>
      <div className="col-span-2">
        <p className="text-[#93A3B6] font-medium">Ditemukan 3 kendaraan</p>
      </div>
    </div>
  );
}
