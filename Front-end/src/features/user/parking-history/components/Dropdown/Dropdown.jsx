import StatusDropdown from "./StatusDropdown";
import VehiclesDropdown from "./VehiclesDropdown";

export default function Dropdown({
  filters,
  setFilters,
  setPagination,
  vehicleOptions,
}) {
  return (
    <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md grid grid-cols-2 gap-6 py-5 px-6 mt-6">
      <div>
        <p className="text-[#93A3B6] font-medium mb-2">Filter Status</p>
        <StatusDropdown
          selected={filters.status}
          onSelect={(val) => {
            setFilters((prev) => ({
              ...prev,
              status: val === "Semua Status" ? "all" : val,
            }));
            setPagination((prev) => ({ ...prev, page: 1 }));
          }}
        />
      </div>
      <div>
        <p className="text-[#93A3B6] font-medium mb-2">Filter Kendaraan</p>
        <VehiclesDropdown
          selected={filters.kendaraan_id}
          onSelect={(val) => {
            setFilters((prev) => ({ ...prev, kendaraan_id: val }));
            setPagination((prev) => ({ ...prev, page: 1 }));
          }}
          vehicleOptions={vehicleOptions}
        />
      </div>
    </div>
  );
}
