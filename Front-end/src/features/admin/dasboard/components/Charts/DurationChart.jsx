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
  { label: "21 Nov", duration: 129 },
  { label: "22 Nov", duration: 140 },
  { label: "23 Nov", duration: 130 },
  { label: "24 Nov", duration: 120 },
  { label: "25 Nov", duration: 115 },
  { label: "26 Nov", duration: 110 },
  { label: "27 Nov", duration: 146 },
];

export default function DurationChart() {
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
            formatter={(value) => [`${value}`, "Durasi (menit) "]}
          />

          <Line
            type="monotone"
            dataKey="duration"
            stroke="#FFD54F"
            strokeWidth={2}
            dot={true}
            animationDuration={800}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
