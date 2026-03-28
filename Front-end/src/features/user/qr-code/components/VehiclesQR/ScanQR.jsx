export default function ScanQR({ qrData }) {
  return (
    <div className="mt-12 border border-[#FFEC78] bg-[#FEF8FD] w-2/5 h-[412px] mx-auto rounded-xl flex items-center justify-center">
      <div className="text-center">
        {qrData?.qr_url ? (
          <img
            src={qrData.qr_url}
            alt="QR Code"
            className="w-48 h-48 mx-auto mb-8 object-contain"
          />
        ) : (
          <div className="w-48 h-48 mb-8 bg-gray-200 animate-pulse" />
        )}

        <p className="text-[#1E1633] font-semibold">
          {qrData?.plate_number || "Memuat..."}
        </p>
        <p className="text-[#93A3B6] text-[12px] font-medium -mt-1">
          {qrData?.vehicle_name || "Merek Kendaraan"}
        </p>
      </div>
    </div>
  );
}
