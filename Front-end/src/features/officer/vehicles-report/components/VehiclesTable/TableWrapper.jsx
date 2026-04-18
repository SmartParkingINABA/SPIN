export default function TableWrapper({ children }) {
  return (
    <div className="border-2 border-[rgba(147,163,182,0.8)] rounded-md overflow-hidden">
      <table className="w-full table-auto">{children}</table>
    </div>
  );
}
