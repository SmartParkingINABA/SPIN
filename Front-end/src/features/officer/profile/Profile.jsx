import { useState } from "react";
import FormEdit from "./components/FormEdit";
import Header from "./components/Header";
import PrivateInformation from "./components/PrivateInformation";
import Statistic from "./components/Statistic";
import WorkInformation from "./components/WorkInformation";
import ButtonCta from "./components/ButtonCta";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
        <Header />
        <div className="mt-6 flex flex-col gap-y-5">
          <div className="flex gap-x-5">
            <PrivateInformation />
            <Statistic />
          </div>
          <div className="flex gap-x-5">
            <WorkInformation />
            <ButtonCta setIsModalOpen={() => setIsModalOpen(true)} />
          </div>
        </div>
      </section>
      {isModalOpen && <FormEdit onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
