import { auth } from "@/auth";
import AccountForm from "@/components/account/AccountForm";
import HeaderPage from "@/components/layout/HeaderPage";
import { redirect } from "next/navigation";
import React from "react";

const AccountPage = async () => {
  const session = await auth();
  if (!session || !session.user.id) {
    redirect("/");
  }
  return (
    <div>
      <HeaderPage
        title="Account settings"
        description="Manage your account settings"
      />
      <div className="py-5">
        <AccountForm userId={session.user.id} />
      </div>
    </div>
  );
};

export default AccountPage;
