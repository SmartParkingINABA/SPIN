export default function ProfileSkeleton() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <h1 className="h-4 w-[40%] sm:w-[20%] bg-[#93A3B6] rounded-md"></h1>
      <p className="h-3 w-[38%] sm:w-[18%] bg-[#93A3B6] rounded-md mt-2.5"></p>
      <div className="mt-4 sm:mt-6 flex flex-col gap-4 sm:gap-6">
        <div className="flex gap-4 sm:gap-6">
          <div className="bg-[#93A3B6] rounded-md w-full sm:w-2/3 h-64"></div>
          <div className="bg-[#93A3B6] rounded-md w-full sm:w-1/3"></div>
        </div>
        <div className="flex gap-4 sm:gap-6">
          <div className="bg-[#93A3B6] rounded-md w-full sm:w-2/3 h-48"></div>
          <div className="bg-[#93A3B6] rounded-md w-full sm:w-1/3"></div>
        </div>
      </div>
    </section>
  );
}
