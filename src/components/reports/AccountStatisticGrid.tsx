"use client";
import { getTotalTreeCountFromShyft } from "@/_actions/shyft.action";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Info } from "lucide-react";
import Tooltip from "../ui/tooltip";

import { Loader2Icon } from "lucide-react";
type Props = {
  userId: string;
};
const AccountStatisticGrid: React.FC<Props> = ({ userId }) => {
  const { data: totalTree, isLoading: isLoadingTotalTree } = useQuery({
    queryKey: ["total-tree-count", userId],
    queryFn: async () => getTotalTreeCountFromShyft(userId),
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5">
      <div className="bg-cyan-500 p-5 rounded-md text-center space-y-1">
        <div className="text-white text-4xl font-bold">2.3 Yrs</div>
        <div className="text-white text-sm uppercase">Average Tree Age</div>
      </div>
      <div className="bg-lime-500 p-5 rounded-md text-center space-y-1">
        <div className="text-white text-4xl font-bold flex flex-col justify-center">
          {isLoadingTotalTree ? (
            <Loader2Icon className="size-10 animate-spin self-center" />
          ) : totalTree ? (
            totalTree
          ) : (
            0
          )}
        </div>
        <div className="text-white text-sm uppercase">Total Tree Count</div>
      </div>
      <div className="bg-blue-500 p-5 rounded-md text-center space-y-1">
        <div className="text-white text-4xl font-bold">236</div>
        <div className="text-white flex items-center justify-center text-muted-foreground text-sm uppercase">
          <div className="whitespace-pre-wrap">
            CO2 Sequestration
            <Tooltip content="Total expected CO₂ absorption by trees in your portfolio (in tonnes)" side="top">
              <Info className="w-4 h-4 ml-1 text-gray-400 cursor-default shrink-0 align-info-icon" />
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="bg-green-700 p-5 rounded-md text-center space-y-1">
        <div className="text-white text-4xl font-bold">100%</div>
        <div className="text-white flex items-center justify-center text-muted-foreground text-sm uppercase">
          <div className="whitespace-pre-wrap">
            Tree Survival Rate
            <Tooltip content="Percentage of trees that are successfully growing and not marked as dead or underperforming" side="top">
              <Info className="w-4 h-4 ml-1 text-gray-400 cursor-default shrink-0 align-info-icon" />
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="bg-green-400 p-5 rounded-md text-center space-y-1">
        <div className="text-white text-4xl font-bold">+8.9%</div>
        <div className="text-white flex items-center justify-center text-muted-foreground text-sm uppercase">
          <div className="whitespace-pre-wrap">
            Average Expected Annual ROI
            <Tooltip content="Calculated from the average of all tree investments' expected ROI, based on historical data and forecasted growth" side="top">
              <Info className="w-4 h-4 ml-1 text-gray-400 cursor-default shrink-0 align-info-icon" />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountStatisticGrid;
