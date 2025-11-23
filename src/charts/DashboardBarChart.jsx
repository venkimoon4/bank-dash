import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "keep-react";

const DashboardBarChart = () => {
  const chartData = [
    { month: "January", desktop: 186, mac: 300 },
    { month: "February", desktop: 305, mac: 50 },
    { month: "March", desktop: 237, mac: 380 },
    { month: "April", desktop: 233, mac: 100 },
    { month: "May", desktop: 209, mac: 200 },
    { month: "June", desktop: 214, mac: 500 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "blue",
    },
    mac: {
      label: "Mac",
      color: "cyan",
    },
  };

  return (
    <ChartContainer config={chartConfig} className="w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend
          verticalAlign="top"
          align="right"
          content={<ChartLegendContent />}
        />
        <Bar
          dataKey="desktop"
          activeIndex={2}
          activeShape={({ ...props }) => {
            return <Rectangle {...props} fill="blue" fillOpacity={1} />;
          }}
          fill="blue"
          // fillOpacity={0.2}
          radius={[100, 100, 0, 0]}
          barSize={15}
        />
        <Bar
          dataKey="mac"
          activeIndex={2}
          activeShape={({ ...props }) => {
            return <Rectangle {...props} fill="cyan" fillOpacity={1} />;
          }}
          fill="cyan"
          // fillOpacity={0.2}
          radius={[100, 100, 0, 0]}
          barSize={15}
        />
      </BarChart>
    </ChartContainer>
  );
};

export default DashboardBarChart;
