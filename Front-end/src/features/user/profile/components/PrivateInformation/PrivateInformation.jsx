import EditForm from "./EditForm";
import EditProfile from "./EditProfile";

export default function PrivateInformation({
  isEditing,
  setIsEditing,
  fullName,
  setFullName,
  email,
  phoneNumber,
  setPhoneNumber,
  address,
  setAddress,
  handleSave,
}) {
  return (
    <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md w-2/3">
      <EditProfile isEditing={isEditing} setIsEditing={setIsEditing} />
      <EditForm
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        fullName={fullName}
        setFullName={setFullName}
        email={email}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        address={address}
        setAddress={setAddress}
        handleSave={handleSave}
      />
    </div>
  );
}
