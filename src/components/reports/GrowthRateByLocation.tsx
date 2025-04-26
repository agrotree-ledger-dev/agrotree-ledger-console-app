"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Info } from "lucide-react";
import GrowthRateByLocationChart from "./GrowthRateByLocationChart";
type Props = {
  userId: string;
};
const locations = ["Apac", "NA", "US", "EU"];
const GrowthRateByLocation: React.FC<Props> = ({}) => {
  const [timeRange, setTimeRange] = useState("Week");
  return (
    <div className="bg-muted/50 p-5 rounded-md">
      <div className="flex justify-between items-center mb-4 border-b border-b-muted pb-5">
        <h3>Growth Rate By Location</h3>
        <div className="flex space-x-2">
          <Button
            variant={timeRange === "Week" ? "secondary" : "ghost"}
            onClick={() => setTimeRange("Week")}
          >
            Week
          </Button>
          <Button
            variant={timeRange === "Month" ? "secondary" : "ghost"}
            onClick={() => setTimeRange("Month")}
          >
            Month
          </Button>
          <Button
            variant={timeRange === "Year" ? "secondary" : "ghost"}
            onClick={() => setTimeRange("Year")}
          >
            Year
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <Select defaultValue={locations[0]}>
          <SelectTrigger className="w-[180px] bg-transparent ">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((location) => (
              <SelectItem key={location} value={location}>
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-cyanTeal mr-2"></div>
            <div className="whitespace-pre-wrap">
              <span className="text-sm">Observed Growth Rate</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-4 h-4 ml-1 text-gray-400 cursor-default shrink-0 align-info-icon" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      The current rate of growth observed for the tree, based on
                      changes in its size over time
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-darkBlue mr-2"></div>
            <div className="whitespace-pre-wrap">
              <span className="text-sm">Standard Growth Rate</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-4 h-4 ml-1 text-gray-400 cursor-default shrink-0 align-info-icon" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      The expected growth rate for a tree according to his
                      species and age, based on typical size benchmarks
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
      <GrowthRateByLocationChart />
    </div>
  );
};

export default GrowthRateByLocation;
