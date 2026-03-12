import { useEffect, useState } from "react";
import Header from "./components/Header";
import PrivateInformation from "./components/PrivateInformation/PrivateInformation";
import PhotoProfile from "./components/PhotoProfile/PhotoProfile";
import Statistik from "./components/Statistik";
import EditPassword from "./components/EditPassword";
import ButtonCta from "./components/ButtonCta";
import { useGetAccountSettings } from "../../../hooks/user/useAccountSettings";
import toast from "react-hot-toast";

export default function Profile() {
  const {
    data,
    loading,
    error,
    handleUpdateProfile,
    handleUpdatePhoto,
    handleChangePassword,
  } = useGetAccountSettings();

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
      setFullName(data.profil.nama_pengendara || "Masukan nama lengkap anda");
      setPhoneNumber(data.profil.no_telp || "Masukan no telepon anda");
      setAddress(data.profile.alamat || "Masukan alamat anda");
      setEmail(data.profile.email || "");
    }
    console.log(data);
    console.log(handleUpdateProfile);
    console.log(handleUpdatePhoto);
    console.log(data);
  }, [data, handleUpdateProfile, handleUpdatePhoto, handleChangePassword]);

  const handleSaveProfile = async () => {
    try {
      await handleUpdateProfile({
        nama_pengendara: fullName,
        no_telp: phoneNumber,
        alamat: address,
      });
      setIsEditing(false);
      toast.success("Profil berhasil diperbaharui!");
    } catch (err) {
      toast.error("Gagal memperbaharui profil.");
    }
  };

  if (loading) return <div className="text-black">Loading data...</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <>
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
            />
            <div className="w-1/3 flex flex-col gap-6">
              <PhotoProfile />
              <Statistik />
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
            />
            <ButtonCta />
          </div>
        </div>
      </section>
    </>
  );
}
