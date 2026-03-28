export default function QRCodeSkeleton() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <h1 className="h-4 w-[18%] bg-[#93A3B6] rounded-md"></h1>
      <p className="h-3 w-[14%] bg-[#93A3B6] rounded-md mt-2.5"></p>
      <div className="mt-5 flex items-start gap-6">
        <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md p-6 w-[70%]">
          <h2 className="h-4 w-[18%] bg-[#93A3B6] rounded-md mb-3.5"></h2>
          <p className="h-3 w-[14%] bg-[#93A3B6] rounded-md mb-2.5"></p>
          <p className="h-6 w-full bg-[#93A3B6] rounded-md"></p>
          <div className="mt-12 border border-[#FFEC78] bg-[#FEF8FD] w-2/5 h-[412px] mx-auto rounded-xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-48 h-48 mb-8 bg-[#93A3B6]"></div>
              <p className="h-4 w-[25%] bg-[#93A3B6] mx-auto rounded-md"></p>
              <p className="h-3 w-[50%] bg-[#93A3B6] mx-auto rounded-md mt-1.5"></p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6 mt-20">
            <p className="h-6 bg-[#93A3B6] rounded-md"></p>
            <p className="h-6 bg-[#93A3B6] rounded-md"></p>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md h-35 mb-2.5"></div>
          <div className="bg-[#1E1633] border border-[rgba(255,236,120,0.5)] rounded-md h-25"></div>
        </div>
      </div>
    </section>
  );
}
