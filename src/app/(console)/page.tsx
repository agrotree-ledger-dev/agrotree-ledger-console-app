import { auth } from "@/auth";
import AccountInfoHeader from "@/components/account/AccountInfoHeader";
import AccountStatistic from "@/components/account/AccountStatistic";
import MyMarketplaceCard from "@/components/console/portfolio/MyMarketplaceCard";
import MyTreeCard from "@/components/console/portfolio/MyTreeCard";
import React from "react";

const DashboardPage = async () => {
  const session = await auth();
  if (!session || !session.user.id) {
    return null;
  }
  return (
    <div className="space-y-5">
      <AccountInfoHeader userId={session.user.id} />
      <AccountStatistic userId={session.user.id} />
      <MyTreeCard address={session.user.id} />
      <MyMarketplaceCard address={session.user.id} />
    </div>
  );
};

export default DashboardPage;
