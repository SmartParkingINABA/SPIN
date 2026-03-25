import StatusDropdown from "./StatusDropdown";
import VehiclesDropdown from "./VehiclesDropdown";

export default function Dropdown({ filters, setFilters, vehicleOptions }) {
  return (
    <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md grid grid-cols-2 gap-6 py-5 px-6 mt-6">
      <div>
        <p className="text-[#93A3B6] font-medium mb-2">Filter Status</p>
        <StatusDropdown
          selected={filters.status}
          onSelect={(val) => setFilters((prev) => ({ ...prev, status: val }))}
        />
      </div>
      <div>
        <p className="text-[#93A3B6] font-medium mb-2">Filter Kendaraan</p>
        <VehiclesDropdown
          selected={filters.vehicle}
          onSelect={(val) => setFilters((prev) => ({ ...prev, vehicle: val }))}
          vehicleOptions={vehicleOptions}
        />
      </div>
    </div>
  );
}
