import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const dataLine = [
  { label: "21 Nov", keluar: 12, masuk: 10 },
  { label: "22 Nov", keluar: 10, masuk: 14 },
  { label: "23 Nov", keluar: 14, masuk: 12 },
  { label: "24 Nov", keluar: 8, masuk: 9 },
  { label: "25 Nov", keluar: 10, masuk: 9 },
  { label: "26 Nov", keluar: 11, masuk: 12 },
  { label: "27 Nov", keluar: 9, masuk: 10 },
];

export default function AdminChartInOut() {
  return (
    <div className="w-full h-80 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={dataLine}
          // margin={{ top: 20, right: 10, left: 0, bottom: 20 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="rgba(255,255,255,0.1)"
          />

          <XAxis
            dataKey="label"
            stroke="#93A3B6"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            width={28}
            stroke="#93A3B6"
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            cursor={{ stroke: "#5B7CFA", strokeWidth: 1 }}
            contentStyle={{
              backgroundColor: "#130F40",
              border: "none",
            }}
            labelStyle={{ color: "#FEF8FD" }}
            formatter={(value, name) => {
              if (name === "masuk") return [value, "Masuk "];
              if (name === "keluar") return [value, "Keluar "];
            }}
          />

          {/* LINE KELUAR */}
          <Line
            type="monotone"
            dataKey="keluar"
            stroke="#FFD54F"
            strokeWidth={2}
            dot={true}
            animationDuration={800}
          />

          {/* LINE MASUK */}
          <Line
            type="monotone"
            dataKey="masuk"
            stroke="#5B7CFA"
            strokeWidth={2}
            dot={true}
            animationDuration={800}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
