"use client";

import React from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
const data = [
  { day: "Mon", observed: 35, standard: 20 },
  { day: "Tue", observed: 60, standard: 40 },
  { day: "Wed", observed: 45, standard: 35 },
  { day: "Thurs", observed: 50, standard: 30 },
  { day: "Fri", observed: 35, standard: 25 },
  { day: "Sat", observed: 30, standard: 20 },
  { day: "Sun", observed: 40, standard: 30 },
];

const chartConfig = {} satisfies ChartConfig;
const GrowthRateByLocationChart = () => {
  return (
    <ChartContainer config={chartConfig} className="mx-auto h-[240px] w-full">
      <AreaChart data={data}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <Area
          type="monotone"
          dataKey="observed"
          stroke="#2bc4c9"
          fill="#2bc4c9"
          fillOpacity={0.8}
        />
        <Area
          type="monotone"
          dataKey="standard"
          stroke="#227fbb"
          fill="#227fbb"
          fillOpacity={0.8}
        />
        <XAxis dataKey="day" stroke="#888" />
        <YAxis stroke="#888" />
      </AreaChart>
    </ChartContainer>
  );
};

export default GrowthRateByLocationChart;
