export default function TableHeader({ columns }) {
  return (
    <thead>
      <tr className="border-b-2 border-[rgba(147,163,182,0.8)]">
        {columns.map((col, index) => (
          <th key={index} className="text-[#FFEC78] p-2 text-[14px] text-start">
            {col}
          </th>
        ))}
      </tr>
    </thead>
  );
}
