import { LuCar } from "react-icons/lu";

export default function Profile({ vehicle }) {
  return (
    <div className="flex items-center gap-x-3.5">
      <div className="bg-blue-100 rounded-sm p-2.5">
        <LuCar className="text-blue-600 w-6.5 h-fit" />
      </div>
      <div className="">
        <div className="flex items-center gap-x-2">
          <p className="text-[#FEF8FD] font-medium">{vehicle.plate}</p>
          <div className="flex items-center gap-x-1.5 mt-1">
            <p
              className={`${
                vehicle.category === "Mobil" ? "bg-yellow-200" : "bg-green-200"
              }  text-[#130F40] text-[12px] rounded-sm px-2 py-0.5 font-medium`}
            >
              {vehicle.category}
            </p>
            {vehicle.isParking && (
              <p className="text-[#130F40] bg-blue-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                Sedang Parkir
              </p>
            )}
          </div>
        </div>
        <div className="text-[14px]">
          <p className="text-[#93A3B6]">{vehicle.type}</p>
          <p className="text-[#93A3B6]">Pemilik: {vehicle.name}</p>
        </div>
      </div>
    </div>
  );
}
