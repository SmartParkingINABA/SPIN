import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Ahmad Khoerudin", total: 1 },
  { name: "Ridwan Safri", total: 3 },
  { name: "Irwan Mussy", total: 2 },
];

export default function AdminBoxChartReportRider() {
  return (
    <div className="w-full h-80 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ left: -23 }}>
          {/* Garis grid putus-putus seperti gambar */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} domain={[0, "dataMax + 1"]} />
          <Tooltip
            cursor={{ fill: "rgba(147,163,182,0.54)" }}
            contentStyle={{
              backgroundColor: "#130F40",
              border: "none",
            }}
            labelStyle={{ color: "#FEF8FD" }}
            formatter={(value) => [`${value}`, "Jumlah Parkir "]}
          />

          {/* Batang */}
          <Bar dataKey="total" radius={[4, 4, 0, 0]} fill="#FFD54F" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
