import { useState } from "react";
import Header from "./components/Header";
import PrivateInformation from "./components/PrivateInformation/PrivateInformation";
import PhotoProfile from "./components/PhotoProfile/PhotoProfile";
import Statistik from "./components/Statistik";
import EditPassword from "./components/EditPassword";
import ButtonCta from "./components/ButtonCta";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@mail.com");
  const [phoneNumber, setPhoneNumber] = useState("+18975650566");
  const [address, setAddress] = useState("jl. karapitan no. 12");

  const handleSave = () => {
    // logic
    setIsEditing(false);
  };

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
              setEmail={setEmail}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              address={address}
              setAddress={setAddress}
              handleSave={handleSave}
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
