import AboutSpin from "./components/AboutSpin";
import WhatSpin from "./components/WhatSpin";
import SpinFeatures from "./components/SpinFeatures";
import VisiAndMisi from "./components/VisiAndMisi";
import GoalSpin from "./components/GoalSpin";
import TechnologyUsing from "./components/TechnologyUsing";
import SpinValues from "./components/SpinValues";
import Footer from "./components/Footer";
export default function About() {
  return (
    <>
      <AboutSpin />
      <WhatSpin />
      <SpinFeatures />
      <VisiAndMisi />
      <GoalSpin />
      <TechnologyUsing />
      <SpinValues />
      <hr className="h-0.5 w-[86%] bg-[rgba(255,236,120,0.5)] mx-auto" />
      <Footer />
    </>
  );
}
