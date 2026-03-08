export default function Header({ displayName }) {
  return (
    <>
      <h1 className="text-[#FEF8FD] text-2xl font-bold">
        Dashboard Pengendara
      </h1>
      <p className="text-[#93A3B6] font-medium mt-1">{displayName}</p>
    </>
  );
}
