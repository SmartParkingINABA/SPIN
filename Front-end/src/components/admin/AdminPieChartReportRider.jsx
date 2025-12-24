import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Ahmad Khoerudin", value: 2 },
  { name: "Ridwan Safri", value: 5 },
  { name: "Irwan Mussy", value: 2 },
];

const COLORS = ["#4CAF50", "#2b7fff", "#9C27B0"];

export default function AdminPieChartReportRider() {
  return (
    <div className="w-full h-80 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={({ name }) => name}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: "#130F40",
              border: "none",
            }}
            labelStyle={{ color: "#FEF8FD" }}
            itemStyle={{ color: "#FEF8FD" }}
            formatter={(value) => [`${value}`, "Jumlah"]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
