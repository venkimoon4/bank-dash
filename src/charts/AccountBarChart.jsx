import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "keep-react";

const AccountBarChart = () => {
  const chartData = [
    { month: "January", desktop: 186, mac: 200 },
    { month: "February", desktop: 305, mac: 100 },
    { month: "March", desktop: 237, mac: 70 },
    { month: "April", desktop: 73, mac: 90 },
    { month: "May", desktop: 209, mac: 10 },
    { month: "June", desktop: 214, mac: 150 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "blue",
    },
    mac: {
      label: "Mac",
      color: "orange",
    },
  };

  return (
    <ChartContainer
      config={chartConfig}
      className="w-full lg:h-[18.2rem] md:[10rem]"
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
        <Bar dataKey="desktop" fill="blue" radius={[8, 8, 0, 0]} barSize={15}>
          <LabelList
            position="top"
            offset={12}
            className="fill-metal-600 dark:fill-metal-300"
            fontSize={12}
          />
        </Bar>
        <Bar dataKey="mac" fill="orange" radius={[8, 8, 0, 0]} barSize={15}>
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

export default AccountBarChart;
