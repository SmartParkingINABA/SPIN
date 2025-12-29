import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineCameraAlt } from "react-icons/md";
import { LuCreditCard, LuCar } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { useState } from "react";

export default function OfficerScanQR() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [vehicleStatus, setVehicleStatus] = useState(null);
  const [actionsStatus, setActionsStatus] = useState(null);
  const [searchID, setSearchID] = useState("");

  const [vehicles, setVehicles] = useState([
    {
      id: "QR-2024-002",
      name: "Siti Nurhaliza",
      number_plate: "Z 2029 AH",
      vehicle_type: "Motor",
      registered_since: "20 Januari 2024",
      status: "inside",
    },
  ]);

  const handleSearch = () => {
    if (!searchID) return;

    const found = vehicles.find((item) => item.id === searchID);

    if (found) {
      setScanResult(found);
      setVehicleStatus(found.status);
      setActionsStatus(null);
    } else {
      alert("ID tidak ditemukan");
    }
  };

  const handleScanClick = () => {
    if (isScanning) return;

    setIsScanning(true);

    setTimeout(() => {
      setIsScanning(false);

      const v = vehicles[0];
      setScanResult(v);

      // status awal pertama kali scan
      setVehicleStatus(v?.status ?? "outside");
    }, 2500);
  };

  const resetView = () => {
    setActionsStatus(null);
    setScanResult(null);
    setVehicleStatus(null);
    setSearchID("");
  };

  const handleIn = () => {
    if (!scanResult) return;

    // jika kendaraan diluar, baru boleh masuk
    if (vehicleStatus === "outside") {
      setVehicles((prev) =>
        prev.map((v) =>
          v.id === scanResult.id ? { ...v, status: "inside" } : v
        )
      );

      setVehicleStatus("inside");
    }

    setActionsStatus("in");

    setTimeout(() => {
      resetView();
    }, 2500);
  };

  const handleExit = () => {
    if (!scanResult) return;
    // jika kendaraan diluar, baru boleh masuk
    if (vehicleStatus === "inside") {
      setVehicles((prev) =>
        prev.map((v) =>
          v.id === scanResult.id ? { ...v, status: "outside" } : v
        )
      );

      setVehicleStatus("outside");
    }

    setActionsStatus("out");

    setTimeout(() => {
      resetView();
    }, 2500);
  };

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <h1 className="text-[#FEF8FD] text-2xl font-bold">
        Kendaraan Parkir Aktif
      </h1>
      <p className="text-[#93A3B6] font-medium mt-1">
        Daftar kendaraan yang sedang parkir saat ini
      </p>
      <div className="mt-6 grid grid-cols-2 gap-x-5">
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
          <p className="text-[#FEF8FD] font-medium">Scanner QR</p>
          <div className="mt-6 bg-[#130F40] h-130 flex justify-center items-center rounded-md">
            <div className="text-center border-2 border-[rgba(255,236,120,0.5)] rounded-xl py-13 w-[45%]">
              <MdOutlineCameraAlt className="h-fit w-13 mx-auto text-[#93A3B6] mb-3" />
              {isScanning ? (
                <>
                  <p className="text-[#FEF8FD] mb-1.5">Memindai QR Code...</p>
                  <p className="text-[#93A3B6]">Mohon Tunggu</p>
                </>
              ) : (
                <>
                  <p className="text-[#93A3B6] mb-1.5">Kamera siap memindai</p>
                  <p className="text-[#93A3B6]">Arahkan QR code ke kamera</p>
                </>
              )}
            </div>
          </div>
          <button
            onClick={handleScanClick}
            className={`bg-[#FFDB58] mt-6 w-full rounded-md py-2.5 transition
               ${isScanning ? "opacity-80 cursor-not-allowed" : "opacity-100"}
                hover:opacity-80`}
          >
            <div className="flex items-center gap-x-3 w-fit mx-auto">
              <MdOutlineCameraAlt className="h-fit w-5 text-[#130F40]" />
              {isScanning ? (
                <p className="text-[#130F40] font-medium">Memindai...</p>
              ) : (
                <p className="text-[#130F40] font-medium">Mulai Scan QR</p>
              )}
            </div>
          </button>
          <hr className="h-0.5 bg-[#93A3B6] w-full my-6" />
          <p className="text-[#FEF8FD] font-medium">Input Manual ID QR</p>
          <p className="text-[#93A3B6] text-[14px]">
            Gunakan jika gagal scan otomatis (contoh: QR-2020-001, QR-2020-002)
          </p>
          <div className="flex gap-x-3 mt-3">
            <input
              type="text"
              value={searchID}
              onChange={(e) => setSearchID(e.target.value)}
              className="w-full bg-[#F5E79E] rounded-md py-2.5 px-4 outline-0"
              placeholder="Masukan ID QR"
            />
            <button
              onClick={handleSearch}
              className="py-2.5 bg-[#FFDB58] text-[#130F40] px-5 rounded-md opacity-100 hover:opacity-80 transition"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
          <p className="text-[#FEF8FD] font-medium">Hasil Scan & Konfirmasi</p>
          {!scanResult && !actionsStatus && (
            <div className="mt-20">
              <IoMdCloseCircleOutline className="h-fit w-13 text-[#93A3B6] mx-auto mb-3" />
              <p className="text-[#93A3B6] text-center mb-1.5">
                Belum ada data terscan
              </p>
              <p className="text-[#93A3B6] text-center">
                Scan QR code atau input manual
              </p>
            </div>
          )}

          {scanResult && !actionsStatus && (
            <div className="mt-6">
              <div className="flex justify-between items-center border border-green-400 bg-green-100 rounded-sm px-4 py-3 mb-4">
                <div className="flex items-center gap-x-2.5">
                  <FiCheckCircle className="h-fit w-5 text-green-400" />
                  <p className="text-[#48515b] font-medium">
                    QR Valid & Terdaftar
                  </p>
                </div>
                <p className="bg-[#130F40] text-[#FEF8FD] rounded-sm px-3.5 py-0.5">
                  aktif
                </p>
              </div>
              <div className="flex items-start gap-x-2.5 mb-4">
                <LuCreditCard className="h-fit w-5.5 text-[#93A3B6] mt-0.5" />
                <div>
                  <p className="text-[#93A3B6] font-medium">ID QR Code</p>
                  <p className="text-[#FEF8FD] font-medium">{scanResult.id}</p>
                </div>
              </div>
              <div className="flex items-start gap-x-2.5 mb-4">
                <LuCar className="h-fit w-5.5 text-[#93A3B6] mt-0.5" />
                <div>
                  <p className="text-[#93A3B6] font-medium">Plat Nomor</p>
                  <p className="text-[#FEF8FD] font-medium">
                    {scanResult.number_plate}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-2.5 mb-4">
                <IoPersonOutline className="h-fit w-5.5 text-[#93A3B6] mt-0.5" />
                <div>
                  <p className="text-[#93A3B6] font-medium">Nama Pengendara</p>
                  <p className="text-[#FEF8FD] font-medium">
                    {scanResult.name}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-2.5 mb-4">
                <LuCar className="h-fit w-5.5 text-[#93A3B6] mt-0.5" />
                <div>
                  <p className="text-[#93A3B6] font-medium">Jenis Kendaraan</p>
                  <p className="text-[#FEF8FD] font-medium">
                    {scanResult.vehicle_type}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-2.5 mb-4">
                <FaRegClock className="h-fit w-5.5 text-[#93A3B6] mt-0.5" />
                <div>
                  <p className="text-[#93A3B6] font-medium">Terdaftar Sejak</p>
                  <p className="text-[#FEF8FD] font-medium">
                    {scanResult.registered_since}
                  </p>
                </div>
              </div>
              <div className="border border-blue-400 bg-blue-100 rounded-sm px-4 py-3 mb-6">
                <p className="text-[#48515b]">Status Kendaraan Saat Ini</p>
                {vehicleStatus === "outside" && (
                  <p className="text-[#48515b]">
                    <span className="bg-[#48515b] text-[#FEF8FD] rounded-sm px-2 py-0.5">
                      Di Luar Parkir
                    </span>{" "}
                    Gunakan tombol "Konfirmasi Masuk"
                  </p>
                )}

                {vehicleStatus === "inside" && (
                  <p className="text-[#48515b]">
                    <span className="bg-orange-500 text-[#FEF8FD] rounded-sm px-2 py-0.5">
                      Di Dalam Parkir
                    </span>{" "}
                    Gunakan tombol "Konfirmasi Keluar"
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-y-3 mb-3.5">
                <button
                  className={`bg-green-500 flex rounded-sm py-2.5 transition ${
                    vehicleStatus === "inside"
                      ? "opacity-80 cursor-not-allowed"
                      : "opacity-100"
                  } hover:opacity-80`}
                  onClick={handleIn}
                >
                  <div className="flex items-center gap-x-3 text-[#FEF8FD] mx-auto">
                    <FaArrowRightLong className="w-5 h-fit" />
                    <p>Konfirmasi Masuk</p>
                  </div>
                </button>
                <button
                  className={`bg-blue-500 flex rounded-sm py-2.5 transition ${
                    vehicleStatus === "outside"
                      ? "opacity-80 cursor-not-allowed"
                      : "opacity-100"
                  } hover:opacity-80`}
                  onClick={handleExit}
                >
                  <div className="flex items-center gap-x-3 text-[#FEF8FD] mx-auto">
                    <FaArrowLeftLong className="w-5 h-fit" />
                    <p>Konfirmasi Keluar</p>
                  </div>
                </button>
              </div>
              <p className="text-[12px] text-[#FEF8FD] flex items-center gap-x-1.5 mx-auto w-fit">
                <MdOutlineTipsAndUpdates className="w-3 h-fit text-[#FFDB58]" />
                Mahasiswa akan menerima notifikasi otomatis setelah konfirmasi
              </p>
            </div>
          )}

          {actionsStatus === "in" && (
            <div className="mt-6">
              <div className="flex flex-col gap-y-2 border border-green-400 bg-green-100 rounded-sm px-4 py-3 mb-4">
                <div className="flex items-center gap-x-2.5">
                  <FiCheckCircle className="h-fit w-5 text-green-400" />
                  <p className="text-[#48515b] font-medium">
                    Kendaraan berhasil dicatat MASUK
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <FaRegClock className="h-fit w-4 text-[#93A3B6]" />
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    10 Desember 2025 pukul 12:38:12
                  </p>
                </div>
              </div>
              <div className="border border-gray-500 bg-blue-100 rounded-sm px-4 py-3 mb-4">
                <div className="flex items-center gap-x-3 text-[#FEF8FD] mb-2">
                  <FaArrowRightLong className="w-5 h-fit text-green-500" />
                  <p className="text-green-500">KENDARAAN MASUK</p>
                </div>
                <p className="font-medium text-[#93A3B6] mb-0.5">
                  Plat Nomor: <span className="text-[#48515b]">Z 2020 HAH</span>
                </p>
                <p className="font-medium text-[#93A3B6]">
                  Jenis: <span className="text-[#48515b]">Motor</span>
                </p>
              </div>
            </div>
          )}

          {actionsStatus === "out" && (
            <div className="mt-6">
              <div className="flex flex-col gap-y-2 border border-green-500 bg-green-100 rounded-sm px-4 py-3 mb-4">
                <div className="flex items-center gap-x-2.5">
                  <FiCheckCircle className="h-fit w-5 text-green-500" />
                  <p className="text-[#48515b] font-medium">
                    Kendaraan berhasil dicatat Keluar
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <FaRegClock className="h-fit w-4 text-[#93A3B6]" />
                  <p className="text-[#93A3B6] text-[12px] font-medium">
                    10 Desember 2025 pukul 12:38:12
                  </p>
                </div>
              </div>
              <div className="border border-gray-500 bg-blue-100 rounded-sm px-4 py-3 mb-4">
                <div className="flex items-center gap-x-3 text-[#FEF8FD] mb-2">
                  <FaArrowRightLong className="w-5 h-fit text-blue-500" />
                  <p className="text-blue-500">KENDARAAN KELUAR</p>
                </div>
                <p className="font-medium text-[#93A3B6] mb-0.5">
                  Plat Nomor: <span className="text-[#48515b]">Z 2020 HAH</span>
                </p>
                <p className="font-medium text-[#93A3B6]">
                  Jenis: <span className="text-[#48515b]">Motor</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
