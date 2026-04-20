export default function ScanQR({ data }) {
  return (
    <div className="mt-10 sm:mt-12 border border-[#FFEC78] bg-[#FEF8FD] w-full sm:w-2/5 h-[412px] mx-auto rounded-xl flex items-center justify-center">
      <div className="text-center">
        {data?.qr_image ? (
          <img
            src={data.qr_image}
            alt="QR Code"
            className="w-48 h-48 mx-auto mb-8 object-contain"
          />
        ) : (
          <div className="w-48 h-48 mb-8 bg-gray-200 animate-pulse" />
        )}

        <p className="text-[#1E1633] font-semibold">{data?.no_plat}</p>
        <p className="text-[#93A3B6] text-[12px] font-medium -mt-1">
          {data?.merk}
        </p>
      </div>
    </div>
  );
}
