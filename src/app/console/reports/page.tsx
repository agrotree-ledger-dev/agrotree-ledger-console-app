import { auth } from "@/auth";
import { Info } from "lucide-react";
import React from "react";

import AccountInfoHeader from "@/components/account/AccountInfoHeader";
import MyTreeCard from "@/components/console/portfolio/MyTreeCard";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import AccountStatisticGrid from "@/components/reports/AccountStatisticGrid";
import GrowthRateByLocation from "@/components/reports/GrowthRateByLocation";
import NftOwnershipDistribution from "@/components/reports/NftOwnershipDistribution";
import TreeSpeciesDistribution from "@/components/reports/TreeSpeciesDistribution";
import PriceStatictic from "@/components/reports/PriceStatictic";

const ReportsPage = async () => {
  const session = await auth();
  if (!session || !session.user.id) {
    return null;
  }
  return (
    <div className="space-y-5">
      <AccountInfoHeader userId={session.user.id} />

      <AccountStatisticGrid userId={session.user.id} />

      <div className="grid xl:grid-cols-5 gap-5">
        <div className="xl:col-span-2">
          <NftOwnershipDistribution userId={session.user.id} />
        </div>
        <div className="xl:col-span-3">
          <GrowthRateByLocation userId={session.user.id} />
        </div>
      </div>
      <div className="grid xl:grid-cols-5 gap-5">
        <div className="xl:col-span-2 space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-green-700 p-5 rounded-md text-center space-y-1">
              <div className="text-white text-4xl font-bold">98%</div>
              <div className="flex items-center justify-center text-muted-foreground text-sm uppercase">
                <div className="whitespace-pre-wrap">
                  Canopy coverage
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="w-4 h-4 ml-1 text-gray-400 cursor-default shrink-0 align-info-icon" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Percentage of the area covered by the tree canopy</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
            <div className="bg-slate-700 p-5 rounded-md text-center space-y-1">
              <div className="text-white text-4xl font-bold">3.2 Yrs</div>
              <div className="flex items-center justify-center text-muted-foreground text-sm uppercase">
                <div className="whitespace-pre-wrap">
                  Average Harvest period
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="w-4 h-4 ml-1 text-gray-400 cursor-default shrink-0 align-info-icon" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Average time until harvest, depending on the tree
                          species
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </div>
          <TreeSpeciesDistribution userId={session.user.id} />
        </div>
        <div className="xl:col-span-3">
          <PriceStatictic userId={session.user.id} />
        </div>
      </div>
      <MyTreeCard address={session.user.id} />
    </div>
  );
};

export default ReportsPage;
