export default function BoxWrapper({ title, children }) {
  return (
    <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] p-5 sm:p-6 rounded-md">
      <p className="text-[#FEF8FD] font-medium">{title}</p>
      {children}
    </div>
  );
}
