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
  loading,
}) {
  return (
    <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] p-5 sm:p-6 rounded-md w-full sm:w-2/3 order-2">
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
        loading={loading}
      />
    </div>
  );
}
