export default function Profile({ profile }) {
  return (
    <div className="grid grid-cols-2 gap-x-3 bg-[#1E1633] rounded-sm py-2 px-4 mb-6">
      <div className="flex flex-col gap-y-3">
        <Info label="Nama Lengkap" value={profile.name} />
        <Info label="No. HP" value={profile.phone} />
        <Info label="Alamat" value={profile.address} />
      </div>
      <div className="flex flex-col gap-y-3">
        <Info label="Email" value={profile.email} />
        <div>
          <p className="text-[#93A3B6] text-[14px]">Status</p>
          <p
            className={`${
              profile.status === "Aktif"
                ? "text-green-600 bg-green-200"
                : "text-[#130F40]  bg-gray-200"
            } rounded-sm px-2.5 py-0.5 w-fit text-[12px]`}
          >
            {profile.status}
          </p>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-[#93A3B6] text-[14px]">{label}</p>
      <p className="text-[#fef8fd]">{value || "-"}</p>
    </div>
  );
}
