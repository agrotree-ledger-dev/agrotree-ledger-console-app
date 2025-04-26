"use client";
import React from "react";
import { truncateAddress } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { getAccountAction } from "./account.action";
import { Skeleton } from "../ui/skeleton";
type Props = {
  userId: string;
};
const AccountInfoHeader: React.FC<Props> = ({ userId }) => {
  const { data: accountInfo, isLoading } = useQuery({
    queryKey: ["get-account-info", userId],
    queryFn: async () => getAccountAction(userId),
  });
  return (
    <div className="flex items-start gap-5 bg-muted/50 p-5 rounded-md">
      {isLoading ? (
        <>
          <div className="rounded-lg bg-muted size-10 flex items-center text-justify">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">
              <Skeleton className="w-24 h-4" />
            </h3>
            <h4 className="text-xs text-muted-foreground">
              <Skeleton className="w-18 h-3" />
            </h4>
          </div>
        </>
      ) : (
        accountInfo && (
          <>
            <div className="rounded-lg bg-muted size-10 flex items-center text-justify">
              <div className="text-center w-full">
                {accountInfo.id.slice(0, 2)}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold">
                {accountInfo.name || truncateAddress(accountInfo.id)}
              </h3>
              <h4 className="text-xs text-muted-foreground">Investor</h4>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default AccountInfoHeader;
