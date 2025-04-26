"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import NftOwnershipDistributionChart from "./NftOwnershipDistributionChart";
type Props = {
  userId: string;
};
const NftOwnershipDistribution: React.FC<Props> = ({}) => {
  return (
    <div className="bg-muted/50 p-5 rounded-md">
      <div className="flex justify-between items-center mb-4 border-b border-b-muted pb-5">
        <h3>NFT Ownership Distribution</h3>
        <Select defaultValue="24h">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="24h">Last 24 Hours</SelectItem>
            <SelectItem value="7d">Last 7 Days</SelectItem>
            <SelectItem value="30d">Last 30 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <NftOwnershipDistributionChart />
      </div>
    </div>
  );
};

export default NftOwnershipDistribution;
