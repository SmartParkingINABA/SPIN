import Header from "./components/Header";
import StatsGrid from "./components/Stats/StatsGrid";
import VehicleGrid from "./components/VehicleCard/VehicleGrid";
import StatusGrid from "./components/StatusCard/StatusGrid";
import NotificationGrid from "./components/NotificationCard/NotificationGrid";
import BoxWrapper from "../../../components/ui/BoxWrapper";
import { useDashboard } from "../../../hooks/user/useDashboard";
import { useAuth } from "../../../context/useAuth";
import DashboardSkeleton from "./components/DashboardSkeleton";

export default function Dashboard() {
  const { loading, overview } = useDashboard();
  const { user } = useAuth();

  const summary = overview?.summary || {};
  const vehiclesActive = overview?.kendaraan_aktif || [];
  const vehiclesStatus = overview?.status_Parkir_terakhir || [];
  const notifications = overview?.notifikasi_terbaru || [];

  if (loading) return <DashboardSkeleton />;

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100dvh-60px)] overflow-y-auto">
      <Header user={user} />
      <StatsGrid summary={summary} />
      <div className="mt-4 sm:mt-6">
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
      <div className="mt-4 sm:mt-6">
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
      <div className="mt-4 sm:mt-6">
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
  );
}
