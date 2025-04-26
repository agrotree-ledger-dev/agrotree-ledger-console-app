"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { AspectRatio } from "../ui/aspect-ratio";
import { ScrollArea } from "../ui/scroll-area";

export const description = "A donut chart with text";

const chartData = [
  { owner: "Melissa LEE", quantity: 275, fill: "#2bc4c9" },
  { owner: "Andrew Isernatch", quantity: 200, fill: "#3D8FC2" },
  { owner: "0x2335728876", quantity: 287, fill: "#22d3ee" },
  { owner: "ADB", quantity: 173, fill: "#1A5895" },
  { owner: "Other", quantity: 190, fill: "#266D9A" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
} satisfies ChartConfig;

export default function NftOwnershipDistributionChart() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.quantity, 0);
  }, []);

  return (
    <div className="grid lg:grid-cols-2">
      <AspectRatio>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] min-h-[250px]"
        >
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Pie
              data={chartData}
              dataKey="quantity"
              nameKey="owner"
              innerRadius={60}
              strokeWidth={5}
              paddingAngle={2}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Trees Tokenized
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </AspectRatio>
      <div className="p-5">
        <ScrollArea>
          {chartData.map((item, index) => (
            <div key={index} className="pb-2">
              <div className="flex items-center space-x-2">
                <div
                  className="w-4 h-4 rounded-sm"
                  style={{ backgroundColor: item.fill }}
                />
                <span className="text-sm text-muted-foreground">
                  {item.owner}
                </span>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
}
