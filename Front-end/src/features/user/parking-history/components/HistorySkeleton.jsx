export default function HistorySkeleton() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100dvh-60px)] overflow-y-auto">
      <div className="flex items-center justify-between">
        <div className="w-[40%] sm:w-[20%]">
          <h1 className="h-4 w-full bg-[#93A3B6] rounded-md"></h1>
          <p className="h-3 w-[80%] bg-[#93A3B6] rounded-md mt-1.5 sm:mt-2.5"></p>
        </div>
        <p className="h-8 w-[16%] sm:w-[14%] bg-[#93A3B6] rounded-md"></p>
      </div>
      <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-5 sm:p-6 mt-4 sm:mt-6">
        <div>
          <p className="h-4 w-[18%] bg-[#93A3B6] rounded-md"></p>
          <p className="h-8 w-full bg-[#93A3B6] rounded-md mt-1.5 sm:mt-2.5"></p>
        </div>
        <div>
          <p className="h-4 w-[18%] bg-[#93A3B6] rounded-md"></p>
          <p className="h-8 w-full bg-[#93A3B6] rounded-md mt-1.5 sm:mt-2.5"></p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
        {[...Array(3)].map((_, i) => (
          <div className="h-20 bg-[#93A3B6] rounded-md" key={i}></div>
        ))}
      </div>
      <div className="h-25 bg-[#93A3B6] rounded-md mt-4 sm:mt-6"></div>
    </section>
  );
}
