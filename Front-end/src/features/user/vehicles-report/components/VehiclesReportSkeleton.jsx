export default function VehiclesReportSkeleton() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100dvh-60px)] overflow-y-auto">
      <div className="flex items-center justify-between">
        <div className="w-[40%] sm:w-[20%]">
          <h1 className="h-4 w-full bg-[#93A3B6] rounded-md"></h1>
          <p className="h-3 w-[80%] bg-[#93A3B6] rounded-md mt-1.5 sm:mt-2.5"></p>
        </div>
        <p className="h-6 w-[18%] sm:w-[14%] bg-[#93A3B6] rounded-md"></p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
        <div className="h-48 sm:h-56 bg-[#93A3B6] rounded-md"></div>
        <div className="h-48 sm:h-56 bg-[#93A3B6] rounded-md"></div>
      </div>
    </section>
  );
}
