export default function ProfileSkeleton() {
  return (
    <>
      <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
        <h1 className="h-4 w-[20%] bg-[#93A3B6] rounded-md"></h1>
        <p className="h-3 w-[18%] bg-[#93A3B6] rounded-md mt-2.5"></p>
        <div className="mt-6 flex flex-col gap-6">
          <div className="flex gap-6">
            <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md w-2/3">
              <div className="flex items-center justify-between">
                <p className="h-3 w-[15%] bg-[#93A3B6] rounded-md mt-2.5"></p>
                <p className="h-3.5 w-[8%] bg-[#93A3B6] rounded-sm"></p>
              </div>
              <form className="mt-3.5 w-1/2" noValidate>
                <div className="mb-2.5">
                  <p className="h-3 w-[22%] bg-[#93A3B6] rounded-md"></p>
                  <p className="h-3 w-[18%] bg-[#130F40] rounded-md mt-2.5"></p>
                </div>
                <div className="mb-2.5">
                  <p className="h-3 w-[22%] bg-[#93A3B6] rounded-md"></p>
                  <p className="h-3 w-[18%] bg-[#130F40] rounded-md mt-2.5"></p>
                </div>
                <div className="mb-2.5">
                  <p className="h-3 w-[22%] bg-[#93A3B6] rounded-md"></p>
                  <p className="h-3 w-[18%] bg-[#130F40] rounded-md mt-2.5"></p>
                </div>
                <div className="">
                  <p className="h-3 w-[22%] bg-[#93A3B6] rounded-md"></p>
                  <p className="h-3 w-[18%] bg-[#130F40] rounded-md mt-2.5"></p>
                </div>
              </form>
            </div>
            <div className="w-1/3 flex flex-col gap-6">
              <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
                <p className="h-3 w-[15%] bg-[#93A3B6] rounded-md mb-6"></p>
                <div className="w-30 h-30 mx-auto rounded-full bg-[#93A3B6]"></div>
                <p className="h-3 w-[13%] bg-[#93A3B6] rounded-md mx-auto mt-4 mb-2"></p>
                <p className="h-3 w-[18%] bg-[#130F40] rounded-md mx-auto"></p>
                <p className="bg-[#93A3B6] rounded-sm py-1.5 h-5 w-full mt-3.5"></p>
              </div>
              <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
                <p className="h-3 w-[15%] bg-[#93A3B6] rounded-md"></p>
                <div className="mt-3.5 flex flex-col gap-y-3.5">
                  <div className="pb-3 border-b border-b-[rgba(255,236,120,0.5)] flex flex-col gap-2.5">
                    <p className="h-3 w-[15%] bg-[#130F40] rounded-md"></p>
                    <p className="h-3.5 w-[18%] bg-[#93A3B6] rounded-md"></p>
                  </div>
                  <div className="pb-3 border-b border-b-[rgba(255,236,120,0.5)] flex flex-col gap-2.5">
                    <p className="h-3 w-[15%] bg-[#130F40] rounded-md"></p>
                    <p className="h-3.5 w-[18%] bg-[#93A3B6] rounded-md"></p>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <p className="h-3 w-[15%] bg-[#130F40] rounded-md"></p>
                    <p className="h-3.5 w-[18%] bg-[#93A3B6] rounded-md"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
