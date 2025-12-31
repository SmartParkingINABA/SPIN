import StatusDropdown from "./StatusDropdown";
import VehiclesDropdown from "./VehiclesDropdown";

export default function Dropdown() {
  return (
    <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md grid grid-cols-2 gap-6 py-5 px-6 mt-6">
      <div>
        <p className="text-[#93A3B6] font-medium mb-2">Filter Status</p>
        <StatusDropdown selectedOption={"Semua Status"} />
      </div>
      <div>
        <p className="text-[#93A3B6] font-medium mb-2">Filter Kendaraan</p>
        <VehiclesDropdown selectedOption={"Semua Kendaraan"} />
      </div>
    </div>
  );
}
