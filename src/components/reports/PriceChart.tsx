"use client";
import React from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { Bar, BarChart, CartesianGrid, Legend, YAxis } from "recharts";

const data = [
  { name: "Jan", buyingPrice: 3, expectedValue: 4, sellingPrice: 1.5 },
  { name: "Feb", buyingPrice: 2.5, expectedValue: 1.8, sellingPrice: 3.5 },
  { name: "Mar", buyingPrice: 4, expectedValue: 1.8, sellingPrice: 2.5 },
  { name: "Apr", buyingPrice: 3.5, expectedValue: 1.5, sellingPrice: 2 },
  { name: "May", buyingPrice: 4.2, expectedValue: 1.2, sellingPrice: 3.5 },
  { name: "Jun", buyingPrice: 3.78, expectedValue: 1.8, sellingPrice: 3.9 },
  { name: "Jul", buyingPrice: 1.5, expectedValue: 2.8, sellingPrice: 3.9 },
  { name: "Aug", buyingPrice: 1.8, expectedValue: 4.2, sellingPrice: 1.5 },
];

const chartConfig = {} satisfies ChartConfig;
const PriceChart = () => {
  return (
    <ChartContainer config={chartConfig} className="mx-auto h-[420px] w-full">
      <BarChart data={data}>
        <Legend align="center" verticalAlign="top" />

        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent />}
          accessibilityLayer
        />
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />

        <YAxis stroke="#888" />

        <Bar
          dataKey="buyingPrice"
          fill="#A4A4A4"
          name="Buying Price"
          radius={5}
        ></Bar>
        <Bar
          dataKey="expectedValue"
          fill="#B4C54F"
          name="Expected Value"
          radius={5}
        />
        <Bar
          dataKey="sellingPrice"
          fill="#5BC641"
          name="Selling Price"
          radius={5}
        />
      </BarChart>
    </ChartContainer>
  );
};

export default PriceChart;
