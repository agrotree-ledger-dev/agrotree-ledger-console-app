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
  { specie: "Teak tree", quantity: 275, fill: "#a83bb8" },
  { specie: "Agarwood", quantity: 200, fill: "#8b6c50" },
  { specie: "Paulownia", quantity: 287, fill: "#4e8f71" },
  { specie: "Eucaliptus", quantity: 173, fill: "#e7ce50" },
  { specie: "Acacia", quantity: 190, fill: "#eca265" },
];

const chartConfig = {
  species: {
    label: "Tree species",
  },
} satisfies ChartConfig;

export default function TreeSpeciesDistributionChart() {
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
              nameKey="specie"
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
                        dominantBaseline="middle">
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
                <span className="text-sm text-muted-foreground uppercase">
                  {item.specie}
                </span>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
}