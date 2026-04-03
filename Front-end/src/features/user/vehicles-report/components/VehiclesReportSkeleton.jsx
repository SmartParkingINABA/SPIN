export default function VehiclesReportSkeleton() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <div className="flex items-center justify-between">
        <div className="w-[20%]">
          <h1 className="h-4 w-full bg-[#93A3B6] rounded-md"></h1>
          <p className="h-3 w-[80%] bg-[#93A3B6] rounded-md mt-2.5"></p>
        </div>
        <p className="h-6 w-[14%] bg-[#93A3B6] rounded-md mt-2.5"></p>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-7">
        <div className="h-36 bg-[#93A3B6] rounded-md"></div>
        <div className="h-36 bg-[#93A3B6] rounded-md"></div>
      </div>
    </section>
  );
}
