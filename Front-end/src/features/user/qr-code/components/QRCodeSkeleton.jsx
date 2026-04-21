export default function QRCodeSkeleton() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100dvh-60px)] overflow-y-auto">
      <h1 className="h-4 w-[40%] sm:w-[20%] bg-[#93A3B6] rounded-md"></h1>
      <p className="h-3 w-[38%] sm:w-[18%] bg-[#93A3B6] rounded-md mt-1.5 sm:mt-2.5"></p>
      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
        <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md p-5 sm:p-6 w-full sm:w-[70%]">
          <h2 className="h-4 w-[38%] sm:w-[18%] bg-[#93A3B6] rounded-md mb-1.5 sm:mb-2.5"></h2>
          <p className="h-3 w-[36%] sm:w-[16%] bg-[#93A3B6] rounded-md mb-2.5 sm:mb-3.5"></p>
          <p className="h-8 w-full bg-[#93A3B6] rounded-md"></p>
          <div className="mt-8 sm:mt-12 border border-[#FFEC78] bg-[#FEF8FD] w-full sm:w-2/5 h-[412px] mx-auto rounded-xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-48 h-48 mb-8 bg-[#93A3B6]"></div>
              <p className="h-4 w-[25%] bg-[#93A3B6] mx-auto rounded-md"></p>
              <p className="h-3.5 w-[50%] bg-[#93A3B6] mx-auto rounded-md mt-1.5"></p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-16 sm:mt-20">
            <p className="h-8 bg-[#93A3B6] rounded-md"></p>
            <p className="h-8 bg-[#93A3B6] rounded-md"></p>
          </div>
        </div>
        <div className="w-full sm:w-[30%]">
          <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md h-45 mb-3.5"></div>
          <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md h-35"></div>
        </div>
      </div>
    </section>
  );
}
