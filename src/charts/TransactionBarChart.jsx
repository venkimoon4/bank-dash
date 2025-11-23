import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "keep-react";

const TransactionBarChart = () => {
  const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "cyan",
    },
  };

  return (
    <ChartContainer
      config={chartConfig}
      className="w-full lg:h-[11.2rem] md:h-[15rem]"
    >
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
        <ChartLegend verticalAlign="top" content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="cyan" radius={[8, 8, 0, 0]} barSize={35}>
          <LabelList
            position="top"
            offset={12}
            className="fill-metal-600 dark:fill-metal-300"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
};

export default TransactionBarChart;
