export default function DashboardSkeleton() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <h1 className="h-4 w-[20%] bg-[#93A3B6] rounded-md"></h1>
      <p className="h-3 w-[18%] bg-[#93A3B6] rounded-md mt-2.5"></p>
      <div className="mt-6">
        <div className="grid grid-cols-4 gap-x-6">
          {[...Array(4)].map((_, i) => (
            <div
              className="h-24 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] rounded-md"
              key={i}
            ></div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
          <p className="h-3 w-[18%] bg-[#93A3B6] rounded-md"></p>
          <div className="flex flex-col gap-2 mt-3.5">
            {[...Array(2)].map((_, i) => (
              <div className="h-9 rounded-md bg-[#130F40]" key={i}></div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
          <p className="h-3 w-[18%] bg-[#93A3B6] rounded-md"></p>
          <div className="flex flex-col gap-2 mt-3.5">
            {[...Array(2)].map((_, i) => (
              <div className="h-9 rounded-md bg-[#130F40]" key={i}></div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
          <p className="h-3 w-[18%] bg-[#93A3B6] rounded-md"></p>
          <div className="flex flex-col gap-2 mt-3.5">
            {[...Array(2)].map((_, i) => (
              <div className="h-9 rounded-md bg-[#130F40]" key={i}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
