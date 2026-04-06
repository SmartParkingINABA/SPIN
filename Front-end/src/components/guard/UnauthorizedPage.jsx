export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white">
      <h1 className="font-bold text-3xl uppercase text-[#130F40]">
        403 - Akses Ditolak
      </h1>
      <p>Anda tidak memiliki izin untuk mengakses halaman ini.</p>
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-5 px-4 py-2 bg-[#62929e] text-white rounded-md cursor-pointer opacity-100 hover:opacity-80"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
}
