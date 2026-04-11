export default function ParkingHistorySkeleton() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <div className="flex items-center justify-between">
        <div className="w-[20%]">
          <h1 className="h-4 w-full bg-[#93A3B6] rounded-md"></h1>
          <p className="h-3 w-[80%] bg-[#93A3B6] rounded-md mt-2.5"></p>
        </div>
        <p className="h-6 w-[14%] bg-[#93A3B6] rounded-md mt-2.5"></p>
      </div>
      <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md grid grid-cols-2 gap-6 py-5 px-6 mt-6">
        <div>
          <p className="h-3 w-[18%] bg-[#93A3B6] rounded-md"></p>
          <p className="h-6 w-full bg-[#93A3B6] rounded-md mt-2.5"></p>
        </div>
        <div>
          <p className="h-3 w-[18%] bg-[#93A3B6] rounded-md"></p>
          <p className="h-6 w-full bg-[#93A3B6] rounded-md mt-2.5"></p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        {[...Array(3)].map((_, i) => (
          <div className="h-20 bg-[#93A3B6] rounded-md" key={i}></div>
        ))}
      </div>
      <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md py-5 px-6 mt-6">
        <p className="h-3 w-[18%] bg-[#93A3B6] rounded-md"></p>
        <div className="h-24 bg-[#93A3B6] rounded-md mt-2.5"></div>
      </div>
    </section>
  );
}
