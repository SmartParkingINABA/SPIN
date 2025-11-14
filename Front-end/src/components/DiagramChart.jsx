import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function DiagramChart({ colors = [], exitEntryDatas = [] }) {
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={exitEntryDatas}
        cx="50%"
        cy="50%"
        outerRadius={120}
        dataKey="value"
      >
        {exitEntryDatas.map((entry, index) => (
          <Cell key={index} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}
