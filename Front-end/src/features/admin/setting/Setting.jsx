import { useState } from "react";
import Header from "./components/Header";
import BoxWrapper from "../../../components/admin/ui/BoxWrapper";
import EditProfile from "./components/Form/EditProfile";
import EditPassword from "./components/Form/EditPassword";
import Message from "./components/Message";

export default function Setting() {
  const [valueName, setValueName] = useState("Rian Priansyah");
  const [valuePhoneNumber, setValuePhoneNumber] = useState("089764358712");

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <Header />
      <div className="mt-6 grid grid-cols-2 items-start gap-x-6">
        <div className="flex flex-col gap-y-6">
          <BoxWrapper title="Informasi Pribadi">
            <EditProfile
              valueName={valueName}
              setValueName={setValueName}
              valuePhoneNumber={valuePhoneNumber}
              setValuePhoneNumber={setValuePhoneNumber}
            />
          </BoxWrapper>
          <BoxWrapper title="Ubah Password">
            <EditPassword
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              showNewPassword={showNewPassword}
              setShowNewPassword={setShowNewPassword}
              showConfirmPassword={showConfirmPassword}
              setShowConfirmPassword={setShowConfirmPassword}
            />
          </BoxWrapper>
        </div>
        <Message />
      </div>
    </section>
  );
}
