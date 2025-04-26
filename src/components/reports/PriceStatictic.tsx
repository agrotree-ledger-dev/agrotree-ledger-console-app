"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import PriceChart from "./PriceChart";
type Props = {
  userId: string;
};
const PriceStatictic: React.FC<Props> = ({}) => {
  const [currency, setCurrency] = useState<"SOL" | "USD">("SOL");
  const [timeRange, setTimeRange] = useState("Week");
  return (
    <div className="bg-muted/50 p-5 rounded-md">
      <div className="flex justify-between items-center mb-4 border-b border-b-muted pb-5">
        <div className="flex space-x-2">
          <Button
            variant={currency === "SOL" ? "secondary" : "outline"}
            onClick={() => setCurrency("SOL")}
            className="text-sm"
          >
            SOL
          </Button>
          <Button
            variant={currency === "USD" ? "secondary" : "outline"}
            onClick={() => setCurrency("USD")}
            className="text-sm"
          >
            USD
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button
            variant={timeRange === "Week" ? "secondary" : "ghost"}
            onClick={() => setTimeRange("Week")}
            className="text-sm"
          >
            Week
          </Button>
          <Button
            variant={timeRange === "Month" ? "secondary" : "ghost"}
            onClick={() => setTimeRange("Month")}
            className="text-sm"
          >
            Month
          </Button>
          <Button
            variant={timeRange === "Year" ? "secondary" : "ghost"}
            onClick={() => setTimeRange("Year")}
            className="text-sm"
          >
            Year
          </Button>
        </div>
      </div>
      <PriceChart />
    </div>
  );
};

export default PriceStatictic;
