import TechSlider from "../../../../components/public/TechSlider";

export default function TechnologyUsing() {
  return (
    <section className="px-25 pt-20 pb-16 bg-[#1E1633]">
      <h1 className="text-[#ffec78] text-5xl mb-5 font-bold text-center">
        Teknologi yang Digunakan
      </h1>
      <p className="text-[#93A3B6] font-medium text-center">
        Teknologi modern dan profesional untuk sistem yang handal
      </p>
      <div className="mt-10 w-2/3 mx-auto">
        <TechSlider />
      </div>
    </section>
  );
}
