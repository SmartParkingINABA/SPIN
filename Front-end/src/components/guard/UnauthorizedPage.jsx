export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] p-5">
      <h1 className="font-bold text-[30px] text-red-600">
        403 - Akses Ditolak
      </h1>
      <p className="text-[#64748b] mt-2">
        Anda tidak memiliki izin untuk mengakses halaman ini.
      </p>
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
}
