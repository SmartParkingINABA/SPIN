import Header from "./components/Header";
import StatsGrid from "./components/Stats/StatsGrid";
import VehicleGrid from "./components/VehicleCard/VehicleGrid";
import StatusGrid from "./components/StatusCard/StatusGrid";
import NotificationGrid from "./components/NotificationCard/NotificationGrid";
import BoxWrapper from "../../../components/ui/BoxWrapper";
import { useDashboard } from "../../../hooks/user/useDashboard";
import { useAuth } from "../../../context/useAuth";
import DashboardSkeleton from "./components/DashboardSkeleton";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { loading, overview, error } = useDashboard();
  const { user, updateProfileState } = useAuth();
  const [userProfile, setUserProfile] = useState(() => {
    const savedData = localStorage.getItem("user_profile");
    return savedData ? JSON.parse(savedData) : null;
  });

  useEffect(() => {
    if (overview?.summary?.nama_pengendara) {
      const profileData = {
        nama_pengendara: overview.summary.nama_pengendara,
        foto_profil: overview.summary.foto_profil,
      };
      updateProfileState(profileData);
      setUserProfile(profileData);
    }

    const handleUpdate = (e) => {
      setUserProfile(e.detail);
    };

    window.addEventListener("profile-updated", handleUpdate);
    return () => window.removeEventListener("profile-updated", handleUpdate);
  }, [overview, updateProfileState]);

  const summary = overview?.summary || {};
  const vehiclesActive = overview?.kendaraan_aktif || [];
  const vehiclesStatus = overview?.status_Parkir_terakhir || [];
  const notifications = overview?.notifikasi_terbaru || [];

  if (error) {
    return <div className="text-red-500 p-10">Failed to load dashboard</div>;
  }

  const displayIdentity = userProfile?.nama_pengendara || user?.email;

  return (
    <>
      {loading ? (
        <DashboardSkeleton />
      ) : (
        <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
          <Header user={displayIdentity} />
          <div className="mt-6">
            <StatsGrid summary={summary} />
          </div>
          <div className="mt-6">
            <BoxWrapper title="Kendaraan Aktif">
              {vehiclesActive.length === 0 ? (
                <p className="text-[#93A3B6] text-[14px] mt-1">
                  Belum ada kendaraan aktif
                </p>
              ) : (
                <VehicleGrid vehicles={vehiclesActive} />
              )}
            </BoxWrapper>
          </div>
          <div className="mt-6">
            <BoxWrapper title="Status Parkir Terakhir">
              {vehiclesStatus.length == 0 ? (
                <p className="text-[#93A3B6] text-[14px] mt-1">
                  Belum ada riwayat parkir
                </p>
              ) : (
                <StatusGrid vehicles={vehiclesStatus} />
              )}
            </BoxWrapper>
          </div>
          <div className="mt-6">
            <BoxWrapper title="Notifikasi Terbaru">
              {notifications.length === 0 ? (
                <p className="text-[#93A3B6] text-[14px] mt-1">
                  Tidak ada notifikasi
                </p>
              ) : (
                <NotificationGrid notifications={notifications} />
              )}
            </BoxWrapper>
          </div>
        </section>
      )}
    </>
  );
}
