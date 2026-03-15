import { useEffect, useState } from "react";
import Header from "./components/Header";
import PrivateInformation from "./components/PrivateInformation/PrivateInformation";
import PhotoProfile from "./components/PhotoProfile/PhotoProfile";
import Statistik from "./components/Statistik";
import EditPassword from "./components/EditPassword";
import ButtonCta from "./components/ButtonCta";
import { useGetAccountSettings } from "../../../hooks/user/useAccountSettings";
import toast from "react-hot-toast";
import ProfileSkeleton from "./components/ProfileSkeleton";

export default function Profile() {
  const {
    data,
    loading,
    error,
    handleUpdateProfile,
    handleUpdatePhoto,
    handleChangePassword,
  } = useGetAccountSettings();
  const [isUpdating, setIsUpdating] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (data) {
      setFullName(data.profil.nama_pengendara || "");
      setPhoneNumber(data.profil.no_telp || "");
      setAddress(data.profil.alamat || "");
      setEmail(data.profil.email || "");
    }
    console.log(data);
  }, [data]);

  const handleSaveProfile = async () => {
    try {
      setIsUpdating(true);
      await handleUpdateProfile({
        nama_pengendara: fullName,
        no_telp: phoneNumber,
        alamat: address,
      });
      setIsEditing(false);
      toast.success("Profil berhasil diperbaharui!");
    } catch (err) {
      if (!err.response) {
        toast.error("Tidak bisa terhubung ke server!");
      } else {
        toast.error(
          err.response?.data?.message || "Gagal memperbaharui profil.",
        );
      }
    } finally {
      setIsUpdating(false);
    }
  };

  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <>
      {!loading ? (
        <ProfileSkeleton />
      ) : (
        <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
          <Header />
          <div className="mt-6 flex flex-col gap-6">
            <div className="flex gap-6">
              <PrivateInformation
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                fullName={fullName}
                setFullName={setFullName}
                email={email}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                address={address}
                setAddress={setAddress}
                handleSave={handleSaveProfile}
                loading={isUpdating}
              />
              <div className="w-1/3 flex flex-col gap-6">
                <PhotoProfile
                  onUpload={handleUpdatePhoto}
                  userData={data?.profil}
                />
                <Statistik statistik={data?.statistik} />
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <EditPassword
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                showNewPassword={showNewPassword}
                setShowNewPassword={setShowNewPassword}
                showConfirmPassword={showConfirmPassword}
                setShowConfirmPassword={setShowConfirmPassword}
                onUpdatePassword={handleChangePassword}
              />
              <ButtonCta />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
