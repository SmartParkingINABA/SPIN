export default function BoxWrapper({ title, children }) {
  return (
    <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
      <p className="text-[#FEF8FD] font-medium">{title}</p>
      {children}
    </div>
  );
}
