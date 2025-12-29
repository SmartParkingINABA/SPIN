export default function Profile({ profile }) {
  return (
    <div className="grid grid-cols-2 gap-x-3 bg-[#1E1633] rounded-sm py-2 px-4 mb-6">
      <div className="flex flex-col gap-y-3">
        <Info label="No. Plat" value={profile.plate} />
        <div>
          <p className="text-[#93A3B6] text-[14px]">Jenis</p>
          <p className="text-[#130F40] bg-gray-200 rounded-sm px-2.5 py-0.5 w-fit text-[12px]">
            {profile.category}
          </p>
        </div>
        <Info label="Nama Pemilik" value={profile.name} />
      </div>
      <div className="flex flex-col gap-y-3">
        <Info label="Merk / Model" value={profile.type} />

        <div>
          <p className="text-[#93A3B6] text-[14px]">Status</p>
          <p
            className={`${
              profile.status === "Aktif"
                ? "text-green-500 bg-green-200"
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
      <p className="text-[#FEF8FD]">{value || "-"}</p>
    </div>
  );
}
