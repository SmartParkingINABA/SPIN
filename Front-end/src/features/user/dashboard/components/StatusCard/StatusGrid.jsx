import StatusCard from "./StatusCard";

export default function StatusGrid({ vehicles }) {
  return (
    <>
      {vehicles.map((vehicle) => (
        <StatusCard key={vehicle.id_kendaraan_masuk} vehicle={vehicle} />
      ))}
    </>
  );
}
