export default function Header({ user }) {
  return (
    <>
      <h1 className="text-[#FEF8FD] text-[18px] sm:text-2xl font-bold">
        Dashboard Pengendara
      </h1>
      <p className="text-[#93A3B6] text-[14px] sm:text-[16px] font-medium sm:mt-1">
        Selamat datang, {user?.displayName}
      </p>
    </>
  );
}
