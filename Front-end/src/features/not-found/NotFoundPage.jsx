export default function NotFoundPage({
  title = "404",
  message = "Halaman tidak ditemukan.",
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <h1 className="font-bold text-3xl uppercase text-[#130F40]">{title}</h1>
      <p>{message}</p>
    </div>
  );
}
