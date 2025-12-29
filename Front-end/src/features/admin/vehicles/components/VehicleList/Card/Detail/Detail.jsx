import Header from "./Header";
import Profile from "./Profile";
import ParkingHistory from "./ParkingHistory";

export default function Detail({ onClose }) {
  const riderProfile = {
    name: "Ahmad Fauzi",
    plate: "B 1234 XYZ",
    category: "Motor",
    type: "Honda Beat",
    status: "Aktif",
  };

  const parkingHistory = [
    {
      plate: "B 1234 XYZ",
      entry: "27/11/2024, 08.30.00",
      exit: null,
      duration: null,
    },
    {
      plate: "B 9876 ABC",
      entry: "25/11/2024, 08.00.00",
      exit: "25/11/2024, 18.00.00",
      duration: "10j 0m",
    },
  ];

  return (
    <div className="font-ubuntu flex justify-center items-center h-screen w-full fixed inset-0 z-50 bg-[rgba(0,0,0,0.54)]">
      <div className="border border-[rgba(255,236,120,0.5)] bg-[#130F40] rounded-md p-5 pt-6 pr-0 pb-0 w-1/3">
        <Header onClose={onClose} />
        <div className="h-80 w-full overflow-y-auto pr-5 pb-5">
          <Profile profile={riderProfile} />
          <ParkingHistory history={parkingHistory} />
        </div>
      </div>
    </div>
  );
}
