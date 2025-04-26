"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import TreeSpeciesDistributionChart from "./TreeSpeciesDistributionChart";
type Props = {
  userId: string;
};
const locations = ["Apac", "NA", "US", "EU"];
const TreeSpeciesDistribution: React.FC<Props> = ({}) => {
  return (
    <div className="bg-muted/50 p-5 rounded-md">
      <div className="flex justify-between items-center mb-4 border-b border-b-muted pb-5">
        <h3>Tree Species Distribution / Location</h3>
        <Select defaultValue={locations[0]}>
          <SelectTrigger className="w-[180px] bg-transparent">
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
      </div>
      <div>
        <TreeSpeciesDistributionChart />
      </div>
    </div>
  );
};

export default TreeSpeciesDistribution;
