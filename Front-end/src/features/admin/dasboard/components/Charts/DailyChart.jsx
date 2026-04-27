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
  { label: "21 Nov", total: 45 },
  { label: "22 Nov", total: 52 },
  { label: "23 Nov", total: 38 },
  { label: "24 Nov", total: 65 },
  { label: "25 Nov", total: 58 },
  { label: "26 Nov", total: 73 },
  { label: "27 Nov", total: 48 },
];

export default function DailyChart() {
  return (
    <div className="w-full h-80 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ left: -23 }}>
          {/* Garis grid putus-putus seperti gambar */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis dataKey="label" />
          <YAxis />
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
