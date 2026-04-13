export default function ScanQRSkeleton() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <h1 className="h-4 w-[20%] bg-[#93A3B6] rounded-md"></h1>
      <p className="h-3 w-[18%] bg-[#93A3B6] rounded-md mt-2.5"></p>
      <div className="mt-6 grid grid-cols-2 gap-x-5">
        <div className="h-64 bg-[#93A3B6] rounded-md"></div>
        <div className="h-64 bg-[#93A3B6] rounded-md"></div>
      </div>
    </section>
  );
}
