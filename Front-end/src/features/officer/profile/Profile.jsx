import { useState } from "react";
import FormEdit from "./components/FormEdit";
import Header from "./components/Header";
import PrivateInformation from "./components/PrivateInformation";
import Statistic from "./components/Statistic";
import WorkInformation from "./components/WorkInformation";
import ButtonCta from "./components/ButtonCta";
import { useProfile } from "../../../hooks/officer/useProfile";
import ProfileSkeleton from "./components/ProfileSkeleton";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loading, profile, updateProfile } = useProfile();

  if (loading) return <ProfileSkeleton />;

  return (
    <>
      <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
        <Header />
        {profile ? (
          <div className="mt-4 sm:mt-6 flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <PrivateInformation data={profile.informasi_pribadi} />
              <Statistic data={profile.statistik_hari_ini} />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <WorkInformation data={profile.informasi_kerja} />
              <ButtonCta setIsModalOpen={() => setIsModalOpen(true)} />
            </div>
          </div>
        ) : (
          <p className="mt-4 sm:mt-6 text-[#93A3B6]">Belum ada data profile</p>
        )}
      </section>
      {isModalOpen && (
        <FormEdit
          onClose={() => setIsModalOpen(false)}
          data={profile?.informasi_pribadi}
          onSubmit={updateProfile}
          loading={loading}
        />
      )}
    </>
  );
}
