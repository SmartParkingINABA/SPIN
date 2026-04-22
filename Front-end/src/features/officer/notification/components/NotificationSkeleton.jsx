export default function NotificationSkeleton() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100dvh-60px)] overflow-y-auto">
      <h1 className="h-4 w-[40%] sm:w-[20%] bg-[#93A3B6] rounded-md"></h1>
      <div className="mt-1 flex items-center justify-between">
        <p className="h-3 w-[38%] sm:w-[18%] bg-[#93A3B6] rounded-md mt-2.5"></p>
        <p className="h-3 w-[34%] sm:w-[14%] bg-[#93A3B6] rounded-md mt-2.5"></p>
      </div>
      <div className="mt-4 sm:mt-6 flex flex-col gap-y-3.5">
        {[...Array(4)].map((_, i) => (
          <div className="h-24 bg-[#93A3B6] rounded-md" key={i}></div>
        ))}
      </div>
    </section>
  );
}
