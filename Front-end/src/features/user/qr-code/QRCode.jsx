import Header from "./components/Header";
import VehiclesQR from "./components/VehiclesQR/VehiclesQR";
import HowToUse from "./components/HowToUse";
import Information from "./components/Information";

export default function QRCode() {
  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <Header />
      <div className="mt-5 flex items-start gap-6">
        <VehiclesQR />
        <div className="w-[30%]">
          <HowToUse />
          <Information />
        </div>
      </div>
    </section>
  );
}
