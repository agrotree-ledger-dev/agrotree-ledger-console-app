"use client";
import { Loader2Icon, PercentIcon, TreePineIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useQuery } from "@tanstack/react-query";
import { getTotalTreeCountFromShyft } from "@/_actions/shyft.action";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
type Props = {
  userId: string;
};
const AccountStatistic: React.FC<Props> = ({ userId }) => {
  const { data: totalTree, isLoading: isLoadingTotalTree } = useQuery({
    queryKey: ["total-tree-count", userId],
    queryFn: async () => getTotalTreeCountFromShyft(userId),
  });
  const [currency, setCurrency] = useState<"USD" | "SOL">("USD");
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <div className="bg-muted/50 p-5 rounded-md space-y-5">
        <div className="flex justify-between items-center border-b pb-5">
          <div className="fle flex-col space-y-5">
            <div className="bg-muted rounded-full size-10 p-2.5 flex items-center justify-center">
              <PercentIcon />
            </div>
            <div>
              <h3 className="flex items-center justify-center text-muted-foreground text-sm">
                <div className="whitespace-pre-wrap">
                  Average Expected Annual ROI
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="w-4 h-4 ml-1 text-gray-400 cursor-default shrink-0 align-info-icon" />
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>
                          Return on investment based on initial NFT price,
                          projected sale price post-harvest, and time elapsed
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </h3>
            </div>
          </div>
          <div>
            <span className="text-green-500 text-3xl font-bold">+ 8.9%</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h3 className="flex items-center justify-center text-muted-foreground text-sm">
              <div className="whitespace-pre-wrap">
                Total Expected Tonnes of CO2 Offset
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="w-4 h-4 ml-1 text-gray-400 cursor-default shrink-0 align-info-icon" />
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p>
                        Expected total carbon dioxide offset by your tree
                        holdings (measured in tonnes)
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </h3>
          </div>
          <div className="flex flex-col space-y-5">
            <div>
              <div className="text-3xl font-bold text-right">236</div>
              <span className="text-right text-xs text-muted-foreground">
                Tonnes of CO2
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-muted/50 p-5 rounded-md space-y-5">
        <div className="flex justify-between items-center border-b pb-5">
          <div className="fle flex-col space-y-5">
            <div className="bg-muted rounded-full size-10 p-2.5 flex items-center justify-center">
              <TreePineIcon />
            </div>
            <div>
              <h3 className="flex items-center justify-center text-muted-foreground text-sm">
                <div className="whitespace-pre-wrap">
                  NFTs Tree - Total number
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="w-4 h-4 ml-1 text-gray-400 cursor-default shrink-0 align-info-icon" />
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>Total number of NFTs (trees) in your ownership</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </h3>
            </div>
          </div>
          <div>
            <span className="text-3xl font-bold">
              {isLoadingTotalTree ? (
                <Loader2Icon className="size-8 animate-spin stroke-muted-foreground" />
              ) : (
                totalTree
              )}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div className="flex flex-col space-y-5 items-start">
            <div>
              <span className="flex items-center justify-center text-right text-xs text-muted-foreground">
                <div className="whitespace-pre-wrap">
                  Total Investment Estimated Value
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="w-4 h-4 ml-1 text-gray-400 cursor-default shrink-0 align-info-icon" />
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>
                          Total investment value in USD, based on the current
                          market value of the NFTs
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </span>
              <div className="text-3xl font-bold text-right">
                {Number(47706).toLocaleString()}{" "}
                <span className="text-muted-foreground text-sm">
                  {currency}
                </span>
              </div>
            </div>
          </div>
          <div className="space-x-2">
            <Button
              variant={currency === "USD" ? "secondary" : "ghost"}
              onClick={() => setCurrency("USD")}
            >
              USD
            </Button>
            <Button
              variant={currency === "SOL" ? "secondary" : "ghost"}
              onClick={() => setCurrency("SOL")}
            >
              SOL
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountStatistic;
