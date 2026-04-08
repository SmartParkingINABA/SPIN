export default function ProfileSkeleton() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <h1 className="h-4 w-[20%] bg-[#93A3B6] rounded-md"></h1>
      <p className="h-3 w-[18%] bg-[#93A3B6] rounded-md mt-2.5"></p>
      <div className="mt-6 flex flex-col gap-y-5">
        <div className="flex gap-x-5">
          <div className="bg-[#93A3B6] rounded-md w-2/3 h-64"></div>
          <div className="bg-[#93A3B6] rounded-md w-1/3"></div>
        </div>
        <div className="flex gap-x-5">
          <div className="bg-[#93A3B6] rounded-md w-2/3 h-48"></div>
          <div className="bg-[#93A3B6] rounded-md w-1/3"></div>
        </div>
      </div>
    </section>
  );
}
